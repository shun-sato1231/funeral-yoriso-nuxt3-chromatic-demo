<template>
  <v-card
    class="font-weight-bold text-center plan-card"
    :href="$to('/plan/' + funeralPlan.code + '/')"
  >
    <!-- タイトル -->
    <v-card-title
      :style="
        'color: white; background-color: rgba(' +
        funeralPlan.colors.primary +
        ');'
      "
      class="pa-0"
    >
      <h3 class="card-header mx-auto">
        <span class="card-header-brand">
          <span class="card-header-brand-yoriso">よりそう</span>
          <span class="card-header-brand-type">{{
            funeralPlan.funeral_plan_type.name
          }}</span>
        </span>
        <img
          :src="`/img/plan/card/${funeralPlan.code}.svg`"
          alt="プランのタイトル"
          class="ml-3"
        />
      </h3>
    </v-card-title>

    <!-- サブタイトル -->
    <v-row no-gutters>
      <v-col
        cols="12"
        class="sub-title"
        :style="
          'color: rgba(' +
          funeralPlan.colors.primary +
          ', 1.0);background-color: rgba(' +
          funeralPlan.colors.primary +
          ', 0.1);'
        "
      >
        {{ funeralPlan.description }}
      </v-col>

      <!-- 画像 -->
      <v-col :cols="isVerticalDetail ? 8 : 12">
        <div
          style="position: relative"
          v-if="funeralPlan.images.length > 0"
          class="box-image"
        >
          <v-img
            :src="funeralPlan.images[0].src"
            :alt="funeralPlan.name"
            :min-height="isVerticalDetail ? 118 : 178"
          />

          <!-- オプション -->
          <div
            class="box-image-option"
            v-if="funeralPlan.options && funeralPlan.options.length > 0"
          >
            <div
              class="pa-1"
              :style="'background: rgba(' + funeralPlan.colors.primary + ');'"
            >
              <span class="caption box-image-option-message">さらに</span>
              <br /><span class="box-image-option-name">{{
                funeralPlan.options[0].name
              }}</span
              ><span class="caption box-image-option-message">つき</span>
            </div>
            <div v-if="funeralPlan.options[0].images.length > 0">
              <img
                :src="funeralPlan.options[0].images[0].src"
                height="50"
                position="top"
                :alt="funeralPlan.options[0].images[0].name"
              />
            </div>
          </div>
          <img
            v-if="funeralPlan.is_reccomend"
            class="card-imagebox-ribbon-recommend"
            width="68"
            height="93"
            src="/img/common/medal/ribbon_recommend_plan.webp"
            alt="推奨プラン"
          />
        </div>
        <v-skeleton-loader
          type="image"
          tile
          boilerplate
          v-else
          max-height="188"
        />
      </v-col>

      <!-- 詳細 -->
      <v-col cols="4" v-if="isVerticalDetail" class="card-detail py-2">
        <div>
          <v-icon size="18" class="pr-0">fa-user</v-icon>
          <span
            ><strong class="user-count"
              >1~{{ funeralPlan.number_of_people }}</strong
            ><span class="user-count-unit caption">名程</span></span
          >
        </div>

        <div
          v-for="(tag, tagIndex) in funeralPlan.tags"
          :key="tagIndex"
          label
          outlined
          :class="[
            'card-detail-chip-vertical',
            tag.disabled ? 'disabled' : '',
            'rounded-pill',
          ]"
          :style="
            'color: white; background-color: rgba(' +
            funeralPlan.colors.primary +
            ');'
          "
        >
          <span class="tag-child">{{ tag.name }}</span>
        </div>
      </v-col>
      <v-col cols="12" v-else>
        <div class="card-detail flex-box">
          <svg
            class=""
            width="15"
            height="23"
            viewBox="0 0 15 23"
            :fill="'rgba(' + funeralPlan.colors.primary + ')'"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.23568 2.14502C9.23568 3.32251 8.29505 4.27783 7.13568 4.27783C5.9763 4.27783 5.03568 3.32251 5.03568 2.14502C5.03568 0.967529 5.9763 0.012207 7.13568 0.012207C8.29505 0.012207 9.23568 0.967529 9.23568 2.14502ZM6.78568 15.6528V21.3403C6.78568 22.1268 6.16005 22.7622 5.38568 22.7622C4.6113 22.7622 3.98568 22.1268 3.98568 21.3403V11.4272L2.73443 13.5422C2.3363 14.2132 1.47443 14.4309 0.813801 14.0266C0.153176 13.6222 -0.0611985 12.7469 0.336927 12.0759L2.88755 7.76587C3.6488 6.48174 5.0138 5.69526 6.48818 5.69526H7.78755C9.26193 5.69526 10.6269 6.48174 11.3882 7.76587L13.9388 12.0759C14.3369 12.7469 14.1226 13.6222 13.4619 14.0266C12.8013 14.4309 11.9394 14.2132 11.5413 13.5422L10.2857 11.4272V21.3403C10.2857 22.1268 9.66005 22.7622 8.88568 22.7622C8.1113 22.7622 7.48568 22.1268 7.48568 21.3403V15.6528H6.78568Z"
            ></path>
          </svg>
          <span class="font-weight-bold"
            ><strong class="user-count ml-1"
              >1~{{ funeralPlan.number_of_people }}</strong
            ><span class="user-count-unit">名程</span></span
          >

          <v-spacer></v-spacer>
          <div
            v-for="(tag, tagIndex) in funeralPlan.tags"
            :key="tagIndex"
            label
            outlined
            :class="[
              'card-detail-chip',
              tag.disabled ? 'disabled' : '',
              'rounded-pill',
            ]"
            :style="
              tag.disabled
                ? 'color: rgba(' +
                  funeralPlan.colors.primary +
                  '); background-color: white; border: 1px solid rgba(' +
                  funeralPlan.colors.primary +
                  ');'
                : 'color: white; background-color: rgba(' +
                  funeralPlan.colors.primary +
                  ');'
            "
          >
            <span class="tag-child">{{ tag.name }}</span>
          </div>
        </div>
      </v-col>
    </v-row>
    <div class="mt-2">
      <p class="normal-price-wrapper mb-0">
        <span class="body-4 font-weight-bold">通常価格：</span
        ><span class="normal-price mb-1"
          >{{ beforeDiscountPrice.toLocaleString()
          }}<span class="normal-price-prefix"> 円</span></span
        ><span class="absolute-text hidden-sm-down">税抜</span>
        <span class="absolute-text-sp hidden-md-up">税抜</span>
        <span class="caption">(税込</span
        ><span class="price-sub"
          >{{ beforeDiscountFixPrice.toLocaleString() }} </span
        ><span class="caption">円)のところ</span>
      </p>
    </div>
    <!-- 金額 -->
    <v-row class="mb-4 mt-1 mx-0 px-0" justify="space-around">
      <v-col cols="4" class="discount body-3 accent--text pa-0">
        事前資料請求
        <p class="absolute-text caption">などで</p>
        <p
          :class="[
            isFamily ? 'absolute-warn' : 'absolute-warn-fire',
            'caption',
          ]"
        >
          ※
        </p>
        <p class="mb-0 discount-wrapper">
          <span class="number font-weight-bold">{{
            isFamily ? '3' : '1.5'
          }}</span>
          <span class="discount-prefix">万円割引</span>
        </p>
      </v-col>
      <v-col cols="7" class="accent--text pl-0 pr-0 py-0">
        <span class="card-price-parent"
          ><span class="card-price"
            >{{ funeralPlan.price.toLocaleString() }} </span
          ><span class="main-price-prefix"
            >円<span class="absolute-text">税抜</span></span
          >
        </span>
        <p class="in-tax mb-0 text-right">
          <span class="caption"><span class="body-3">（</span>税込</span
          ><span class="body-3 in-tax-number">{{
            (funeralPlan.price + funeralPlan.tax).toLocaleString()
          }}</span
          ><span class="caption">円<span class="body-3">）</span></span>
        </p>
      </v-col>
    </v-row>

    <v-divider></v-divider>
    <div class="hidden-sm-down justify-center py-3">詳細をみる</div>
  </v-card>
