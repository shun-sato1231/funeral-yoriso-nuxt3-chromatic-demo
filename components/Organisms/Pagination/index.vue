<template>
  <div>
    <div class="hidden-sm-down" v-if="meta && meta.last_page > 1">
      <slot v-if="$scopedSlots.pc" name="pc" />
      <AtomsPagination
        v-else
        v-model="innerValue"
        :length="meta.last_page"
        class="pt-5"
      />
    </div>
    <MoleculesButtonMore
      class="hidden-md-up"
      :meta="meta"
      :title="title"
      :addItems="addItems"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
    },
    title: {
      type: String,
    },
    meta: {
      type: Object,
    },
    addItems: {
      type: Function,
    },
  },
  computed: {
    innerValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
