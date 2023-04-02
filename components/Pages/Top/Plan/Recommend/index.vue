<template>
  <div class="content">
    <h4>
      <i class="icon-ring" />プラスおすすめ<span class="sub-title pl-2"
        >お葬式に「お坊さん」を手配</span
      >
    </h4>
    <v-card color="accentLighten3" flat>
      <div class="pa-4 flex-box">
        <div class="text-right body-1">
          よりそうお葬式と合わせて<br /><strong
            >菩提寺のない方の約5割の方がご利用</strong
          >
        </div>
        <img
          width="64"
          height="65"
          src="/img/illust/yellow/illust_soryo.webp"
          alt="僧侶"
          class="mx-4"
        />

        <v-card elevation="0" class="soryo-card mr-4">
          <v-card-title class="pa-0">
            <span class="soryo-card-title mr-3">お坊さん 手配費用</span>
            <span class="soryo-card-price-area body-1"
              ><span class="soryo-card-price-total mr-1">総額</span
              ><span class="soryo-card-price number">55,000</span
              ><span>円</span>〜</span
            >
          </v-card-title>
        </v-card>

        <v-card
          color="primary"
          :href="$to('/sogi/ofuse/')"
          class="soryo-buttobn"
        >
          詳細をみる
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.sub-title {
  font-size: 80%;
}
.soryo-card {
  border: 1px solid #e7e0ba;
  padding: 15px;
  .soryo-card-title {
    font-size: 18px !important;
    line-height: 1.6;
    font-weight: 400;
  }
  .soryo-card-price-area {
    color: var(--v-accent-base);
    font-weight: 700 !important;
    vertical-align: initial;
    .soryo-card-price-total {
      font-size: 125%;
    }
    .soryo-card-price {
      font-size: 200%;
      line-height: 0.9;
      font-weight: 400 !important;
    }
  }
}
.soryo-buttobn {
  font-weight: 700;
  font-size: 18px;
  padding: 10px 14px;
}
</style>
