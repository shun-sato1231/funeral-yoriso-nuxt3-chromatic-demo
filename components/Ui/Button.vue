<script setup lang="ts">
interface Props {
  disabled?: boolean;
}

interface Emits {
  (e: 'click'): void;
}

const props = withDefaults(defineProps<Props>(), { disabled: false });
const emit = defineEmits<Emits>();
</script>

<template>
  <v-btn color="primary" @click="emit('click')" :disabled="props.disabled">
    <v-icon>fa fa-chevron-right</v-icon>
    <slot />
  </v-btn>
</template>
