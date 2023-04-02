<template>
  <v-card class="top-button text-center pt-1" dark @click="$vuetify.goTo(0)">
    <div>上に</div>
    <div>戻る</div>
  </v-card>
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
.top-button {
  background: #545458;
  width: 48px;
  height: 48px;
  border-radius: 2px;
  transition: opacity 0.25s;
  display: block;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px !important;
}
</style>
