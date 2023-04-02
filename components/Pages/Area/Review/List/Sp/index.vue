<template>
  <v-row no-gutters class="sp-content">
    <v-col
      cols="12"
      v-for="(funeralReview, index) in funeralReviews"
      :key="index"
    >
      <div class="px-sp pb-4">
        <v-card class="body-4" color="secondary">
          <v-card-actions>
            <div class="pr-4">
              <v-avatar size="55">
                <img :src="funeralReview.userImage" alt="" />
              </v-avatar>
            </div>
            <div class="caption">
              <OrganismsChipFuneralPlan
                class="pr-3"
                small
                :funeralPlan="funeralReview.funeral.funeral_plan"
              />
              <div>
                {{ funeralReview.address }}／{{
                  $dayjs(funeralReview.funeral.created_at).format('YYYY年MM月')
                }}施行
              </div>
            </div>
          </v-card-actions>

          <v-row no-gutters class="pa-2">
            <v-col
              cols="4"
              class="flex-box font-weight-bold"
              v-if="funeralReview.funeral.funeral_home"
            >
              <v-avatar size="20" tile color="accent" class="mr-2">
                <v-icon size="14" dark> fa-building-columns </v-icon>
              </v-avatar>
              利用斎場
            </v-col>
            <v-col
              cols="8"
              class="px-2"
              v-if="funeralReview.funeral.funeral_home"
              >{{ funeralReview.funeral.funeral_home.name }}</v-col
            >
            <v-col
              cols="4"
              class="flex-box font-weight-bold"
              v-if="funeralReview.funeral.crematorium"
            >
              <v-avatar size="20" tile color="accent" class="mr-2">
                <v-icon size="14" dark> fa-industry </v-icon> </v-avatar
              >利用火葬場
            </v-col>
            <v-col
              cols="8"
              class="px-2"
              v-if="funeralReview.funeral.crematorium"
              >{{ funeralReview.funeral.crematorium.name }}</v-col
            >
            <v-col cols="4" class="flex-box font-weight-bold">
              <v-avatar size="20" tile color="accent" class="mr-2">
                <v-icon size="14" dark> fa-user-tie </v-icon> </v-avatar
              >参列人数
            </v-col>
            <v-col cols="8" class="px-2">{{ funeralReview.attendee }}</v-col>
          </v-row>

          <div class="pa-2">
            {{ funeralReview.comment }}
          </div>
          <div class="pa-2">
            <v-card color="accentLighten5" flat>
              <v-row no-gutters class="pa-2">
                <v-col cols="12" class="flex-box body-2 font-weight-bold"
                  >総合評価
                  <v-spacer />
                  <MoleculesRating :rating="funeralReview.total_rating" large />
                </v-col>
                <template v-for="reviewDetail in funeralReview.reviewDetails">
                  <v-col cols="7" class="font-weight-bold">
                    {{ reviewDetail.title }}
                  </v-col>
                  <v-col cols="5" class="flex-box" style="padding-right: 6px">
                    <v-spacer></v-spacer>
                    <v-rating
                      v-model="reviewDetail.rating"
                      color="accent"
                      :size="12"
                      dense
                      readonly
                    />
                  </v-col>
                </template>
              </v-row>
            </v-card>
          </div>
        </v-card>
      </div>
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
.icon {
  background-color: rgb(var(--v-theme-accent));
}
</style>
