<template>
  <div class="price-detail-area">
    <h2 class="flex-box">
      <div class="mr-2">
        <v-img
          src="/img/area/img-illust-okane.webp"
          width="50"
          height="47"
          alt="最も安く済んだ方"
        />
      </div>
      <strong class="price-detail-title"> よりそうお葬式の総額費用内訳</strong
      ><span class="price-detail-subtitle">（{{ city.name }}の場合）</span>
    </h2>

    <v-row no-gutters class="table">
      <v-col cols="4" class="table-under-line table-title">
        <v-avatar color="primary" size="20">
          <span class="font-weight-bold text-primaryText">a</span>
        </v-avatar>
        絶対にかかる費用
      </v-col>
      <v-col cols="4" class="table-under-line">
        <div class="table-text table-under-dashed-line table-right-dashed-line">
          プラン料金
        </div>
        <div class="table-text table-right-dashed-line">ご火葬料金</div>
      </v-col>
      <v-col cols="4" class="table-under-line text-center justify-center">
        <div class="subtotal-box">
          <span class="subtotal">小計</span>
          <span class="number">{{
            $floorDecimal(
              (city.city_funeral_survey.plan_price +
                city.city_funeral_survey.cremation_price) /
                10000,
              0
            )
          }}</span>
          万円
        </div>
      </v-col>
      <v-col cols="4" class="table-under-line table-title">
        <v-avatar color="primary" size="20">
          <span class="font-weight-bold text-primaryText">b</span>
        </v-avatar>
        希望に応じてかかる費用
      </v-col>
      <v-col
        cols="4"
        class="table-text table-under-line table-right-dashed-line"
      >
        追加オプション
      </v-col>
      <v-col cols="4" class="table-under-line justify-center">
        <div class="subtotal-box">
          <span class="subtotal">小計</span>
          <span class="number">{{
            $floorDecimal(city.city_funeral_survey.option_price / 10000, 0)
          }}</span>
          万円
        </div>
      </v-col>
      <v-col cols="12" class="text-right total-box text-accent">
        <span class="subtotal total-accent py-1">総額</span>
        <span class="number">{{
          $floorDecimal(city.city_funeral_survey.total_price / 10000, 0)
        }}</span>
        万円
      </v-col>
    </v-row>

    <div class="flex-box py-3">
      <v-spacer />
      <!-- 火葬料金が別途必要になります -->
      <OrganismsButtonCremationFee @click="$emit('click')" />
    </div>

    <v-row no-gutters class="px-10 pt-6 pb-5">
      <v-col cols="6" class="flex-box">
        <div>
          <v-img
            src="/img/area/img-low-cost.webp"
            alt="最も安く済んだ方"
            width="200"
            height="35"
          />
        </div>

        <div class="pl-4">
          <span class="subtotal">総額</span>
          <span class="number">{{
            $floorDecimal(city.city_funeral_survey.min_price / 10000, 0)
          }}</span
          >万円
        </div>
      </v-col>

      <v-col cols="6" class="flex-box">
        <div>
          <v-img
            src="/img/area/img-high-cost.webp"
            alt="最も安く済んだ方"
            width="200"
            height="35"
          />
        </div>

        <div class="pl-4">
          <span class="subtotal">総額</span>
          <span class="number">{{
            $floorDecimal(city.city_funeral_survey.max_price / 10000, 0)
          }}</span
          >万円
        </div>
      </v-col>
      <v-col cols="12" class="title font-weight-bold text-center pt-2">
        {{ city.name }} の方は、
        <span class="main-number">{{
          $floorDecimal(city.city_funeral_survey.min_price / 10000, 0)
        }}</span>
        〜
        <span class="main-number">{{
          $floorDecimal(city.city_funeral_survey.max_price / 10000, 0)
        }}</span>
        万円程度の費用でお葬式をあげています
      </v-col>
    </v-row>

    <v-row no-gutters class="table option-area">
      <v-col cols="3">
        <div class="option-title py-6 pl-12">
          <p class="mb-0">オプション別</p>
          <p class="mb-0">の平均費用</p>
        </div>
      </v-col>
      <v-col cols="9" class="pa-2">
        <v-row no-gutters>
          <template v-for="plan in city.city_funeral_survey.plans">
            <v-col cols="2" class="option-text justify-center">
              <div class="option-text-title">{{ plan.name }}</div>
            </v-col>
            <v-col cols="2" class="justify-center">
              <b
                >{{
                  plan.price ? $floorDecimal(plan.price / 10000, 0) : '-'
                }}万円</b
              >
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>

    <div class="pt-6">
      <div class="caption">
        ※追加の希望がなければ、オプション費用が加算されることはありません
      </div>
      <div class="caption">
        ※{{ city.name }} でよりそうお葬式を利用した方の費用より（調査期間：{{
          $dayjs(city.city_funeral_survey.survey_started_on).format(
            'YYYY年MM月'
          )
        }}〜{{
          $dayjs(city.city_funeral_survey.survey_ended_on).format('YYYY年MM月')
        }}）
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.price-detail-area {
  background: rgb(var(--v-theme-accentLighten4));
  border-radius: 40px;
  padding: 36px 72px;
  .price-detail-title {
    font-size: 22px;
    font-weight: inherit;
  }
  .price-detail-subtitle {
    font-size: 16px;
    font-weight: 700;
  }
  .subtotal {
    display: inline-block;
    font-size: 16px;
    padding: 0 0.4em;
    color: rgb(var(--v-theme-darken-text);
    border: 1px solid;
    line-height: 23px;
    position: relative;
    bottom: 4px;
    margin-right: 5px;
    opacity: 0.75;
  }
  .table {
    background-color: #fff;
    border: 1px solid rgb(var(--v-theme-lighten));
    border-radius: 2px;
    margin-top: 15px;
    .table-under-line {
      border-bottom: 1px solid rgb(var(--v-theme-lighten));
    }
    .table-under-dashed-line {
      border-bottom: 1px dashed rgb(var(--v-theme-lighten));
    }
    .table-right-dashed-line {
      border-right: 1px dashed rgb(var(--v-theme-lighten));
    }
    .table-title {
      background: rgb(var(--v-theme-accentLighten5));
      padding: 15px 21px;
      width: 300px;
      font-weight: 700;
      color: rgb(var(--v-theme-accent));
    }
    .table-text {
      min-height: 57px;
      font-weight: 700;
      padding: 15px 18px;
      font-size: 18px;
    }
    .total-accent {
      border-color: #ce7b4c;
      background: #ce7b4c;
      color: #fff !important;
      opacity: 1 !important;
      font-weight: bold;
    }
    .total-box {
      padding-right: 73px;
    }
  }
  .main-number {
  }
  .number {
    font-size: 50px !important;
    min-width: 46px;
    text-align: right;
    display: inline-block;
    font-family: Bebas_Neue_Pro, Impact, sans-serif;
    font-weight: 700 !important;
  }
  .option-area {
    .option-title {
      background: rgb(var(--v-theme-darken));
      color: white;
      line-height: 2;
      font-weight: 700;
      display: block;
      min-height: 100px;
    }
    .option-text {
      min-height: 50px;
      .option-text-title {
        font-size: 16px;
      }
    }
  }
}
</style>
