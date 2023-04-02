<template>
  <div class="content px-sp">
    <!-- 詳細 -->
    <PagesAreaDetailDescriptionPc class="hidden-sm-down" :city="city" />
    <PagesAreaDetailDescriptionSp class="hidden-md-up" :city="city" />

    <!-- マップ -->
    <PagesAreaDetailGoogleMap :city="city" class="hidden-sm-down" />
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.creditcard-text {
  font-weight: 700;
  font-size: 14px;
}
</style>
