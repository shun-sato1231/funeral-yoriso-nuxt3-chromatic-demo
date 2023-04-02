<template>
  <div>
    <client-only>
      <GmapMap
        ref="gmp"
        map-type-id="roadmap"
        :center="maplocation"
        :zoom="zoom"
        :style="styleMap"
        :options="mapOptions"
      >
        <GmapMarker
          v-for="(marker, index) in markers"
          :key="index"
          :title="marker.title"
          :position="marker.position"
          :clickable="true"
          :draggable="false"
          @click="onClickMarker(index, marker)"
          :icon="marker.icon"
        />
        <GmapInfoWindow
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen = false"
        >
          <slot :item="marker" />
        </GmapInfoWindow>
      </GmapMap>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    markers: {
      type: Array,
    },
    maplocation: {
      type: Object,
    },
    height: {
      type: String,
      default: '576px',
    },
  },
  computed: {
    styleMap() {
      return {
        width: '100%',
        height: this.height,
      };
    },
  },
  data() {
    return {
      infoOptions: {
        minWidth: 200,
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      infoWindowPos: null,
      infoWinOpen: false,
      marker: {},
      zoom: 13,
      mapOptions: {
        mapTypeControl: false,
        streetViewControl: true,
        fullscreenControl: false,
        styles: [
          {
            // https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/MapTypeStyle/
            featureType: 'poi',
            stylers: [{ visibility: 'off' }],
          },
        ],
      },
    };
  },
  methods: {
    /**
     *マーカークリック
     * @param {*} index
     * @param {*} marker
     */
    onClickMarker(index, marker) {
      this.$refs.gmp.panTo(marker.position);
      this.infoWindowPos = marker.position;
      this.marker = marker;
      this.infoWinOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.map-window {
  color: black !important;
}
</style>
