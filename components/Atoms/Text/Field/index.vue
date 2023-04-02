<template>
  <v-text-field
    :label="isForm ? '' : label ? label : ''"
    :rules="rules()"
    v-model="innerValue"
    :prepend-icon="icon"
    :prepend-inner-icon="prependInnerIcon"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :counter="counter"
    :clearable="clearable"
    :hint="$st(hint)"
    :persistent-hint="hint ? true : false"
    :single-line="singleLine"
    :color="color"
    :loading="isLoading"
    :error-messages="innerError"
    @focus="focus"
    @change="change"
    :autofocus="autofocus"
    :tabindex="tabindex"
    :disabled="disabled"
    :type="type"
    :readonly="readonly"
    outlined
    dense
    hide-details="auto"
    background-color="formText"
  />
</template>

<script>
export default {
  props: {
    tabindex: Number,
    value: [String, Number],
    label: String,
    icon: String,
    prependInnerIcon: String,
    hint: String,
    color: String,
    maxlength: Number,
    isReadOnly: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    counter: {
      type: [Number, String],
      default: null,
    },
    minCounter: {
      type: [Number, String],
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    singleLine: {
      type: Boolean,
      default: false,
    },
    errors: [String, Array],
    required: {
      type: Boolean,
      default: false,
    },
    maxValue: {
      type: [Number, String],
      default: null,
    },
    minValue: {
      type: [Number, String],
      default: null,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    isValidate: {
      type: Boolean,
      default: true,
    },
    isForm: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    rules() {
      if (!this.isValidate) {
        return;
      }
      var rule = [];
      if (this.required) {
        rule.push((v) => v === 0 || !!v || this.$st('必須入力です'));
      }

      if (this.type == 'number') {
        rule.push((v) => {
          const pattern = /\D/;
          return !pattern.test(v) || '半角数値のみ入力可能です';
        });
      } else if (this.type == 'integer') {
        // 符号あり
        rule.push((v) => {
          const pattern = /^[+,-]?(\d+)$/;
          return pattern.test(v) || '半角数値のみ入力可能です';
        });
      } else if (this.type == 'decimal') {
        // 小数点
        rule.push((v) => {
          const pattern = /^(\d+)+(\.\d+)?$/;
          return !v || pattern.test(v) || '半角数値のみ入力可能です';
        });
      } else if (this.type == 'postalCode') {
        // ハイフン符号あり
        rule.push((v) => {
          const pattern = /^(\d){3}[-]?(\d){4}$/;
          return !v || pattern.test(v) || '郵便番号形式で入力ください';
        });
      } else if (this.type == 'phone') {
        rule.push((v) => {
          const pattern = /^0[6789]0-?[0-9]{4}-?[0-9]{4}$/;
          return !v || pattern.test(v) || '携帯電話番号形式で入力してください';
        });
      }
      if (this.minCounter) {
        rule.push(
          (v) =>
            (v == null ? 0 : v.toString().length) >= Number(this.minCounter) ||
            this.$st('最小__REPLASE__文字').replace(
              '__REPLASE__',
              this.minCounter
            )
        );
      }

      if (this.maxValue) {
        rule.push(
          (v) =>
            Number(v) <= Number(this.maxValue) ||
            this.$st('最大__REPLASE__まで').replace(
              '__REPLASE__',
              this.maxValue
            )
        );
      }

      if (this.minValue) {
        rule.push(
          (v) =>
            Number(v) >= Number(this.minValue) ||
            this.$st('最小__REPLASE__から').replace(
              '__REPLASE__',
              this.minValue
            )
        );
      }

      if (this.counter) {
        rule.push(
          (v) =>
            (v == null ? 0 : v.toString().length) <= Number(this.counter) ||
            this.$st('最大__REPLASE__文字').replace('__REPLASE__', this.counter)
        );
      }

      rule.push(
        (v) =>
          (v == null ? 0 : v.toString().length) <= Number(1000) ||
          this.$st('最大__REPLASE__文字').replace('__REPLASE__', 1000)
      );

      if (this.errorMessage) {
        rule.push(this.errorMessage);
      }
      return rule;
    },
    change() {
      this.$emit('change');
    },
    focus() {
      this.innerError = null;
      this.$emit('focus');
    },
  },
  data() {
    return {
      innerError: null,
    };
  },
  mounted() {
    this.innerError = this.errors;
  },
  watch: {
    errors(val) {
      this.innerError = val;
    },
  },
  computed: {
    innerValue: {
      get() {
        return this.value === undefined || this.value === null
          ? ''
          : this.$st(this.value);
      },
      set(val) {
        if (this.type === 'postalCode') val = this.$formatPostalCode(val);
        this.$emit('input', val);
      },
    },
  },
};
</script>
