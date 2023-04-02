<template>
  <v-row no-gutters>
    <v-col
      cols="6"
      v-for="(funeralReview, index) in funeralReviews"
      :key="index"
      class="py-1"
    >
      <v-card
        flat
        tile
        :class="[(index + 1) % 2 === 0 ? 'left-dashed-line' : '']"
      >
        <v-card-actions>
          <div class="pr-4">
            <v-avatar size="55">
              <img :src="funeralReview.userImage" alt="" />
            </v-avatar>
          </div>
          <div>
            <div class="flex-box">
              <OrganismsChipFuneralPlan
                class="pr-3"
                :funeralPlan="funeralReview.funeral.funeral_plan"
              />
              <MoleculesRating :rating="funeralReview.total_rating" />
            </div>
            <div class="pt-3 description">
              <span class="pr-2">施行地域：{{ funeralReview.address }}</span>
              {{
                $dayjs(funeralReview.funeral.created_at).format('YYYY年MM月')
              }}
            </div>
          </div>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    funeralReviews: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.left-dashed-line {
  border-left: 1px dashed var(--v-lighten-base);
  padding-left: 20px;
}
.description {
  font-size: 14px;
}
</style>
