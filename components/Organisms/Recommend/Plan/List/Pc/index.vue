<template>
  <div class="content">
    <!-- よりそう家族葬 -->
    <OrganismsRecommendPlanListPcCards
      :funeralPlans="
        funeralPlans.filter(
          (funeralPlan) =>
            funeralPlan.funeral_plan_type.id ===
            $const.db.ending.funeralPlanTypes.family.id
        )
      "
      title-caption-src="/img/plan/marugo-kazokuso-lead.webp"
      title-caption-alt="式場でお通夜・告別式などを行います"
      title-image-src="/img/logo/logo_yoriso-kazokuso.svg"
      title-image-alt="よりそう家族葬"
      is-family
      @click="$emit('click')"
    />

    <v-divider class="my-10"></v-divider>

    <!-- よりそう火葬式 -->
    <OrganismsRecommendPlanListPcCards
      :funeralPlans="
        funeralPlans.filter(
          (funeralPlan) =>
            funeralPlan.funeral_plan_type.id ===
            $const.db.ending.funeralPlanTypes.fire.id
        )
      "
      title="シンプルにご火葬のみ行う"
      title-caption-src="/img/plan/marugo-kasoshiki.webp"
      title-caption-alt="シンプルにご火葬のみ行います"
      title-image-src="/img/logo/logo_yoriso-kasoshiki.svg"
      title-image-alt="よりそう火葬式"
      is-vertical-detail
      @click="$emit('click')"
    />
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
