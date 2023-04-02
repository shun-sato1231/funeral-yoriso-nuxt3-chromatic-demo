<template>
  <div>
    <OrganismsFooterTitle title="お葬式を行う葬儀場を探す" class="mb-8" />

    <v-row no-gutters>
      <v-col cols="12">
        <v-row
          v-for="(region, regionIndex) in regions"
          no-gutters
          class="body-4"
          :key="regionIndex"
        >
          <v-col cols="2" class="region-name pb-3">{{ region.name }} </v-col>
          <v-col cols="10" class="pb-3">
            <span
              v-for="(prefecture, prefectureIndex) in prefectures.filter(
                (prefecture) => prefecture.region_id === region.id
              )"
              :key="prefectureIndex"
            >
              <a
                :href="$to('/area/' + prefecture.code + '/')"
                :class="
                  prefectureCities({
                    prefectureId: prefecture.id,
                    isMajor: 1,
                  }).length > 0
                    ? ''
                    : 'mr-4'
                "
                >{{ prefecture.name }}</a
              >

              <span
                v-if="
                  prefectureCities({
                    prefectureId: prefecture.id,
                    isMajor: 1,
                  }).length > 0
                "
                class="pr-3"
                >(<span
                  v-for="(
                    prefectureCity, prefectureCityIndex
                  ) in prefectureCities({
                    prefectureId: prefecture.id,
                    isMajor: 1,
                  })"
                >
                  <a
                    :href="
                      $to(
                        '/area/' +
                          prefecture.code +
                          '/' +
                          prefectureCity.code +
                          '/'
                      )
                    "
                    >{{ prefectureCity.name }}</a
                  ><span
                    v-if="
                      prefectureCities({
                        prefectureId: prefecture.id,
                        isMajor: 1,
                      }).length -
                        1 >
                      prefectureCityIndex
                    "
                    >、</span
                  ></span
                >)
              </span>
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      regions: 'common/area/regions',
      prefectures: 'common/area/prefectures',
      cities: 'common/area/cities',
      prefectureCities: 'common/area/prefectureCities',
    }),
  },
};
</script>

<style lang="scss" scoped>
.footer-title {
  font-size: 18px !important;
  font-weight: 700;
  border-left: 4px solid var(--v-primary-base);
  padding-left: 15px;
  margin-bottom: 27px;
  line-height: 1.2;
}
a {
  color: #48484b;
  font-size: 14px;
  line-height: 1;
}
.region-name {
  font-size: 14px;
  font-weight: 700;
}
</style>
