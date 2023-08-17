<script setup lang="ts"></script>

<template>
  <div class="d-flex align-center">
    <v-rating :model-value="5" half-increments readonly>
      <template v-slot:item="props">
        <v-icon
          color="#F26A0C"
          size="16"
          :class="props.index !== 9 ? `mr-1` : ''"
        >
          {{ props.isFilled ? 'fa fa-star' : 'fa-regular fa-star' }}
        </v-icon>
      </template>
    </v-rating>
    <span class="ml-2 font-weight-bold text-subtitle-1"> 5.0 </span>
  </div>
</template>

<style lang="scss" scoped>
.v-rating::v-deep .v-rating__item label {
  display: flex;
}
</style>
