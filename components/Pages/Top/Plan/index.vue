<template>
  <div>
    <!-- タイトル -->
    <MoleculesTitleLine
      src="/img/illust/yellow/illust_saidan.webp"
      title="明朗会計セットプラン"
      chip-text="お葬式プラン"
      description="ご要望から選べる、6つの家族葬プランをご用意しました"
    />

    <!-- プランの説明 -->
    <PagesTopPlanDescription />

    <!-- プラン一覧 -->
    <OrganismsRecommendPlanList :funeralPlans="funeralPlans" />

    <!-- よりそう満足保証（会員限定） -->
    <PagesTopPlanGuarantee />

    <!-- 選べる4つのお支払い方法 -->
    <PagesTopPlanPayment />

    <!-- おすすめ -->
    <PagesTopPlanRecommend />
  </div>
</template>

<script>
export default {
  props: {
    funeralPlans: {
      type: Array,
    },
  },
};
</script>
