<template>
  <div class="content">
    <v-row no-gutters class="mb-5">
      <v-col cols="12" class="text-center mb-5">
        <img
          width="300"
          height="51"
          :src="titleImageSrc"
          :alt="titleImageAlt"
          class="d-block mx-auto"
        />
        <img
          v-if="titleCaptionSrc && titleCaptionAlt"
          :width="isFamily ? '337' : '250'"
          height="19"
          :src="titleCaptionSrc"
          :alt="titleCaptionAlt"
          class="d-block mx-auto mt-2"
        />
        <p
          v-if="$vuetify.breakpoint.lgAndUp"
          class="utilwaribikiJoken-beforePlanCards mt-5"
        >
          事前の資料請求などで、{{ isFamily ? '家族葬' : '火葬式' }}の費用が
          <span class="utilwaribikiJoken-beforePlanCards__number">{{
            isFamily ? '3' : '1.5'
          }}</span
          ><span class="font-weight-bold"
            >万円割引に<small class="font-weight-bold">※</small></span
          >
        </p>
        <p
          v-else
          class="utilwaribikiJoken-beforePlanCardsSp mt-5 font-weight-bold mx-auto py-3"
        >
          事前の資料請求<span class="body-3">等で</span>
          <span class="utilwaribikiJoken-beforePlanCards__number">{{
            isFamily ? '3' : '1.5'
          }}</span
          ><span class="text-accent">万円割引</span>
          <span class="d-block caption px-4"
            >{{
              isFamily ? '家族葬' : '火葬式'
            }}のお申込み前日までに、資料請求とあんしん準備シート記入した場合
            [会員限定]</span
          >
        </p>
      </v-col>
      <v-col
        cols="12"
        md="4"
        lg="4"
        v-for="(funeralPlan, index) in funeralPlans"
        :key="index"
        class="pa-2"
      >
        <OrganismsRecommendPlanListPcCardsCard
          :funeralPlan="funeralPlan"
          v-if="index < 3"
          :is-vertical-detail="isVerticalDetail"
        />
      </v-col>
      <v-col class="px-2" cols="12" md="9" lg="9">
        <span
          class="d-inline-block accent text-white rounded-circle caption-warning"
          >※</span
        >
        <span class="font-weight-bold body-3"
          >お申込み前日までに、資料請求とあんしん準備シート記入で{{
            isFamily ? '3' : '1.5'
          }}万円割引 [会員限定]</span
        >
        <p class="caption">
          ※写真はイメージです。{{ isFamily ? '式場により異なります' : '' }}
        </p>
      </v-col>
      <!-- 火葬料金が別途必要になります -->
      <v-col cols="12" md="3" lg="3">
        <OrganismsButtonCremationFee @click="$emit('click')" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    funeralPlans: {
      type: Array,
    },
    titleCaptionSrc: {
      type: String,
    },
    titleCaptionAlt: {
      type: String,
    },
    titleImageSrc: {
      type: String,
    },
    titleImageAlt: {
      type: String,
    },
    isVerticalDetail: {
      type: Boolean,
      default: false,
    },
    isFamily: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.caption-warning {
  text-align: center;
  width: 18px;
  height: 18px;
  font-size: 14px;
}
.utilwaribikiJoken-beforePlanCards {
  font-size: 18px;
  color: #ce7b4c;
  background: #fbfaf5;
  border: 2px solid #ce7b4c;
  text-align: center;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  border-radius: 4px;
  padding: 5px 2em 6px;
  margin-right: auto;
  margin-left: auto;
  line-height: 1;
  height: 35px;
  position: relative;
  .utilwaribikiJoken-beforePlanCards__number {
    display: inline-block;
    font-family: Bebas_Neue_Pro, Impact, sans-serif;
    font-size: 35px;
    font-weight: 700 !important;
    margin-top: -11px;
    background: #fbfaf5;
    padding: 0 3px;
  }
  &:before {
    content: '';
    position: absolute;
    border-color: transparent transparent #ce7b4c;
    top: -12px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7px 12px;
    top: -12px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  &:after {
    content: '';
    position: absolute;
    border-color: transparent transparent #fbfaf5;
    top: -8px !important;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7px 12px;
    top: -12px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}
.utilwaribikiJoken-beforePlanCardsSp {
  font-size: 18px;
  background: #fbfaf5;
  border: 1px solid #ce7b4c;
  text-align: center;
  width: 95%;
  border-radius: 4px;
  line-height: 1;
  height: 85px;
  position: relative;
  .utilwaribikiJoken-beforePlanCards__number {
    display: inline-block;
    color: #ce7b4c;
    font-family: Bebas_Neue_Pro, Impact, sans-serif;
    font-size: 30px;
    font-weight: 700 !important;
    margin-top: -11px;
    background: #fbfaf5;
    padding: 0 3px;
  }
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 12px 16px;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    top: -16px;
    border-color: transparent transparent #ce7b4c;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  &:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 12px 16px;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    top: -14px;
    border-color: transparent transparent #fbfaf5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
}
</style>
