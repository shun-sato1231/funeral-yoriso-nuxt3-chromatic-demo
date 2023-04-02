<template>
  <section class="utilsonae">
    <h2 class="utilsonae-header d-flex justify-center">
      <img
        class="utilsonae-header__icon"
        src="/img/common/sonae/img-hajimete-anshin.webp"
        width="132"
        height="134"
        alt="はじめてでも安心"
      />
      お葬式の事前準備に役立つサービス
    </h2>
    <div class="utilsonae-contents">
      <!-- タイトル -->
      <MoleculesTitleSimple title="費用を抑えたい方はこちら" />
      <OrganismsRecommendPreDiscountPcSuppress />
      <p class="caption">
        ※1 家族葬で、お申込み前日までに資料請求した場合 ※2
        お申込み前日までに記入完了した場合
      </p>
      <v-row class="d-flex justify-space-between">
        <v-col cols="6"
          ><v-btn
            width="100%"
            height="50"
            class="font-weight-bold body-2 button-shadow"
            :href="$to('/plan/jumbi/')"
            >お得な割引をすべて見る</v-btn
          ></v-col
        >
        <v-col cols="6"
          ><v-btn
            width="100%"
            height="50"
            class="font-weight-bold body-2 button-shadow"
            :href="$to('/membership/')"
            >よりそう会員の詳細を見る</v-btn
          ></v-col
        >
      </v-row>
    </div>
    <div class="utilsonae-contents mt-12">
      <MoleculesTitleSimple
        title="お葬式の知識を得たい方はこちら"
        class="mb-8"
      />
      <a href="/sogi/request?view_type=fromDokuhonBnr">
        <img
          src="/img/common/bnr/bnr_dokuhon_pc.webp"
          alt="この一冊さえあれば安心！お葬式読本 無料プレゼント 今すぐ入手"
          width="100%"
      /></a>
      <!-- お葬式の知識 -->
      <OrganismsRecommendFuneralKnowledge
        :contentCategories="contentCategories"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    contentCategories: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.utilsonae {
  background: #fbfaf5;
  border-radius: 20px;
  -webkit-box-shadow: 0 2px 2px rgb(0 0 0 / 10%);
  box-shadow: 0 2px 2px rgb(0 0 0 / 10%);
  position: relative;
  width: 1000px !important;
  min-width: 1000px !important;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  .utilsonae-header:after {
    content: '';
    width: 180px;
    height: 60px;
    position: absolute;
    z-index: 1;
    background-repeat: repeat;
    background-image: radial-gradient(circle, #f3d45b 10%, transparent 0);
    background-size: 23px 23px;
    background-position: 0 0, 23px 23px;
    right: 30px;
  }
  .utilsonae-header:before {
    content: '';
    width: 180px;
    height: 60px;
    position: absolute;
    z-index: 1;
    background-repeat: repeat;
    background-image: radial-gradient(circle, #f3d45b 10%, transparent 0);
    background-size: 23px 23px;
    background-position: 0 0, 23px 23px;
    left: 25px;
  }
  .utilsonae-contents {
    padding: 0 60px;
    .button-shadow {
      box-shadow: inset 0 -4px 0 rgb(84 84 88 / 40%);
      border: 1px solid #ccc;
      color: #545458;
    }
  }
}
</style>
