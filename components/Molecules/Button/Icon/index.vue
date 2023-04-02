<template>
  <v-card class="text-center pa-2" flat :href="href" @click="$emit('click')">
    <div class="image">
      <v-icon class="icon" size="20" v-if="icon" :color="color">{{
        icon
      }}</v-icon>
      <slot />
    </div>
    <div class="text">{{ title }}</div>
  </v-card>
</template>

<script>
export default {
  props: {
    href: String,
    title: String,
    color: {
      type: String,
      default: 'darken',
    },
    icon: String,
  },
};
</script>

<style lang="scss" scoped>
.image {
  height: 18px;
  margin-bottom: 5px;
}
.icon {
  margin-bottom: 7px;
}
.text {
  font-size: 11px;
  white-space: nowrap;
}
</style>
