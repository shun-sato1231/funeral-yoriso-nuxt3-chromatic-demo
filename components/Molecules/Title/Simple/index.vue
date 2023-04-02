<template>
  <div>
    <h3 class="simple-title accent-title">{{ title }}</h3>
    <p class="simple-description" v-if="description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.simple-title {
  font-size: 28px !important;
  font-weight: 700;
  text-align: left;
  padding-left: 12px;
  line-height: 1.2;
}
.simple-description {
  font-size: 18px !important;
  line-height: 1.6;
}
</style>
