<template>
  <div>
    <MoleculesMapGoogle :markers="markers" :maplocation="maplocation">
      <template #default="{ item }">
        <v-card width="260" tile flat class="map-window">
          <v-row no-gutters>
            <v-col cols="5">
              <v-img :src="item.imageSrc" />
            </v-col>
            <v-col cols="7" class="pl-3">
              <div class="font-weight-bold">{{ item.name }}</div>
              <div class="caption">{{ item.address }}</div>
            </v-col>
            <v-col cols="12" class="py-2 flex-box caption" v-if="item.access">
              <v-icon size="14" class="mr-2">fa-train</v-icon>
              {{ item.access }}</v-col
            >
            <v-col cols="12">
              <v-btn
                color="primary"
                class="body-4"
                small
                block
                :href="$to('/saijyo/' + item.code + '/')"
                >詳細を見る</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </template>
    </MoleculesMapGoogle>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';
export default {
  props: {
    city: {
      type: Object,
    },
  },
  computed: {
    markers() {
      let city = cloneDeep(this.city);
      return city.funeral_homes
        .filter((funeralHome) => {
          return funeralHome.latlng;
        })
        .map((funeralHome) => {
          // 該当するアイコンを選択
          const mapIcon = this.$const.view.mapIcons.find(
            (mapIcon) => mapIcon.has_crematory === funeralHome.has_crematory
          );

          const imageSrc =
            funeralHome.images && funeralHome.images.length > 0
              ? this.$image(funeralHome.images[0].path)
              : '/img/common/noimage/funeral_home.webp';

          return {
            name: funeralHome.name,
            address: funeralHome.address,
            access: funeralHome.access,
            code: funeralHome.code,
            title: funeralHome.name,
            position: {
              lat: Number(funeralHome.latlngInArray.lat),
              lng: Number(funeralHome.latlngInArray.lng),
            },
            imageSrc: imageSrc,
            icon: {
              url: mapIcon.src,
              scaledSize: { width: 23, height: 30, f: 'px', b: 'px' },
            },
          };
        });
    },
    maplocation() {
      return {
        lat: Number(this.city.latlng.lat),
        lng: Number(this.city.latlng.lng),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.map-window {
  color: black !important;
}
</style>
