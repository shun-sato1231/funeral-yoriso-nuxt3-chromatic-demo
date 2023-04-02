<template>
  <div>
    <v-fade-transition>
      <v-row
        v-if="!viewOffsetTop || offsetTop > viewOffsetTop"
        no-gutters
        class="bottom-flex hidden-sm-down"
      >
        <v-col cols="12">
          <div class="flex-box justify-center banner-wrapper">
            <v-avatar size="70" color="white">
              <img
                src="/img/common/cta/img_common_thumbnail_operator.webp"
                alt="よりそうお葬式オペレーター"
              />
            </v-avatar>

            <div class="pl-3 pt-1 main-area">
              <h4>
                <div class="flex-box">
                  <span class="sub-title pr-2"
                    ><span class="d-block">事前の</span
                    ><span class="d-block">資料請求</span
                    ><span class="caption-title">などで</span></span
                  >
                </div>
              </h4>
            </div>
            <div class="px-3 sub-area">
              <span class="main-title">
                費用が最大<span class="discount-price">3</span>万<span
                  class="yen"
                  >円</span
                >安く
              </span>
              <p class="caption mb-0 sub-area-caption">
                ※家族葬で、お申込み前日までに資料請求とあん
              </p>
              <p class="caption mb-2 sub-area-caption ml-3">
                しん準備シート記入した場合[会員限定]
              </p>
            </div>

            <div class="px-6 mt-1">
              <p class="mb-0 body-3 font-weight-bold">
                無料相談ダイヤル<span class="caption">[24時間365日対応]</span>
              </p>
              <!-- 電話番号 -->
              <OrganismsButtonPhone width="300" />
            </div>
            <!-- 資料を請求するボタン -->
            <OrganismsButtonDocumentRequest
              title="資料請求"
              _class="py-1 px-3"
            />
          </div>
        </v-col>
      </v-row>
    </v-fade-transition>
    <!-- よりそう会員限定 -->

    <client-only>
      <OrganismsBannerBottomDiscount class="bottom-right-flex" />
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    viewOffsetTop: Number,
  },
  computed: {
    ...mapGetters({
      offsetTop: 'view/offsetTop',
    }),
  },
};
</script>

<style media="screen" lang="scss" scoped>
.bottom-flex {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--v-accentLighten3-base);
  z-index: 8;
  padding-bottom: calc(env(safe-area-inset-bottom));
}
.banner-wrapper {
  max-height: 90px;
}
.sub-title {
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  text-align: left;
  .caption-title {
    font-size: 12px;
  }
}
.sub-area-caption {
  line-height: 1.2;
  color: #757580;
}
.main-title {
  font-size: 28px;
  line-height: 1.2;
  font-weight: 700;
  .discount-price {
    display: inline-block;
    color: var(--v-error-base);
    font-size: 38px;
    font-family: Bebas_Neue_Pro, Impact, sans-serif;
  }
  .yen {
    position: relative;
    display: inline-block;
    font-weight: inherit;
  }
  .zei {
    font-size: 10px;
    position: absolute;
    top: -10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 3em;
    text-align: center;
    font-weight: 400;
  }
}
.sub-area {
  padding-right: 12px;
  border-right: 1px solid #e7e0ba;
  width: 300px;
}
.bottom-right-flex {
  position: fixed;
  bottom: 120px;
  right: 20px;
  z-index: 5;
}
</style>
