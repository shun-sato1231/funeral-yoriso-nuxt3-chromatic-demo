<template>
  <v-card :color="color" class="text-center" tile flat>
    <div class="pref-search-title mr-2" v-if="isVerticalTitle">
      郵便番号から探す
      <small class="caption">（ハイフン無し）</small>
    </div>
    <div class="justify-center flex-box">
      <div class="pref-search-title mr-2" v-if="!isVerticalTitle">
        郵便番号から探す
        <small class="pref-search-subtitle">（ハイフン無し）</small>
      </div>
      <div class="ml-4 mr-2">
        <AtomsTextField placeholder="郵便番号を入力" required />
      </div>
      <v-btn
        color="primary"
        height="40px"
        :width="buttonWidth"
        aria-label="郵便番号検索"
      >
        <v-icon :size="iconSize"> fa-search </v-icon>
      </v-btn>
    </div>
  </v-card>
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
}
.pref-search-subtitle {
  font-size: 14px;
  white-space: nowrap;
}
</style>
