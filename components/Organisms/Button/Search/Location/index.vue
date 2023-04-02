<template>
  <div>
    <v-btn color="primary" block large>
      <v-icon left>fa-map-marker-alt</v-icon>
      現在地から探す
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    buttonWidth: {
      type: String,
      default: '96px',
    },
    color: {
      type: String,
      default: 'transparent',
    },
    iconSize: {
      type: String,
      default: '24px',
    },
    isVerticalTitle: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.pref-search-title {
  font-family: Hiragino Sans;
  font-size: 18px;
  font-weight: 700;
  .pref-search-subtitle {
    font-size: 14px;
    white-space: nowrap;
  }
}
</style>
