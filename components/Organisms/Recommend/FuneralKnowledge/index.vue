<template>
  <div>
    <OrganismsRecommendFuneralKnowledgePc
      :contentCategories="contentCategories"
      class="hidden-sm-down"
    />
    <OrganismsRecommendFuneralKnowledgeSp
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
