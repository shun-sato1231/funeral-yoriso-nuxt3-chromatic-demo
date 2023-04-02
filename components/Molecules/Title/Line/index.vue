<template>
  <div class="mt-16 mb-5 title-line">
    <div class="justify-center flex-box">
      <img
        class="mx-3"
        :width="imageWidth"
        :height="imageHeight"
        :src="src"
        :alt="title"
      />
      <span class="plan-title px-2" v-text="title" />

      <v-chip class="ma-2" color="accent chip">{{ chipText }}</v-chip>
    </div>
    <span v-html="description" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    chipText: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    imageWidth: {
      type: String,
      default: '95',
    },
    imageHeight: {
      type: String,
      default: '43',
    },
  },
};
</script>

<style lang="scss" scoped>
.plan-title {
  font-size: 36px;
  font-weight: 700;
}
.chip {
  font-weight: 700;
  font-size: 18px !important;
}
.title-line {
  padding: 30px 0;
  font-size: 18px !important;
  font-weight: 400;
  text-align: center;
  background-color: rgb(var(--v-theme-secondary));
}
</style>
