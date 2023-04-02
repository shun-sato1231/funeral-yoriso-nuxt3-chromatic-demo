<template>
  <div class="content-box mx-auto mb-16">
    <h3 class="title text-center mb-4">選べる4つのお支払い方法</h3>
    <div class="description justify-center pb-6 flex-box">
      <div class="mr-3">お好きな方法をお選びいただけます</div>
      <img
        width="280"
        height="35"
        src="/img/plan/img_creditcard.webp"
        :alt="$const.view.creditcardText"
      />
    </div>
    <v-row no-gutters>
      <v-col cols="6" v-for="(payment, index) in payments" :key="index">
        <v-card
          tile
          outlined
          class="px-4 py-3 payment-select"
          :href="$to(payment.href)"
        >
          <div class="flex-box">
            <span class="icon-box">
              <v-icon color="primary" size="24" left>{{ payment.icon }}</v-icon>
            </span>
            {{ payment.name }}
            <v-spacer></v-spacer>
            <v-icon>fa-chevron-right</v-icon>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payments: [
        {
          name: 'クレジットカード払い',
          icon: 'fa-credit-card',
          href: '/payment/credit/',
        },
        {
          name: '葬儀ローン(最大36回)',
          icon: 'fa-chart-pie',
          href: '/payment/loan/',
        },
        {
          name: '後払い（コンビニ・金融機関）',
          icon: 'fa-store',
          href: '/newsrelease/all/news20191227-01/',
        },
        {
          name: '現金一括払い',
          icon: 'fa-yen-sign',
          href: '/payment/#simple_payment_cash',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content-box {
  margin-top: 60px;
  width: 768px !important;
}
.title {
  font-size: 28px !important;
  font-weight: 700;
}
.description {
  font-size: 18px !important;
  line-height: 1.6;
}
.payment-select {
  font-size: 18px;
}
.icon-box {
  width: 55px;
  text-align: center;
}
</style>
