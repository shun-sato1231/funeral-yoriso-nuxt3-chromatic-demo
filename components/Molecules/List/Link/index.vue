<template>
  <div class="near-city">
    <span v-for="(item, index) in items" :key="index"
      ><slot v-if="$scopedSlots.default" :item="item" class="link" /><a
        v-else
        :href="$to(item.url)"
        v-text="item['name']"
        class="link"
      /><span v-if="index < items.length - 1" class="px-4">|</span></span
    >
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
};
</script>
<style lang="scss">
.link {
  color: #2e5985 !important;
}
.near-city {
  word-break: keep-all;
}
</style>
