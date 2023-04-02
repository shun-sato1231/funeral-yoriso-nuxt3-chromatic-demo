<template>
  <div>
    <v-fade-transition>
      <div v-if="isModal && $vuetify.breakpoint.lgAndUp">
        <div class="flex-box">
          <v-spacer></v-spacer>
          <v-btn small icon @click="close" class="close-button">
            <v-icon size="18">fa-close</v-icon>
          </v-btn>
        </div>
        <v-card width="175" :href="$to('/jizenwari/')">
          <div class="title text-white">よりそう会員限定</div>
          <div class="pa-2 banner-content">
            <div class="flex-box">
              <div>
                <v-img
                  src="https://cdn.yoriso.com/sogi/renewal/images/common/logo/logo_yoriso-jizenwari_short.svg"
                  alt="事前割"
                  width="100"
                  height="41"
                />
              </div>
              <div class="body-4 pl-3 image-description">
                <div>お葬式</div>
                <div>費用が</div>
              </div>
            </div>
            <div class="flex-box text-discountBlue font-weight-bold price-area">
              <div class="price-description">最大</div>
              <span class="number price-accent"
                ><span class="price-main">12</span></span
              >
              <span class="price-accent price-yen"> 万円 </span>
              <div class="price-description">割引</div>
            </div>
            <div class="caption">
              ※一般葬で事前割申込から60日経過の場合。割引額は諸条件に基き1.5〜12万円に変わります
            </div>
          </div>
        </v-card>
      </div>
    </v-fade-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModal: false,
    };
  },
  mounted() {
    this.isModal = sessionStorage.getItem('jizenwariSessionKey') ? false : true;
  },
  methods: {
    close() {
      this.isModal = false;
      sessionStorage.setItem('jizenwariSessionKey', true);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  background: rgb(var(--v-theme-discountBlue));
  padding: 5px 0 6px;
  text-align: center;
  letter-spacing: 0.1em;
  font-size: 13px !important;
  line-height: 15px;
  font-weight: bold;
}
.banner-content {
  background-color: rgba(33, 85, 155, 0.07);
  .image-description {
    line-height: 18px !important;
  }
  .price-area {
    white-space: nowrap;
    align-items: baseline;
    .price-main {
      display: inline-block;
      font-size: 44px;
      font-family: Bebas_Neue_Pro, Impact, sans-serif;
      line-height: 0.9;
      font-weight: 700 !important;
      letter-spacing: 0.05em;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .price-sub {
      font-size: 26px;
    }
    .price-accent {
      color: #f88011;
    }
    .price-yen {
      font-size: 16.25px;
    }
  }
  .caption {
    margin-top: -5px;
    font-size: 70% !important;
    line-height: 16px;
  }
}
.close-button {
  margin-right: -6px;
}
</style>
