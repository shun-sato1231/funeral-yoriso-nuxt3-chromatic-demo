<template>
  <div>
    <PagesAreaReviewListPc
      class="hidden-sm-down"
      :funeralReviews="funeralReviews"
    />
    <PagesAreaReviewListSp
      class="hidden-md-up"
      :funeralReviews="funeralReviews"
    />
  </div>
</template>

<script>
export default {
  props: {
    funeralReviews: {
      type: Array,
    },
  },
};
</script>
