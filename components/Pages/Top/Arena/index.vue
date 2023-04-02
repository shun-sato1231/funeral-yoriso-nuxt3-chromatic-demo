<template>
  <div>
    <div class="arena mx-auto">
      <div class="content" style="height: 100%">
        <div class="arena-content">
          <div>
            <span class="arena-content-title">全国対応</span>
            <span class="caption">※一部地域を除く</span>
          </div>
          <div>
            <span class="arena-content-title">家族葬なら、よりそう</span>
          </div>
          <div>
            <div class="arena-content-plan py-1 my-1">明朗会計セットプラン</div>
          </div>
          <div>
            <div class="arena-content-price-box font-weight-bold">
              <div class="arena-content-price-box-min">最安</div>
              <span class="arena-content-price-box-price">
                <span class="price-number">
                  81,000
                  <span class="price-note caption">※1</span>
                </span>
                <span>円</span>
                <span class="price-box">
                  (税込<span class="price-number">89,100</span>円)〜
                </span>
              </span>
            </div>
          </div>
          <div class="font-weight-bold my-2">
            資料請求(会員割)+あんしん準備シート割引価格
          </div>
          <div class="flex-box">
            <div>
              <v-card class="guarantee" flat>
                <div>ご満足いただけなければ</div>
                <div>
                  プラン代金を<a :href="$to('/company/guarantee/')">全額返金</a
                  >(会員限定)
                </div>
              </v-card>
              <div class="caption">
                ※祭壇の有無、規模はプランにより異なります
              </div>

              <!-- 火葬料金が別途必要になります -->
              <OrganismsButtonCremationFee @click="$emit('click')" />
            </div>
            <div class="nhk">
              <div class="cm-model">
                <div class="cm-model-inner">
                  <v-icon dark size="20">fa-tv</v-icon>
                  <strong class="cm-model-strong">CM</strong>
                  放映中
                </div>
              </div>
            </div>
          </div>

          <v-img
            class="arena-content-altar"
            src="/img/top/arena/altar.webp"
            alt="祭壇"
            transition="scroll-y-reverse-transition"
          />
          <v-img
            class="arena-content-lady"
            src="/img/common/lady/operator.webp"
            alt="よりそうスタッフ"
            transition="scroll-y-reverse-transition"
          />
          <div class="arena-content-medal">
            <v-img
              src="/img/top/arena/medal_nhk.webp"
              alt="NHKで紹介"
              transition="scroll-y-reverse-transition"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="document-request subcontent">
      <div class="flex-box pa-5">
        <div>
          <h2>お葬式の詳しい資料をお届け</h2>
          <div class="subtitle-2 accent2--text">
            ご家族とのご検討でご利用ください
          </div>
          <div class="body-4">
            ■お葬式の詳細説明 ■近隣の葬儀場情報 ■決定版！お葬式読本
          </div>
        </div>
        <v-spacer></v-spacer>
        <!-- 資料を請求するボタン -->
        <OrganismsButtonDocumentRequest />
      </div>
    </div>

    <div class="subcontent" style="margin-top: -35px">
      <div class="caption mt-1 mb-6">※1 シンプルプランをご利用の場合</div>
      <v-card outlined>
        <div class="flex-box px-4 py-1">
          <span class="body-4 font-weight-bold mr-4">ピックアップ</span>
          <v-icon left color="accent" size="16">fa-info-circle</v-icon>
          <div>
            <v-btn
              class="hyper-link pa-0"
              text
              :href="$to('/newsrelease/all/news200901/')"
            >
              コロナ禍の感染拡大防止への配慮について
            </v-btn>
          </div>

          <v-spacer></v-spacer>
          <div>
            <v-btn class="hyper-link" text :href="$to('/newsrelease/all/')">
              お知らせ一覧
            </v-btn>
          </div>
        </div>
      </v-card>

      <v-card flat class="my-10">
        <v-img
          src="/img/top/arena/bnr_top_cm_pc.webp"
          alt="テレビCM絶賛放映中！（吉谷彩子さん・武田鉄矢さん）"
          class="img"
          :aspect-ratio="1376 / 222"
        />
      </v-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.arena {
  background-color: var(--v-accentLighten3-base);
  position: relative;
  height: 514px;
  color: var(--v-darken-base);
  &:after {
    content: '';
    display: block;
    height: 100%;
    width: 100vw;
    background-color: var(--v-primary-base);
    position: absolute;
    right: 36vw;
    top: 0;
    bottom: 0;
    border-radius: 0 240px 0 0;
  }

  .arena-content {
    padding-top: 40px;
    position: relative;
    z-index: 1;
    height: 100%;

    .arena-content-title {
      font-weight: 700;
      font-size: 44px;
      line-height: 1.3;
      font-feature-settings: 'palt';
    }
    .arena-content-altar {
      height: auto;
      position: absolute;
      bottom: 0;
      z-index: 1;
      width: 560px;
      left: 310px;
    }
    .arena-content-lady {
      height: auto;
      position: absolute;
      bottom: 0;
      z-index: 1;
      width: 265px;
      left: 660px;
    }
    .arena-content-medal {
      position: absolute;
      left: 880px;
      bottom: 15px;
      z-index: 1;
      width: 170px;
      height: 215px;
    }
  }
  .arena-content-plan {
    width: 400px;
    font-weight: 700;
    font-size: 20px;
    background-color: var(--v-accent-base);
    color: #fff;
    padding: 0 0.75em;
    border-radius: 100px;
    display: inline-block;
    text-indent: 0;
    text-align: center;
  }
  .arena-content-price-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    margin-top: 10px;
    .arena-content-price-box-min {
      font-size: 18px;
      width: 1em;
      line-height: 1.2;
      margin-right: 5px;
      padding-bottom: 3px;
    }
    .arena-content-price-box-price {
      font-size: 32px;
      line-height: 0.9;

      .price-note {
        position: absolute;
        right: -1.75em;
        top: 0.6em;
      }
      .price-box {
        font-size: 22px;
      }
      .price-number {
        font-size: 200%;
        display: inline-block;
        padding-right: 0.025em;
        position: relative;
        bottom: -0.025em;
        font-family: Bebas_Neue, Impact, sans-serif;
        font-weight: 400 !important;
      }
    }
  }
  .guarantee {
    font-size: 18px;
    padding: 0.25em;
    text-align: center;
    width: 310px;
    margin-bottom: 10px;
    font-weight: 400;
    background-color: hsla(0, 0%, 100%, 0.75);
    border: 1px solid #d8af10;
    a {
      color: var(--v-accent-base);
      font-weight: bold;
    }
  }

  .nhk {
    position: absolute;
    left: 345px;
    bottom: 100px;
    z-index: 2;
  }
  .cm-model {
    width: 100px;
    height: 100px;
    position: relative;
    padding: 10px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    line-height: 1.1;
    letter-spacing: 0.05em;
    &:before {
      content: '';
      display: block;
      background: #c25155;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 100px;
      height: 100px;
      border-radius: 50px;
    }
  }

  .cm-model-inner {
    position: relative;
    z-index: 1;
    font-weight: 400;
  }
  .cm-model-strong {
    font-size: 28px;
    display: block;
    padding: 4px;
    letter-spacing: 0.08em;
    font-family: Roboto, Arial, Helvetica;
    font-weight: 700;
    line-height: 0.9;
  }
  .document-request {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    position: relative;
    z-index: 5;
    -webkit-box-shadow: 0 0 20px rgb(0 0 0 / 15%);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    border-radius: 5px;
  }
}
</style>
