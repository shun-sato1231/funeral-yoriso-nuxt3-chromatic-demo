<template>
  <div v-if="items.length">
    <PagesAreaSelectCard
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :baseTags="$const.view.funeralCrematorium.tags"
      :trainAccess="trainAccess(item)"
    />

    <OrganismsPagination
      v-model="page"
      title="火葬場"
      :meta="crematoriumsMeta"
      :addItems="addCrematoriums"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
  watch: {
    async page(val) {
      await this.$store.dispatch('ending/funeral/getCrematoriums', {
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
    init() {
      this.items = cloneDeep(this.crematoriums);
    },
    addCrematoriums() {
      this.page++;
    },
    trainAccess(item) {
      return item.crematorium_stations?.find(
        (crematoriumStation) =>
          crematoriumStation.station?.route?.route_type_id ===
          this.$const.db.common.routeTypes.train.id
      );
    },
  },
  computed: {
    ...mapGetters({
      crematoriums: 'ending/funeral/crematoriums',
      crematoriumsMeta: 'ending/funeral/crematoriumsMeta',
    }),
  },
};
</script>
