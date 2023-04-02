<template>
  <v-card
    color="accent2"
    dark
    :href="$to('/request/')"
    class="py-1"
    height="65"
  >
    <div :class="['justify-center flex-box', _class]">
      <div class="white svg-wrapper ml-1"></div>

      <div class="font-weight-bold mr-2 ml-4">
        <div class="mt-1">
          <span class="document-request-button-title"
            >{{ title }}<span class="body-3 ml-1">無料</span>
          </span>
        </div>
        <div class="document-request-subtitle">かんたん入力45秒</div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '資料を請求する',
    },
    _class: {
      type: String,
      default: 'px-3 py-2',
    },
  },
};
</script>

<style lang="scss" scoped>
.document-request-subtitle {
  font-weight: 700 !important;
  vertical-align: initial;
  font-size: 14px !important;
  line-height: 1.2;
  color: var(--v-primary-base);
  text-align: left;
}
.document-request-button-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
}
.svg-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background-image: url('/img/common/area/request_icon.svg');
  background-position: center;
}
</style>
