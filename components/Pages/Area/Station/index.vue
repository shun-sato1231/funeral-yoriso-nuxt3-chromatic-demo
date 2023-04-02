<template>
  <div class="station-area content px-sp sp-content" v-if="routes.length > 0">
    <!-- 駅から探す -->
    <h2 class="accent-title px-3">{{ city.name }}内の駅から探す</h2>

    <!-- テーブル -->
    <MoleculesTable class="mt-4" :items="routes" cols="4" md="3">
      <!-- タイトル -->
      <template #title="{ item }">
        {{ item.name }}
      </template>
      <!-- テキスト -->
      <template #text="{ item }">
        <!-- リンク -->
        <MoleculesListLink :items="item.stations">
          <template #default="{ item: station }">
            <a
              :href="
                $to(
                  '/area/' + station.city?.code + '/' + station.code + '/list/'
                )
              "
              v-text="station.name"
              class="hyper-link"
            />
          </template>
        </MoleculesListLink>
      </template>
    </MoleculesTable>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
    },
  },
  computed: {
    routes() {
      const self = this;
      return (
        this.city.stations
          ?.filter(
            (element, index, self) =>
              self.findIndex((e) => e.route_id === element.route_id) === index
          )
          .map((station) => {
            return {
              name: station.route.name,
              code: station.route.code,
              stations: self.city.stations?.filter(
                (_station) => _station.route_id === station.route_id
              ),
            };
          })
          .sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
          }) || []
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.station-area {
  @include md-up {
    margin-top: 160px !important;
  }
  .accent-title {
    @include sm-down {
      font-size: 24px !important;
    }
  }
}
</style>
