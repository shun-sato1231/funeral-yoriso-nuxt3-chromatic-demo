<template>
  <div class="text-center pb-5">
    <v-btn
      large
      color="primary"
      @click.stop="addItems"
      v-if="meta && meta.current_page < meta.last_page"
      >{{ title }}（全{{ meta.total }}件）をもっと見る</v-btn
    >
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    meta: {
      type: Object,
    },
    addItems: {
      type: Function,
    },
  },
};
</script>
