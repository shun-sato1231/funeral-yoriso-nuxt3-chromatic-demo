<template>
  <div>
    <!-- パンクズ -->
    <MoleculesBreadcrumbs
      :breadcrumbs="breadcrumbs"
      class="content mt-13"
      isTopButton
    />
  </div>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
    },
  },
};
</script>
