<template>
  <div>
    <OrganismsRecommendPlanListPc
      :funeralPlans="funeralPlans"
      class="hidden-sm-down"
      @click="$emit('click')"
    />
    <OrganismsRecommendPlanListSp
      :funeralPlans="funeralPlans"
      class="hidden-md-up"
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
