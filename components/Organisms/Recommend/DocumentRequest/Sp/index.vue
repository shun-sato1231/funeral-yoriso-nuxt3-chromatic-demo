<template>
  <div class="sp-content px-sp">
    <div class="card-area">
      <h3 class="maincta-header-title text-center">
        お葬式費用が最大<span class="discount-price">3</span>万円<span
          class="caption"
          >※</span
        >お得に
      </h3>
      <div class="px-sp">
        <h4 class="maincta-body-title text-center mt-3">無料相談ダイヤル</h4>
        <div class="flex-box">
          <v-avatar size="60" color="white">
            <img
              src="/img/common/cta/img_common_thumbnail_operator.webp"
              alt="よりそうお葬式オペレーター"
            />
          </v-avatar>
          <div class="body-3">
            お葬式のご依頼や些細なご相談でもお気軽にお問い合せください
          </div>
        </div>

        <div class="py-3">
          <OrganismsButtonPhoneSp />
        </div>
        <hr class="hr" />

        <h4 class="maincta-body-title text-center body-1 mt-3">
          お葬式の詳しい資料をお届け
        </h4>

        <div class="body-4 flex-box">
          <div class="mx-auto">
            <div>・お葬式プランや流れの詳しい説明</div>
            <div>・近隣の葬儀場情報</div>
            <div>・決定版！お葬式読本</div>
          </div>
        </div>

        <div class="text-center pt-2">
          <div class="document-request-label">
            ご家族とのご検討でご利用ください
          </div>
        </div>

        <!-- 資料を請求するボタン -->
        <OrganismsButtonDocumentRequest />

        <div class="caption py-3">
          ※家族葬で、お申込み前日までに資料請求とあんしん準備シート記入した場合
          [会員限定]
        </div>
      </div>
    </div>
    <div class="present">資料請求された方にもれなく</div>
    <a href="/sogi/request?view_type=fromDokuhonBnr">
      <img
        src="/img/common/cta/dokuhon/common_dokuhon_full_sp.webp"
        alt="お葬式読本 無料プレゼント"
        width="100%"
        class="mb-3 mx-auto"
        max-width="380"
    /></a>
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
.discount-price {
  font-size: 125%;
}
.card-area {
  border: 2px solid #985253;
  border-radius: 5px;
  background: rgb(var(--v-theme-accentLighten4));
  .maincta-header-title {
    font-size: 16px;
    font-weight: 700;
    background: #985253;
    color: #fff;
  }
  .maincta-body-title {
    font-size: 24px;
    font-weight: 700 !important;
  }
  .hr {
    border-top: 1px dotted #ccc;
  }

  .document-request-label {
    font-size: 14px;
    display: inline-block;
    position: relative;
    padding: 0 30px;
    font-weight: 700;
    text-align: center;
    color: rgb(var(--v-theme-accent2));
    line-height: 30px;
    &:before {
      -webkit-transform: rotate(50deg) translateY(-50%);
      transform: rotate(50deg) translateY(-50%);
      -webkit-transform-origin: bottom right;
      transform-origin: bottom right;
      position: absolute;
      left: 0;
      top: 50%;
      content: '';
      display: block;
      height: 1px;
      width: 26px;
      background: rgb(var(--v-theme-accent2));
      margin-top: 7px;
      position: absolute;
    }
    &:after {
      content: '';
      display: block;
      height: 1px;
      width: 26px;
      background: rgb(var(--v-theme-accent2));
      margin-top: 7px;
      position: absolute;
      -webkit-transform: rotate(-50deg) translateY(-50%);
      transform: rotate(-50deg) translateY(-50%);
      -webkit-transform-origin: bottom left;
      transform-origin: bottom left;
      right: 0;
      top: 50%;
    }
  }
}
.present {
  position: relative;
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  font-weight: 700;
  z-index: 1;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 80px 0;
    border-color: #e5e5e5 transparent transparent;
    z-index: -1;
  }
}
</style>
