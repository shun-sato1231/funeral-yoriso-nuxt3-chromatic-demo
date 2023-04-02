<template>
  <div>
    <v-chip
      v-if="funeralPlan && funeralPlan.funeral_plan_type"
      class="font-weight-bold"
      dark
      :small="small"
      :color="'rgba(' + funeralPlan.primary_color + ')'"
      >{{ funeralPlan.name }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    funeralPlan: {
      type: Object,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
