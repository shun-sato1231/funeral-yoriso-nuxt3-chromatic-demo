<template>
  <div
    class="price-area py-2"
    v-if="city.prefecture_funeral_external_survey && city.city_funeral_survey"
  >
    <div class="price-box">
      <v-card outlined>
        <v-card-title class="price-title justify-center price-title-average"
          ><span class="price-subtitle">{{ city.prefecture.full_name }}</span
          >の平均費用は…</v-card-title
        >
        <div class="price-text flex-box justify-center">
          <div class="total-price">総額</div>
          <span class="number">{{
            $floorDecimal(
              city.prefecture_funeral_external_survey.min_price / 10000,
              0
            )
          }}</span>
          <span class="font-weight-bold ml-2">〜</span>
          <span class="number">{{
            $floorDecimal(
              city.prefecture_funeral_external_survey.max_price / 10000,
              0
            )
          }}</span>
          <span class="yen">万円</span>
        </div>
      </v-card>
      <div class="caption my-2">
        ※{{ city.prefecture_funeral_external_survey.name }} より
      </div>
    </div>

    <v-spacer></v-spacer>
    <div class="price-arrow">
      <v-icon size="80">fa-caret-right</v-icon>
    </div>
    <v-spacer></v-spacer>
    <div class="price-box">
      <v-card outlined class="price-yoriso">
        <v-card-title class="price-title justify-center price-title-yoriso">
          <div class="text-center">
            <div>よりそうお葬式なら</div>
            <div class="subtitle-1">（{{ city.name }}における平均費用）</div>
          </div>
        </v-card-title>
        <div class="price-text flex-box justify-center">
          <div class="total-price total-price-yoriso">総額</div>
          <span class="number text-accent">{{
            $floorDecimal(city.city_funeral_survey.total_price / 10000, 0)
          }}</span>
          <span class="yen text-accent">万円</span>
        </div>
      </v-card>
      <div class="caption my-2">
        ※よりそうお葬式を利用した方の平均費用（調査期間：{{
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
.number {
  font-size: 55px;
  font-family: Bebas_Neue_Pro, Impact, sans-serif;
  font-weight: 700;
}
.price-area {
  display: flex;
  .price-box {
    width: 442px;
  }
  .price-yoriso {
    margin-right: inherit;
  }
  .price-text {
    height: 76px;
    .total-price {
      display: inline-block;
      border: 1px solid #aaa;
      line-height: 25px;
      padding: 0 0.4em;
      font-size: 16px;
      font-weight: 700;
      background: #e5e5e5;
      margin-right: 6px;
      margin-top: 10px;
    }
    .total-price-yoriso {
      border-color: #ce7b4c;
      background: #ce7b4c;
      color: #fff;
    }
    .yen {
      margin: 7px 0 0 5px;
      font-weight: 700;
      font-size: 26px;
      line-height: 1;
    }
  }
  .price-title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    height: 68px;
    padding: 0;
  }
  .price-subtitle {
    font-size: 24px;
    font-weight: 700;
  }
  .price-title-average {
    background: #f3f3f3;
  }
  .price-title-yoriso {
    background: rgb(var(--v-theme-primary));
  }
  .price-arrow {
    width: 80px;
    text-align: center;
    padding-top: 30px;
  }
}
</style>
