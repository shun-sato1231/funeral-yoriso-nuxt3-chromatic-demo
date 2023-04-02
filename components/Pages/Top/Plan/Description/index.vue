<template>
  <v-card width="820px" class="mx-auto mb-15" flat>
    <v-row no-gutters>
      <v-col cols="7" class="pr-6">
        <v-list></v-list>
        <h2 class="plan-title py-3">
          <v-icon color="accent" left size="28" style="margin-top: -5px"
            >fa-check-circle</v-icon
          >
          <span class="plan-title-point">業界最安水準</span>
          <span class="caption">※1</span>のプラン価格
        </h2>
        <div style="font-size: 18px !important" class="mb-5">
          高すぎる従来のお葬式から、物品やサービスを厳選し、業界最安水準※1を実現しました。
        </div>
        <div class="caption">※1 全国展開のインターネット葬儀手配業界</div>
        <div class="caption">
          ※2 日本消費者協会2016年8〜9月調査(一般葬、家族葬、火葬式等の平均)
        </div>
      </v-col>
      <v-col cols="5" align-self="end">
        <v-img
          class="img"
          src="/img/common/hikaku/img_hikaku_top.webp"
          alt="お葬式の全国平均費用121.4万円　よりそうは業界最安水準を追求！"
          width="341"
          height="140"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.plan-title {
  font-size: 28px !important;
  .plan-title-point {
    color: var(--v-accent-base);
    font-weight: bold;
  }
}
</style>
