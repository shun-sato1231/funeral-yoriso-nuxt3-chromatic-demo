<template>
  <div class="phone-description" v-text="text" />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.phone-description {
  display: inline-block;
  text-align: center;
  line-height: 1.8;
  border: 1px solid #e7e0ba;
  background: #fff;
  border-radius: 3px;
  padding: 0 15px;
  font-size: 16px;
}
</style>
