<template>
  <h2 class="title content text-center mx-auto">
    <slot v-if="$scopedSlots.default" />
    <span v-else class="accent-title-bottom">{{ title }}</span>
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 28px !important;

  @include md-up {
    margin: 30px 0;
  }
  @include sm-down {
    margin: 15px 0;
  }
}
</style>
