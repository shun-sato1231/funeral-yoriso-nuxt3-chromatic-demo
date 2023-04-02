<template>
  <div class="mt-15 pt-10">
    <header class="maincta-header taCenter mx-auto">
      <h3 class="maincta-header__title mb-2">
        事前の資料請求<span class="body-1 font-weight-bold">などで</span
        ><span class="fwBold maincta-header__titleNumberBefore"
          >お葬式費用が最大</span
        ><strong class="maincta-header__titleNumber">3</strong>万円割引<span
          class="body-4"
          >※1</span
        >に
      </h3>
    </header>
    <div class="maincta-wrapper">
      <div class="maincta-body content">
        <div class="maincta-body-imagebox">
          <img
            width="145"
            height="331"
            src="/img/common/lady/img_lady_hitosashi_r.webp"
            alt="よりそうオペレーター"
          />
        </div>
        <img
          class="maincta-body-hajimetAnshin"
          width="121.23"
          height="121"
          src="/img/common/cta/hajimete-goanshin.webp"
          alt="安心できる"
        />

        <v-row no-gutters class="maincta-content text-center">
          <v-col cols="6" class="px-4 left-box">
            <h4 class="maincta-body-title">無料相談ダイヤル</h4>
            <p class="maincta-body-subtitle">
              相談員がお客さまによりそいサポート
            </p>
            <p class="maincta-body-description text-accentDarken mb-1">
              些細と思われることでもお気軽にお電話を
            </p>

            <!-- 電話番号 -->
            <OrganismsButtonPhone width="380" class="ml-10 mt-4" is-cta />

            <v-row no-gutters class="mt-2">
              <v-col cols="6" class="py-1">
                <!-- 24時間365日対応 -->
                <OrganismsChipPhone text="24時間365日対応" />
              </v-col>
              <v-col cols="6" class="py-1">
                <!-- 通話・相談無料 -->
                <OrganismsChipPhone text="通話・相談無料" />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="6" class="px-4">
            <h4 class="maincta-body-title">詳しい資料をお届け</h4>
            <p class="maincta-body-subtitle">
              お葬式費用・流れなどの基本を解説
            </p>

            <div class="mancta-button mb-1">
              <span class="mancta-button-label"
                >ご家族とのご検討でご利用ください</span
              >
            </div>

            <!-- 資料を請求するボタン -->
            <OrganismsButtonDocumentRequest _class="px-3 pt-1" />

            <div class="caption text-left mt-2">
              ※1
              家族葬で、お申込み前日までに資料請求とあんしん準備シート記入した場合[会員限定]
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      config: 'view/config',
    }),
  },
};
</script>

<style lang="scss" scoped>
.maincta-header {
  height: 58px;
  width: 70%;
  border-radius: 9px 9px 0 0;
  background: #985253;
  margin-bottom: -9px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-line-pack: start;
  align-content: flex-start;

  &__titleNumber {
    font-size: 60px;
    display: inline-block;
    background: #985253;
    text-align: center;
    padding: 15px 7px 0;
    margin: auto -5px;
    border-radius: 100px;
    line-height: 30px;
    position: relative;
    z-index: 1;
    bottom: -3px;
    font-family: Bebas_Neue_Pro, Impact, sans-serif;
  }
  &__title {
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    line-height: 30px;
    margin-top: -14px;
  }
  &__titleNumberBefore {
    position: relative;
    z-index: 2;
  }
}
.maincta-header-title {
  font-size: 28px;
  font-weight: 700;
  background: #985253;
  color: #fff;
  border-radius: 9px 9px 0 0;
  line-height: 1;
  display: inline-block;
  padding: 0.75em 2em 0.25em;
}
.maincta-wrapper {
  border-top: 6px solid #985253;
  border-bottom: 6px solid #985253;
  background: #fbfaf5;
  margin: 0 calc(50% - 50vw);
  padding: 0 calc(50vw - 50%);
}
.over-text {
  position: relative;
  display: inline-block;
}
.over-text-label {
  font-size: 10px;
  position: absolute;
  top: -12px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  display: block;
  text-align: center;
  width: 3em;
}
.maincta-body {
  position: relative;
  padding: 20px 20px 10px 20px;
}
.maincta-body-hajimetAnshin {
  position: absolute;
  left: -100px;
  bottom: 40px;
}
.maincta-body-imagebox {
  position: absolute;
  width: 157px;
  height: 270px;
  left: -15px;
  bottom: -6px;
  overflow: hidden;
}
.maincta-content {
  padding-left: 120px;
}
.maincta-body-title {
  font-size: 32px !important;
  font-weight: 700 !important;
}
.maincta-body-subtitle {
  font-size: 16px;
  line-height: 34px;
  margin: 10px auto;
  border-top: 1px solid #d8af10;
  border-bottom: 1px solid #d8af10;
}
.maincta-body-description {
  text-align: center;
  font-weight: 700;
  font-size: 16px;
}
.btn-phone {
  font-size: 50px;
  letter-spacing: -1px;
}
.left-box {
  padding-right: 24px;
  border-right: 1px dotted #d8af10;
  text-align: center;
}
.mancta-button {
  text-align: center;
  color: #4071a2;
  line-height: 30px;
  font-weight: 700;
  font-size: 16px;
}
.mancta-button-label {
  display: inline-block;
  position: relative;
  padding: 0 30px;
  font-weight: inherit;
  box-sizing: border-box;
}
.mancta-button-label:after,
.mancta-button-label:before {
  content: '';
  display: block;
  height: 1px;
  width: 26px;
  border-top: 1px solid;
  margin-top: 7px;
  position: absolute;
}
.mancta-button-label:before {
  -webkit-transform: rotate(50deg) translateY(-50%);
  transform: rotate(50deg) translateY(-50%);
  -webkit-transform-origin: bottom right;
  transform-origin: bottom right;
  position: absolute;
  left: 0;
  top: 50%;
}
.mancta-button-label:after {
  -webkit-transform: rotate(-50deg) translateY(-50%);
  transform: rotate(-50deg) translateY(-50%);
  -webkit-transform-origin: bottom left;
  transform-origin: bottom left;
  right: 0;
  top: 50%;
}
</style>
