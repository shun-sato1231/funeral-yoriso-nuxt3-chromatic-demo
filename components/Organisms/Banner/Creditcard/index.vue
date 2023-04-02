<template>
  <div :class="['flex-box', isCenter ? 'justify-center' : '', 'mt-5']">
    <span class="creditcard-text mr-4" v-if="isCenter"> カード決済対応 </span>
    <div>
      <img
        src="/img/plan/img_creditcard.webp"
        :alt="$const.view.creditcardText"
        :width="width"
        :height="height"
      />
    </div>
    <span class="creditcard-text ml-2 font-weight-bold" v-if="!isCenter"
      >カード決済対応</span
    >
  </div>
</template>

<script>
export default {
  props: {
    isCenter: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: 216,
    },
    height: {
      type: [String, Number],
      default: 27,
    },
  },
};
</script>

<style lang="scss" scoped>
.creditcard-text {
  font-size: 14px;
}
</style>
