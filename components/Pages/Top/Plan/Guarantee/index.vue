<template>
  <div class="content-box mx-auto">
    <h3 class="title text-center mb-4">よりそう満足保証（会員限定）</h3>
    <div class="">
      <p class="plan-label">お客さま満足度94%の実績</p>
      <p class="plan-text body-1">
        よりそうお葬式は価格も内容も明朗に提示し、安くても安心の葬儀を提供しております。お客さま満足度94%<span
          class="caption"
          >※1</span
        >を獲得しているからこそ、お葬式の品質には自信があります。だからこそ、万が一<strong
          >ご満足頂けなければプラン代金<span class="caption">※2</span
          >を全額返金</strong
        >いたします。
      </p>
    </div>
    <div class="l-contentBox__moduleFooter">
      <div class="flex-box">
        <div class="caption">
          <div>
            ※1 対象期間2021年11月〜2022年1月(満足・やや満足の合計) 自社調べ
          </div>
          <div>※2 火葬料金、オプションなどの追加された費用を除く</div>
        </div>
        <v-spacer />
        <div>
          <v-btn text height="18" class="px-0">
            <v-icon left class="ma-0">fa-plus</v-icon>
            <span class="text-decoration-underline hyper-link"
              >返金保証が受けられる条件</span
            >
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-box {
  margin-top: 60px;
  width: 768px !important;
}
.title {
  font-size: 28px !important;
  font-weight: 700;
}
.plan-label {
  background-color: rgb(var(--v-theme-accent)) !important;
  color: #fff;
  font-weight: 700;
  text-align: center;
  line-height: 1.4;
  font-size: 18px !important;
}
.plan-text {
  font-weight: 400;
}
</style>
