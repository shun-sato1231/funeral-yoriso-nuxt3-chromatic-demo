<template>
  <div class="benefit-area sp-content" v-if="city.benefit">
    <div class="content px-sp">
      <h2 class="accent-title px-3">{{ city.name }}の給付金情報（葬祭費）</h2>

      <div class="body-1 description">
        亡くなった方の住民票が{{
          city.name
        }}の方で、<b>国民健康保険に加入</b>している方（75歳以上は後期高齢者医療保険）の場合、葬儀費用の補助として、{{
          city.name
        }}
        から葬祭費として給付金を受け取ることができます。
      </div>

      <v-card class="detail py-4" color="secondary" flat width="100%">
        <v-row no-gutters>
          <v-col cols="12" sm="5" md="3" class="flex-box body-2">
            <div class="mx-auto flex-box">
              <v-icon color="primary" size="17" left>fa-circle</v-icon>
              受け取れる給付金
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="7"
            md="9"
            class="font-weight-bold text-h6 accent--text sp-center"
          >
            総額{{ $formatPrice(city.benefit.total_price) }}
          </v-col>
        </v-row>
      </v-card>

      <h3 class="text-h4">申請・問合せ先</h3>

      <!-- 給付金情報（葬祭費） -->
      <div class="table">
        <!-- 表 -->
        <MoleculesTable :items="items" cols="4" />
        <div class="caption">
          <div>※詳細については、各自治体の窓口でご確認ください。</div>
          <div v-if="city.benefit.investigated_on">
            ※本内容は{{
              $formatYMD(city.benefit.investigated_on)
            }}時点の内容に基づいて掲載しています。
          </div>
        </div>
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
  computed: {
    items() {
      let results = [];
      if (this.city.benefit.contact) {
        results.push({ title: '問合せ先', text: this.city.benefit.contact });
      }

      if (this.city.benefit.phone) {
        results.push({ title: '電話番号', text: this.city.benefit.phone });
      }
      if (this.city.benefit.url) {
        results.push({
          title: 'URL',
          text:
            this.city.name +
            'の給付金については<a target="_blank" href="' +
            this.city.benefit.url +
            '">こちら</a>',
        });
      }

      return results;
    },
  },
};
</script>

<style lang="scss" scoped>
.benefit-area {
  padding-top: 30px;
  .accent-title {
    @include md-down {
      font-size: 20px !important;
    }
  }
  .text-h4 {
    @include md-up {
      margin-top: 50px;
    }
    @include sm-down {
      margin-top: 15px;
      font-size: 20px !important;
    }
  }
  .table {
    @include md-up {
      margin: 20px 0;
    }
    @include sm-down {
      margin: 10px 0;
    }
  }
  .description {
    @include md-up {
      padding: 30px 0;
    }
    @include sm-down {
      padding: 10px 0;
      font-size: 16px !important;
    }
  }
  .detail {
    font-size: 18px;
    margin-right: 21px;
    position: relative;
  }
  .sp-center {
    @include xs {
      text-align: center;
    }
  }
  .accent--text {
    font-size: 23px;
    font-weight: 700;
  }
}
</style>
