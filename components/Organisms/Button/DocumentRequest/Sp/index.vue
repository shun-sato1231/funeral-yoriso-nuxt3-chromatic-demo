<template>
  <v-card
    color="accent2"
    dark
    :href="$to('/request/')"
    class="py-1"
    height="55px"
  >
    <div class="flex-box justify-center">
      <div class="white svg-wrapper ml-1"></div>
      <div class="ml-2 mt-1">
        <div class="body-2 font-weight-bold" style="margin-bottom: -10px">
          無料で資料請求
        </div>
        <div class="caption mt-1">かんたん入力45秒</div>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
.document-request-subtitle {
  font-weight: 700 !important;
  vertical-align: initial;
  font-size: 16px !important;
  line-height: 1.6;
  color: rgb(var(--v-theme-primary));
  text-align: left;
}
.document-request-button-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
}
.svg-wrapper {
  width: 30px;
  height: 30px;
  border-radius: 9999px;
  background-image: url('/img/common/area/request_icon.svg');
  background-position: center;
}
</style>
