<template>
  <v-row no-gutters class="sp-content" v-if="contents">
    <v-col
      cols="12"
      v-for="(content, index) in contents.slice(0, 3)"
      :key="index"
    >
      <div class="px-sp pb-4">
        <v-card class="body-4 pa-1" color="secondary">
          <v-card
            color="primary"
            flat
            class="title body-1 text-center font-weight-bold"
            v-if="content.funeral.funeral_home"
          >
            {{ prefectureCityName(content) }}の事例
          </v-card>
          <div class="pa-2">
            <v-row no-gutters>
              <v-col cols="6" class="pr-2 mb-2">
                <img :src="content.src" height="102" :alt="imgAlt(content)" />
              </v-col>
              <v-col cols="6" class="text-center pl-2 justify-center">
                <div v-if="content.funeral.funeral_plan">
                  <v-img
                    src="/img/icon/icon-loutus.svg"
                    width="24"
                    height="18"
                    class="mx-auto"
                  />
                  <OrganismsChipFuneralPlan
                    class="my-2"
                    small
                    :funeralPlan="content.funeral.funeral_plan"
                  />
                </div>
              </v-col>
              <template v-for="funeralBuilding in funeralBuildings">
                <v-col
                  cols="5"
                  class="detail-title pl-1 mt-1"
                  v-if="content.funeral[funeralBuilding.key]"
                >
                  {{ funeralBuilding.title }}
                </v-col>
                <v-col
                  cols="7"
                  class="caption px-1 mt-1"
                  v-if="content.funeral[funeralBuilding.key]"
                >
                  <a
                    v-if="content.funeral[funeralBuilding.key].code"
                    class="hyper-link"
                    :href="
                      $to(
                        funeralBuilding.url +
                          content.funeral[funeralBuilding.key].code +
                          '/'
                      )
                    "
                    >{{ content.funeral[funeralBuilding.key].name }}</a
                  >
                  <span v-else class="hyper-link">{{
                    content.funeral[funeralBuilding.key].name
                  }}</span>
                </v-col>
              </template>
              <v-col cols="12" class="py-2"> {{ content.comment }} </v-col>
            </v-row>
          </div>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
    },
  },
  methods: {
    prefectureCityName(content) {
      return (
        content.funeral?.funeral_home.prefecture_name ||
        '' + content.funeral?.funeral_home.city_name ||
        ''
      );
    },
    imgAlt(content) {
      return content.imageAlt
        ? content.imageAlt
        : content.title + content.description;
    },
  },
  data() {
    return {
      funeralBuildings: [
        { title: '利用した式場名', key: 'funeral_home', url: '/saijyo/' },
        {
          title: '利用した火葬場名',
          key: 'crematorium',
          url: '/kasoba/',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  border-bottom-left-radius: initial;
  border-bottom-right-radius: initial;
}
.detail-title {
  background: rgb(var(--v-theme-accentLighten2));
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
}
.plan-description {
  line-height: 18px;
}
</style>
