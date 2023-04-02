<template>
  <div class="slider-content">
    <v-btn
      fab
      outlined
      @click.prevent="slidePrev"
      class="slide-button"
      aria-label="１つ戻る"
    >
      <v-icon dark> fa-chevron-left </v-icon>
    </v-btn>

    <hooper
      class="content"
      ref="carousel"
      @slide="updateCarousel"
      infiniteScroll
      :itemsToShow="4"
      :style="'height: ' + height + 'px'"
      autoPlay
      :playSpeed="3200"
      :wheelControl="false"
    >
      <slide v-for="(item, index) in items" :key="index">
        <slot :item="item" />
      </slide>
    </hooper>

    <v-btn
      fab
      outlined
      @click.prevent="slideNext"
      class="slide-button"
      aria-label="１つ進む"
    >
      <v-icon dark> fa-chevron-right </v-icon>
    </v-btn>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  // Pagination as HooperPagination, // ページネーションが必要なときにimport
  // Navigation as HooperNavigation, // 左右のナビゲーションが必要なときにimport
} from 'hooper';
import 'hooper/dist/hooper.css'; // hooperのcssを適用

export default {
  data: () => ({
    carouselData: 0,
  }),
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    },
  },
  components: {
    Hooper,
    Slide,
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    },
  },
  props: {
    items: {
      type: Array,
    },
    height: {
      type: String | Array,
      default: 400,
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-content {
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
}
.v-application ul {
  padding-left: 0px;
}
.slide-button {
  align-self: center;
}
</style>
