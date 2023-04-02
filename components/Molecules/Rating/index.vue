<template>
  <v-card-actions>
    <v-rating
      v-model="rating"
      color="accent"
      :size="small ? 12 : large ? 22 : 16"
      dense
      class="mr-2"
      readonly
    />
    <span
      v-if="!noText"
      :class="[
        'font-weight-bold',
        small ? 'body-4' : large ? 'text-h6' : 'body-3',
      ]"
    >
      {{ rating?.toFixed(1) }}
    </span>
  </v-card-actions>
</template>

<script>
export default {
  props: {
    rating: {
      type: [String, Number],
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    noText: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
