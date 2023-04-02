<template>
  <v-row no-gutters class="table">
    <template v-for="(item, index) in items">
      <!-- タイトル -->
      <v-col
        :cols="cols"
        :sm="sm"
        :md="md"
        class="table-title table-under-line"
      >
        <slot name="title" :item="item" v-if="$scopedSlots.title" />
        <span v-else>{{ item.title }}</span>
      </v-col>

      <!-- テキスト -->
      <v-col
        :cols="12 - cols"
        :sm="sm ? 12 - sm : false"
        :md="md ? 12 - md : false"
        class="table-under-line text"
      >
        <slot v-if="$scopedSlots.text" name="text" :item="item" />
        <span v-else v-html="item.text"></span>
      </v-col>
    </template>
  </v-row>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
    cols: {
      type: [String, Number, Boolean],
      default: 2,
    },
    sm: {
      type: [String, Number, Boolean],
      default: false,
    },
    md: {
      type: [String, Number, Boolean],
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  border-top: 1px solid rgb(var(--v-theme-lighten));
  @include md-up {
    font-size: 18px !important;
  }
  @include sm-down {
    font-size: 14px !important;
  }
  .table-title {
    width: 14em;
    vertical-align: top;
    @include md-up {
      font-size: 18px !important;
      padding: 15px;
      background: rgb(var(--v-theme-accentLighten));
    }
    @include sm-down {
      font-size: 14px !important;
      padding: 10px 0;
    }
  }
  .text {
    @include md-up {
      padding: 25px 20px;
    }
    @include sm-down {
      padding: 10px;
    }
  }
  .table-under-line {
    border-bottom: 1px solid rgb(var(--v-theme-lighten));
  }
}
</style>
