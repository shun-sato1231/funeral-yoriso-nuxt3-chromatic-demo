<template>
  <div class="content" v-if="city.near_cities.length > 0">
    <div class="near-wrap">
      <v-row no-gutters>
        <v-col cols="12">
          <h3 class="body-2 py-2 font-weight-bold">近隣の市区町村を探す</h3>
        </v-col>

        <v-col cols="12">
          <v-card outlined class="pa-5">
            <!-- 近隣の市区町村を探す -->
            <MoleculesListLink :items="city.near_cities" />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.near-wrap {
  padding-top: 60px;
  padding-bottom: 90px;
}
</style>
