<template>
  <v-card outlined>
    <div class="map">
      <!-- マップ -->
      <OrganismsMapGoogle :city="city" />
    </div>
    <div class="flex-box px-10 py-3">
      <div class="body-3 font-weight-bold mr-15">アイコンについて</div>
      <div v-for="(mapIcon, index) in $const.view.mapIcons" :key="index">
        <img :src="mapIcon.src" :alt="mapIcon.title" class="img-position" />
        <span
          v-text="mapIcon.title"
          :key="index"
          class="mr-12 body-3 d-inline-block mb-1"
        />
      </div>
    </div>
  </v-card>
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

<style lang="scss" scoped>
.map {
  height: 576px;
}
.img-position {
  vertical-align: bottom;
}
</style>
