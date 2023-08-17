<script setup lang="ts">
interface Props {
  size: 's' | 'm';
  rating: number;
}

const { size, rating } = defineProps<Props>();
</script>

<template>
  <div class="d-flex align-center">
    <v-rating :model-value="rating" half-increments readonly>
      <template v-slot:item="props">
        <v-icon
          color="#F26A0C"
          :size="size === 'm' ? 24 : 20"
          :class="props.index !== 9 ? `mr-1` : ''"
        >
          {{ props.isFilled ? 'fa fa-star' : 'fa-regular fa-star' }}
        </v-icon>
      </template>
    </v-rating>
    <span class="ml-2 font-weight-bold text-h5">
      {{ Number(rating).toFixed(1) }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.v-rating::v-deep .v-rating__item label {
  display: flex;
}
</style>
