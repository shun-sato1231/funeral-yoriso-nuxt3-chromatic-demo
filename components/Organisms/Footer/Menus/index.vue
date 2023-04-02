<template>
  <div>
    <OrganismsFooterMenusPc :menus="menus" class="hidden-sm-down" />
    <OrganismsFooterMenusSp :menus="menus" class="hidden-md-up" />
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
    },
  },
};
</script>
