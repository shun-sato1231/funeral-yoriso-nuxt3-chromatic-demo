<template>
  <div class="content sp-content mt-10">
    <v-card
      color="accentLighten2"
      class="text-center py-2 body-1 font-weight-bold"
      tile
      flat
    >
      <p class="mb-0">お葬式の事前準備に</p>
      <p class="mb-0">役立つサービス</p>
    </v-card>
    <div class="px-sp body-3">
      <h3 class="accent-title px-3 mt-8">費用を抑えたい方はこちら</h3>
      <a href="/sogi/request/" class="mt-4">
        <img
          class="common-imageFull lazyloaded"
          src="/img/recommend/img-yoriso-lady-sp.webp"
          width="100%"
          alt="よりそう会員なら、事前資料請求などでお葬式費用が最大3万円割引。資料請求割 最大2万円 ※1 ＋ あんしん準備シート割 1万円 ※2"
        />
      </a>
      <p class="mb-0 caption">
        ※1 家族葬で、お申し込み前日までに資料請求した場合
      </p>
      <p class="caption">※2 お申し込み前日までに記入完了した場合</p>
      <div class="justify-center">
        <img
          src="/img/recommend/img-double-arrow-down.webp"
          width="110"
          height="30"
          alt=""
        />
      </div>
      <a class="get-discount-button pt-2 mt-4" href="/sogi/request/">
        <p class="body-3 text-center mb-0">今すぐ資料請求して</p>
        <p class="text-h4 text-center mb-0">割引を受ける</p>
      </a>
      <p class="caption text-center mt-2">資料請求と同時に会員登録できます</p>
      <hr class="utilsonae-contents__hr" />
      <v-btn
        width="100%"
        class="font-weight-bold text-primaryText body-2 mb-2"
        :href="$to('/plan/jumbi/')"
        >お得な割引をすべて見る</v-btn
      >
      <v-btn
        width="100%"
        class="font-weight-bold text-primaryText body-2"
        :href="$to('/membership/')"
        >よりそう会員の詳細を見る</v-btn
      >
    </div>
    <div class="px-sp body-3">
      <h3 class="accent-title px-3 mt-8 mb-4">
        お葬式の知識を得たい方はこちら
      </h3>
      <a href="/sogi/request?view_type=fromDokuhonBnr">
        <img
          src="/img/common/bnr/bnr_dokuhon.webp"
          alt="決定版 お葬式読本 無料プレゼント"
          width="100%"
      /></a>
      <!-- お葬式の知識 -->
      <OrganismsRecommendFuneralKnowledge
        :contentCategories="contentCategories"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    contentCategories: {
      type: Array,
    },
  },
  data() {
    return {
      items: [
        {
          title: '喪主に必要な知識が身につく',
          image:
            'https://cdn.yoriso.com/sogi/renewal/images/common/bnr/bnr_dokuhon.png',
          imageAlt: '決定版 お葬式読本 無料プレゼント',
          url: '/request/',
        },
        {
          title: '早めに備えて費用を抑える',
          image:
            'https://cdn.yoriso.com/sogi/renewal/images/common/bnr/bnr_jizenwari.png',
          imageAlt:
            'そなえてあんしん、事前割 早く申し込むほどお得 最大10.78万円(税込)割引',
          url: '/jizenwari/',
          caption: '※二日プランで事前割2年経過時の割引額',
        },
        {
          title: '割引サービスを一覧で見る',
          image:
            'https://cdn.yoriso.com/sogi/renewal/images/common/bnr/bnr_kaiinWaribiki.png',
          imageAlt: 'お葬式の費用が抑えられる お得な3つの会員割',
          url: '/plan/jumbi/',
        },
        {
          title: 'サービス内容を詳しく知る',
          image:
            'https://cdn.yoriso.com/sogi/renewal/images/common/bnr/bnr_shiryoseikyu.png',
          imageAlt: '無料資料請求 お葬式とわからない封筒でお届けします',
          url: '/request/',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.get-discount-button {
  display: block;
  background: linear-gradient(180deg, #ffea99, #f3d45b),
    linear-gradient(0deg, #f3d45b, #f3d45b), #f3d45b;
  box-shadow: 0 4px 4px rgb(0 0 0 / 15%), inset 0 -2px 0 rgb(0 0 0 / 20%);
  border: 1px solid #ccc;
  border-radius: 5px;
  font-weight: bold;
  color: #545458 !important;
  text-decoration: none;
}
.utilsonae-contents__hr {
  border: 0.5px solid #e7e0ba;
  width: 100%;
  margin: 20px 0;
}
</style>
