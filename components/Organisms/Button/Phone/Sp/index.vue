<template>
  <v-card
    v-if="phone"
    color="error"
    dark
    :href="'tel:' + phone"
    height="55px"
    class="button-wrap"
    width="100%"
  >
    <div class="flex-box justify-center py-1">
      <div class="pa-2">
        <v-avatar color="white" size="28">
          <v-icon size="16" color="error">fa-phone-volume</v-icon>
        </v-avatar>
      </div>
      <div class="mt-1">
        <div class="body-2 font-weight-bold" style="margin-bottom: -10px">
          電話をかける<span class="caption">無料</span>
        </div>
        <div class="caption mt-1" style="padding-left: 2px">
          24時間365日受付中
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const { phone } = useCommonConfigStore();
    return { phone };
  },
});
</script>

<style lang="scss">
.button-wrap {
  box-shadow: inset 0 -4px 0 rgb(84 84 88 / 40%);
}
</style>
