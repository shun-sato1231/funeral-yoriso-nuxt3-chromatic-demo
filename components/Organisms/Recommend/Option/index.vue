<template>
  <div class="px-4 mb-8 sp-content">
    <div class="justify-center">
      <svg
        class="mr-2"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.37822 1.23326V6.67883H15.0099V9.3212H9.37822V14.7668H6.62178V9.3212H0.990099V6.67883H6.62178V1.23326H9.37822ZM5.63168 5.72145V0.275879H10.3683V5.72145H16V10.2786H10.3683V15.7242H5.63168V10.2786H0V5.72145H5.63168Z"
          fill="#CE7B4C"
        />
      </svg>
      <p class="mb-0">合わせてよく選ばれるオプション</p>
    </div>
    <v-card
      class="option-wrapper"
      color="accentLighten4"
      :href="$to('/ofuse/')"
    >
      <div class="overflow-hidden">
        <img
          class="option-img"
          src="/img/common/sonae/img-obosan-kazokuso.webp"
          width="130"
          height="100%"
          alt="お坊さん"
        />
      </div>
      <div class="ml-2 font-weight-bold">
        <span class="caption"
          >お葬式と合わせて<span class="text-accent">約5割</span
          >の方が利用</span
        >
        <p class="mb-2">お葬式にお坊さんを手配</p>
        <div class="text-accent justify-center white number-area mx-auto">
          <span class="option-number">55,000</span
          ><span class="d-inline-block mt-3">円〜</span>
        </div>
      </div>
      <div class="option-icon">
        <v-icon color="white" size="8">fa-chevron-right</v-icon>
        <v-icon color="white" size="8">fa-chevron-right</v-icon>
      </div>
    </v-card>
    <p class="caption">
      ※火葬式にお坊さんを呼ぶ場合、<span class="font-weight-bold"
        >+2.2万円（税込）仏具付きプランを選択</span
      >する必要があります。
    </p>
  </div>
</template>
<script></script>
<style lang="scss">
.option-wrapper {
  display: flex;
  position: relative;
  border-radius: 5px;
  margin: 5px auto;
  .obosan-card {
    text-decoration: none !important;
  }
  .number-area {
    width: 150px;
  }
  .option-img {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .option-number {
    font-size: 32px;
    font-family: Bebas_Neue_Pro, Impact, sans-serif;
  }
  .option-icon {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 40px;
    height: 40px;
    .v-icon:first-child {
      position: absolute;
      right: 2px;
      bottom: 5px;
    }
    .v-icon:last-child {
      position: absolute;
      right: 8px;
      bottom: 5px;
    }
    &:before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 36px 36px;
      border-color: transparent transparent #ce7b4c;
    }
  }
}
</style>
