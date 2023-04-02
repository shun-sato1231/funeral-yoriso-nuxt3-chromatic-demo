<template>
  <div class="prefmap text-center">
    <img
      src="/img/common/area/map/map_japan.svg"
      class="prefmap-map"
      alt="日本地図"
    />

    <div
      :class="['prefmap-region', 'prefmap-region-' + region.code]"
      v-for="region in regions"
      :key="region.id"
    >
      <v-row no-gutters>
        <v-col
          cols="12"
          :class="[
            'prefmap-region-title',
            'prefmap-region-title-' + region.code,
          ]"
          >{{ region.name }}</v-col
        >
        <v-col
          :cols="cols[region.code] ? cols[region.code] : 6"
          v-for="prefecture in prefectures.filter(
            (prefecture) => prefecture.region_id === region.id
          )"
          :key="prefecture.code"
        >
          <v-card :href="$to('/area/' + prefecture.code + '/')" flat>
            <div class="prefmap-button">
              {{ prefecture.name }}
              <v-icon size="16" class="prefmap-button-icon">
                fa-chevron-right
              </v-icon>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      regions: 'common/area/regions',
      prefectures: 'common/area/prefectures',
    }),
  },
  data() {
    return {
      cols: {
        kk: 4,
        ks: 4,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.prefmap {
  position: relative;
  width: 830px;
  height: 550px;
  margin: auto;
  .prefmap-map {
    width: 476px;
    height: 436px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin-top: 10px;
  }
  .prefmap-button {
    display: block;
    background: #fff;
    border: 1px solid #ccc;
    -webkit-box-shadow: inset 0 -3px 0 0 rgb(0 0 0 / 30%);
    box-shadow: inset 0 -3px 0 0 rgb(0 0 0 / 30%);
    border-radius: 6px;
    color: #545458;
    font-size: 16px;
    line-height: 31px;
    height: 35px;
    width: 80px;
    padding: 0 15px 3px 12px;
    position: relative;
    text-align: left;
    margin-top: 13px;
  }
  .prefmap-button-icon {
    position: absolute;
    top: 7px;
    right: 3px;
  }
  .prefmap-region {
    position: absolute;
    width: 170px;
    .prefmap-region-title {
      text-align: center;
      font-size: 18px;
      font-weight: 700;
    }
    .prefmap-region-title-th {
      color: #597798;
    }
    .prefmap-region-title-kk {
      color: #a1ab59;
    }
    .prefmap-region-title-ck {
      color: #428d86;
    }
    .prefmap-region-title-ks {
      color: #e0a647;
    }
    .prefmap-region-title-cs {
      color: #da5f62;
    }
    .prefmap-region-title-ko {
      color: #785650;
    }
  }
  .prefmap-region-th {
    top: 0;
    right: 0;
  }
  .prefmap-region-kk {
    top: 250px;
    right: 0;
    width: 260px;
  }
  .prefmap-region-ck {
    top: 0;
    left: 212px;
  }
  .prefmap-region-ks {
    top: 395px;
    right: 270px;
    width: 260px;
  }
  .prefmap-region-cs {
    top: 0;
    left: 0;
  }
  .prefmap-region-ko {
    top: 300px;
    left: 0;
  }
}
</style>
