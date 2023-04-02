<template>
  <div>
    <v-pagination
      v-model="innerValue"
      :length="length"
      :total-visible="5"
      v-if="length > 1"
      color="accentLighten2"
      next-aria-label="１ページ進む"
      previous-aria-label="１ページ戻る"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
    },
    length: {
      type: Number,
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

<style lang="scss">
.theme--light.v-pagination .v-pagination__item--active {
  color: rgb(var(--v-theme-primaryText));
  font-weight: bold;
}
.v-pagination__navigation {
  font-weight: bold;
  width: 90px;
  .v-icon {
    font-size: 12px;
  }
}
.v-pagination__navigation[aria-label='１ページ進む'] {
  .v-icon {
    margin-left: 5px;
  }
}
.v-pagination__navigation[aria-label='１ページ戻る'] {
  .v-icon {
    margin-right: 5px;
  }
}
.v-pagination__navigation[aria-label='１ページ進む']:before {
  content: '次へ';
}
.v-pagination__navigation[aria-label='１ページ戻る']:after {
  content: '前へ';
}
</style>
