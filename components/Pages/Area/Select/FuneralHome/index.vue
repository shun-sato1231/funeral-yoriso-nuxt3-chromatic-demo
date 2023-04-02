<template>
  <div v-if="items.length">
    <PagesAreaSelectCard
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :baseTags="$const.view.funeralHome.tags"
      :toggleFavorite="toggleFavoriteFuneralHome"
      :isFavorite="!!favoriteFuneralHome(item.code)"
      isFuneralHome
      :trainAccess="trainAccess(item)"
    />
    <OrganismsPagination
      v-model="page"
      title="式場"
      :meta="funeralHomeMeta"
      :addItems="addFuneralHomes"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import cloneDeep from 'lodash/cloneDeep';

export default {
  props: {
    city: {
      type: Object,
    },
  },
  created() {
    this.init();
  },
  data() {
    return {
      items: null,
      page: 1,
    };
  },
  computed: {
    ...mapGetters({
      funeralHome: 'ending/funeral/funeralHome',
      funeralHomes: 'ending/funeral/funeralHomes',
      funeralHomeMeta: 'ending/funeral/funeralHomeMeta',
      favoriteFuneralHome: 'ending/favorite/funeralHome',
    }),
  },
  watch: {
    async page(val) {
      await this.$store.dispatch('ending/funeral/getFuneralHomes', {
        prefectureCode: this.city.prefecture.code,
        cityCode: this.city.code,
        page: val,
        isAdd: this.$vuetify.breakpoint.smAndDown,
      });
      if (this.$vuetify.breakpoint.mdAndUp) {
        this.$scrollTo('#area-select');
      }
      this.init();
    },
  },
  methods: {
    ...mapActions({
      toggleFuneralHome: 'ending/favorite/toggleFuneralHome',
    }),
    addFuneralHomes() {
      this.page++;
    },
    trainAccess(item) {
      return item.funeral_home_stations?.find(
        (funeralHomeStation) =>
          funeralHomeStation.station?.route?.route_type_id ===
          this.$const.db.common.routeTypes.train.id
      );
    },
    init() {
      this.items = cloneDeep(this.funeralHomes);
    },
    toggleFavoriteFuneralHome(funeralHome) {
      // 追加
      this.toggleFuneralHome({
        code: funeralHome.code,
        name: funeralHome.name,
      });
    },
  },
};
</script>
