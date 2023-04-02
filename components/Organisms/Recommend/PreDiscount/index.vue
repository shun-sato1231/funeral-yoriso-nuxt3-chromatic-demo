<template>
  <div>
    <OrganismsRecommendPreDiscountPc
      :contentCategories="contentCategories"
      class="hidden-sm-down"
    />
    <OrganismsRecommendPreDiscountSp
      :contentCategories="contentCategories"
      class="hidden-md-up"
    />
  </div>
</template>

<script>
export default {
  props: {
    contentCategories: {
      type: Array,
    },
  },
};
</script>
