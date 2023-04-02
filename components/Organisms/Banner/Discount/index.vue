<template>
  <div>
    <v-card class="jizen-discount mb-5" href="/sogi/jizenwari/">
      <div class="flex-box pl-8 pr-5 py-4">
        <div class="title-area mr-8">
          <div class="text-center mb-2">よりそう会員限定</div>
          <img
            src="/img/logo/logo_yoriso-jizenwari_short.svg"
            alt="事前割"
            width="206"
            height="84"
          />
        </div>

        <div class="discount-area">
          <div class="title mb-2">お申込みでお葬式費用が</div>
          <div class="max-discount">
            <div class="max">
              <span>最</span>
              <span>大</span>
            </div>
            <div class="number">
              <span class="max-ten-thousand">10</span>
              <span class="max-thousand">.78</span>
              <span class="max-yen">
                万円
                <span class="max-tax">税込</span>
              </span>
            </div>
            <div class="discount">割引</div>
          </div>
          <div class="caption mt-2">※二日プランで事前割2年経過時の割引額</div>
        </div>

        <div class="px-5">
          <div
            class="discount-merit flex-box pa-2"
            v-for="(discountMerit, index) in discountMerits"
            :key="index"
          >
            <v-icon left color="discountBlue">fa-check-circle</v-icon>
            <div v-html="discountMerit" />
          </div>
        </div>

        <v-spacer></v-spacer>
        <v-icon color="discountBlue">fa-chevron-right</v-icon>
      </div>
    </v-card>

    <!-- 訴求ボタン -->
    <v-row no-gutters class="mb-10">
      <v-col cols="6" class="pr-2">
        <MoleculesButtonAccent
          title="決定版！お葬式読本をもらう"
          description="喪主の「いつ、何をする？」がわかる"
          rgb-color="57, 115, 67"
          src="/img/jizenwari/img-ososhiki-dokuhon.webp"
          :href="$to('/request/')"
          width="40"
          height="56"
        />
      </v-col>
      <v-col cols="6" class="pl-2">
        <MoleculesButtonAccent
          title="よりそう割引制度のご案内"
          description="お得な割引サービスで費用を抑えられます"
          rgb-color="243, 212, 91"
          src="/img/jizenwari/img-yen.svg"
          :href="$to('/plan/jumbi/')"
          width="40"
          height="56"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      discountMerits: [
        '申込み30日目から割引適用',
        '2年後には最大10.78万円割引<span class="caption">(税込)</span>',
        '申込み無料でかんたん手続き',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.jizen-discount {
  line-height: 1;
  position: relative;
  border-width: 1px;
  border-color: rgba(33, 85, 155, 0.3);
  border-style: solid;
  background: #fbfaf5 url(/img/jizenwari/bg-tile.webp);
}
.title-area {
  width: 206px;
  color: var(--v-discountBlue-base);
  font-size: 18px !important;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}
.discount-area {
  width: 313px;
  .title {
    font-weight: 700;
    font-size: 18px !important;
  }
  .max-discount {
    position: relative;
    display: flex;
    .max {
      width: 32px;
    }
    .max > span {
      display: inline-block;
      margin-bottom: 2px;
      padding: 2px;
      background-color: var(--v-discountBlue-base);
      color: #fff;
      font-weight: 700;
      line-height: 25px;
      font-size: 24px;
    }
    .number {
      position: absolute;
      bottom: -6px;
      color: #f88011;
      left: 35px;
    }
    .max-ten-thousand {
      font-size: 84.41px;
      display: inline-block;
      line-height: 0.7;
      align-self: end;
    }
    .max-thousand {
      font-size: 48.65px;
      display: inline-block;
      align-self: end;
    }
    .max-yen {
      position: relative;
      font-weight: 700;
      font-size: 29.87px;
      align-self: end;
    }
    .max-tax {
      position: absolute;
      display: block;
      letter-spacing: 0.15em;
      top: -52%;
      right: 5px;
      font-weight: 400;
      font-size: 14.72px;
    }
    .discount {
      position: absolute;
      bottom: 0px;
      right: 0px;
      font-weight: 700;
      color: var(--v-discountBlue-base);
      font-size: 44.15px;
    }
  }
  .discount-merit {
    font-weight: 400;
  }
}
</style>
