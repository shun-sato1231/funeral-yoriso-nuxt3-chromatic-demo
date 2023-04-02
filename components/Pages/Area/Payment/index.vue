<template>
  <div class="payment-area sp-content my-7 px-sp">
    <h2 class="accent-title">選べる4つのお支払い方法</h2>
    <img
      src="/img/plan/img_creditcard.webp"
      :alt="$const.view.creditcardText"
      width="305"
      height="38"
      contain
      class="mt-4 mb-2 d-block mx-auto"
    />

    <v-list>
      <v-divider />
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :href="$to(item.url)"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon size="16"> fa-chevron-right </v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider />
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { url: '/payment/credit/', title: 'クレジットカード払い' },
      { url: '/payment/loan/', title: 'ローン払い（最大36回）' },
      { url: '/newsrelease/all/news20191227-01/', title: '後払い' },
      { url: '/payment/', title: '現金払い' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.payment-area {
  .accent-title {
    @include sm-down {
      font-size: 24px !important;
    }
  }
}
</style>
