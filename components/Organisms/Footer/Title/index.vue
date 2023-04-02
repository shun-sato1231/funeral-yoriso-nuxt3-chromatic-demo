<template>
  <h3 class="footer-title">{{ title }}</h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-title {
  font-size: 18px !important;
  font-weight: 700;
  border-left: 4px solid rgb(var(--v-theme-primary));
  padding-left: 15px;
  margin-bottom: 20px;
  line-height: 1.2;
}
</style>
