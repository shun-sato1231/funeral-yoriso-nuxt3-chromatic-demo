<template>
  <div>
    <PagesAreaSelectPc class="hidden-sm-down" :city="city" />
    <PagesAreaSelectSp class="hidden-md-up" :city="city" />
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
    },
  },
};
</script>
