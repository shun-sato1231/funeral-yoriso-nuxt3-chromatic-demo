<template>
  <div class="sp-content mt-10">
    <div class="cta__header">
      <div class="cta__heaer-image">
        <v-img src="/img/common/lady/img_common_main_operator_sp.webp" alt="" />
      </div>
      <h2 class="cta__header-text">
        <span class="cta__header-text--num">24</span>時間<span
          class="cta__header-text--num"
          >365</span
        >日<br />ご相談を受付中
      </h2>
    </div>

    <v-card flat color="accentLighten4" class="px-sp py-3">
      <h3 class="text-center text-accent mb-2 body-2 font-weight-bold">
        このようなお悩みはありませんか？
      </h3>

      <div class="inquiry__textBox">
        <div class="inquiry__textList">
          <div class="inquiry__textItem">・何から考えたらいいかわからない</div>
          <div class="inquiry__textItem">・総額いくらになるか教えて？</div>
          <div class="inquiry__textItem">・近隣の葬儀場を案内してほしい</div>
          <div class="inquiry__textItem">・希望に合うプランがわからない</div>
        </div>
        <div class="inquiry__imageBox">
          <v-img
            src="/img/common/cta/endcontent/common_cta_old_women.webp"
            alt=""
            height="138"
          />
        </div>
      </div>

      <div class="font-weight-bold body-3 text-center">
        ご質問だけでもお気軽に
      </div>

      <!-- 電話をかける -->
      <OrganismsButtonPhoneSp class="my-2" />
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.sp-content {
  .title {
    background-color: rgb(var(--v-theme-accentLighten2));
  }
  .cta {
    &__header {
      position: relative;
      padding: 10px 0 10px 10.66666667vw;
      background-color: rgb(var(--v-theme-accentLighten2));
    }
    &__heaer-image {
      position: absolute;
      bottom: -70px;
      left: 6.66666667vw;
      width: 115px;
      overflow: hidden;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
    &__header-text {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.5;
      text-align: center;
      &--num {
        font-size: 22px;
        font-weight: 700;
      }
    }
  }
  .inquiry {
    &__textBox {
      position: relative;
      width: 100%;
      margin-top: 10px;
      margin-bottom: 30px;
      padding: 2.66666667vw 5.33333333vw;
      border: 2px solid rgb(var(--v-theme-accentLighten2));
      border-radius: 10px;
      background-color: #fff;
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        border-style: solid;
        border-width: 30px 20px 0;
        bottom: -30px;
        border-color: #e7e0ba transparent transparent;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        border-style: solid;
        border-width: 30px 20px 0;
        bottom: -27px;
        border-color: #fff transparent transparent;
      }
    }
    &__textList {
      font-size: 14px;
      line-height: 1.9;
    }
    &__imageBox {
      position: absolute;
      bottom: 0;
      right: 4vw;
      width: 77px;
    }
  }
}
</style>
