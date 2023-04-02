<template>
  <div class="sticky-banner text-white text-center">
    <p class="mt-2 mb-0">
      <span class="font-weight-bold text-white">事前資料請求</span
      ><span class="caption">等で</span
      ><span class="font-weight-bold">お葬式</span
      ><span class="caption">が</span
      ><span class="font-weight-bold text-primary"
        >最大<span class="number">3</span>万円割引</span
      ><span class="caption">※</span>
    </p>
    <div class="button-wrap">
      <v-row no-gutters justify="center">
        <v-col cols="7" sm="5" class="px-2"><OrganismsButtonPhoneSp /> </v-col>
        <v-col cols="5" sm="4" class="px-2"
          ><OrganismsButtonDocumentRequestSp
        /></v-col>
      </v-row>
    </div>
    <p class="mt-1 small-caption">
      ※家族葬で申込前日までに資料請求とあんしん準備シート記入の場合 [会員限定]
    </p>
  </div>
</template>

<style lang="scss">
.sticky-banner {
  position: fixed;
  height: 110px;
  background-color: rgba(84, 84, 88, 0.85);
  bottom: 0;
  left: 0;
  width: 100%;
  .number {
    display: inline-block;
    line-height: 0.9;
    font-size: 24px;
  }
  .button-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .small-caption {
    font-size: 9px;
  }
}
</style>
