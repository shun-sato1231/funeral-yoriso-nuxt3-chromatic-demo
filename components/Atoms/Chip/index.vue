<template>
  <span :class="['chip', disabled ? 'disabled' : 'active']">
    <v-icon size="16" v-if="icon"> {{ icon }} </v-icon>
    <span class="chip-text text-center">
      {{ text }}
    </span>
  </span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
    },
    text: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.chip {
  font-weight: 700;
  font-size: 12px;
  min-width: 108px;
  border: 1px solid rgb(var(--v-theme-lighten)) !important;
  border-radius: 3px;
  line-height: 32px;
  height: 34px;
  display: flex;
  margin-right: 14px;
  .chip-text {
    display: block;
    width: 70px;
    white-space: nowrap;
  }
}
.active {
  background: rgb(var(--v-theme-accentLighten3));
}
.disabled {
  background: white;
  opacity: 0.35;
}
</style>