</template>

<script>
export default {
  props: {
    funeralPlan: {
      type: Object,
    },
    isVerticalDetail: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isFamily() {
      return (
        this.funeralPlan.funeral_plan_type.id ===
        this.$const.db.ending.funeralPlanTypes.family.id
      );
    },
    discountPrice() {
      return this.$floorDecimal(this.funeralPlan.max_discount_price / 10000, 1);
    },
    beforeDiscountPrice() {
      // 割引前の料金(税抜)
      return this.funeralPlan.price + this.funeralPlan.max_discount_price;
    },
    beforeDiscountFixPrice() {
      // 割引前の料金(税込)
      return (
        this.beforeDiscountPrice +
        this.$floorDecimal(this.beforeDiscountPrice / 10, 1)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.plan-card {
  border: 1px solid #aaa;
}
.sub-title {
  font-size: 17px !important;
  line-height: 32px;
  font-weight: 700;
}
.normal-price-wrapper {
  position: relative;
  letter-spacing: -0.03em;
  .normal-price {
    display: inline-block;
    padding-right: 0.025em;
    position: relative;
    bottom: -0.025em;
    font-family: Bebas_Neue_Pro, Impact, sans-serif;
    line-height: 0.9;
    font-size: 28px;
    font-weight: 400 !important;
  }
  .normal-price-prefix {
    font-size: 18px;
  }
  .price-sub {
    font-family: Bebas_Neue_Pro, Impact, sans-serif;
    font-size: 16px;
    font-weight: 500 !important;
  }
  .absolute-text {
    content: '';
    position: absolute;
    transform: translateX(-50%) scale(0.7);
    font-size: 6px !important;
    top: -3px;
    left: 155px;
    font-weight: 400 !important;
  }
  .absolute-text-sp {
    content: '';
    position: absolute;
    transform: translateX(-50%) scale(0.7);
    font-size: 6px !important;
    top: -3px;
    left: 49%;
    font-weight: 400 !important;
  }
}
.discount-wrapper {
  letter-spacing: -0.3em !important;
  line-height: 45px;
}
.discount {
  background-color: var(--v-accentLighten4-base);
  position: relative;
  font-size: 12px;
  font-weight: 700;
  border: 2px solid var(--v-accent-base);
  border-radius: 5px 5px 10px 10px;
  height: 70px;
  padding: 0 1px;
  max-width: 110px;
  .number {
    font-size: 34px;
    font-weight: 700 !important;
    font-family: 'Bebas_Neue_Pro', Impact, sans-serif;
    line-height: 10px;
    color: #bd622f !important;
  }
  .discount-prefix {
    letter-spacing: -0.1em;
    font-size: 16px;
  }
  .absolute-text {
    content: '';
    position: absolute;
    top: 30%;
    right: 5px;
  }

  .absolute-warn {
    content: '';
    position: absolute;
    font-size: 10px !important;
    top: 25px;
    left: 32px;
  }
  .absolute-warn-fire {
    content: '';
    position: absolute;
    font-size: 10px !important;
    top: 28px;
    left: 32px;
  }
  &:before {
    content: '';
    width: 13px;
    height: 16px;
    background: url('/img/plan/fukidashi-sankaku.webp') no-repeat;
    background-size: contain;
    position: absolute;
    right: -12px;
    top: 32px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}
.card-header {
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
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  padding: 10px 0;
}
.card-header-brand {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
}
.card-header-brand-yoriso {
  display: block;
  letter-spacing: 0.05em;
  font-weight: inherit;
}
.card-header-brand-type {
  display: block;
  letter-spacing: 0.4em;
  font-weight: inherit;
}
.card-header-plan {
  font-size: 28px;
  font-weight: 700;
  margin-left: 6px;
}
.card-imagebox-ribbon-recommend {
  position: absolute;
  top: 0;
  left: 10px;
  width: 68px;
}
.card-price-parent {
  position: relative;
  white-space: nowrap;
  .card-price {
    display: inline-block;
    font-size: 60px;
    font-family: 'Bebas_Neue_Pro', Impact, sans-serif;
    line-height: 0.9;
    font-weight: 700 !important;
    color: #bd622f !important;
  }
  .main-price-prefix {
    position: relative;
    display: inline-block;
    font-size: 30px;
  }
  .absolute-text {
    content: '';
    position: absolute;
    font-size: 11px !important;
    top: -5px;
    left: 4px;
    color: #bd622f !important;
  }
}
.over-text {
  position: relative;
  display: inline-block;
}
.tax {
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
.asterisk {
  font-size: 10px;
  position: absolute;
  top: 0;
}

.in-tax {
  font-size: 14px;
  font-weight: 400 !important;
  // position: absolute;
  // right: -5px;
  .in-tax-number {
    font-size: 22px !important;
    font-family: 'Bebas_Neue_Pro', Impact, sans-serif;
    line-height: 0.9;
    letter-spacing: -0.03em;
    font-weight: 500 !important;
  }
}
.card-detail {
  background-color: var(--v-secondary-base);
  padding: 9px 10px;
  .card-detail-chip {
    color: var(--v-accent-base);
    background: #fff;
    font-weight: 700;
    border-radius: 2px;
    padding: 1px 10px;
    margin-right: 2px;
    font-size: 14px;
  }
  .card-detail-chip-vertical {
    color: var(--v-accent-base);
    background: #fff;
    font-weight: 700;
    border-radius: 2px;
    font-size: 14px;
    margin: 4px 6px 0 6px;
  }
  .disabled {
    position: relative;
    .tag-child {
      font-weight: 400;
      &:after {
        content: '';
        width: 66px;
        height: 0;
        border-top: 1px solid;
        position: absolute;
        top: 12px;
        left: 30px;
        -webkit-transform: translate(-50%, -50%) rotate(-25deg);
        transform: translate(-50%, -50%) rotate(-25deg);
      }
    }
  }
}
.user-count {
  font-size: 20px;
  font-weight: 700;
  font-family: Roboto, Arial, Helvetica;
}
.user-count-unit {
  font-size: 14px;
  font-weight: 500;
}
.box-image-option {
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 90px;
  border: 2px solid #fff;
  color: #fff;
  text-align: center;
  line-height: 8px;
  border-radius: 6px;
}
.box-image-option-name {
  font-size: 13px;
}
.box-image-option-message {
  line-height: 1.4;
}
.box-image {
  position: relative;
}
</style>
