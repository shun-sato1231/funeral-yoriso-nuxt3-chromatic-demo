<template>
  <div>
    <div class="policy-area">
      <div class="policy-logo">
        <img
          width="150"
          height="27"
          src="/img/logo/logo_yoriso-ososhiki.svg"
          alt="よりそうお葬式"
        />
      </div>
      <h2 class="policy-title">
        <span class="policy-subtitle">わたしたちの</span>お葬式への考え
      </h2>
      <p class="policy-text accent-title body-1">
        お葬式で大切なことは、後悔のないお別れであること。故人さまに触れたり、話しかけたり、思い出話をして皆で一緒に偲ぶこと。
      </p>
      <img
        width="226"
        height="334"
        src="/img/common/lady/operator.webp"
        class="policy-operator"
        alt="オペレーター"
      />
    </div>
    <div class="policy-description my-6 body-1">
      形式にとらわれずに、家族が過ごした時間を想い、故人さまとの最後の時間を大切にしたお別れをしていただきたい。大規模でも豪華でもなく、令和の時代に合った<strong
        class="text-accent"
        >ちょうどよいサイズ感でよりそいあえるお葬式</strong
      >をご提供したい。それが、わたしたちが「よりそう家族葬」をおこなう理由です。
    </div>

    <div class="text-center">
      <v-btn
        color="primary"
        :href="$to('/sogi/info/#yorisoKodawari')"
        width="420"
        height="48"
        >よりそう家族葬へのこだわりを知る</v-btn
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.policy-area {
  height: 443px;
  padding: 156px 55px 55px;
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(50%, transparent),
      to(rgba(0, 0, 0, 0.75))
    ),
    url(/img/top/policy/img_yoriso_kodawari_main.webp);
  background-image: linear-gradient(
      180deg,
      transparent 50%,
      rgba(0, 0, 0, 0.75)
    ),
    url(/img/top/policy/img_yoriso_kodawari_main.webp);
  background-size: cover;
  background-position: bottom;
  color: #fff;
  position: relative;
  .policy-logo {
    display: block;
    width: 180px;
    padding: 8px 15px;
    background: #fff;
    border-radius: 100px;
    margin-bottom: 5px;
  }
  .policy-title {
    font-size: 44px;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 4px 4px rgb(0 0 0 / 25%), 0 -4px 4px rgb(0 0 0 / 25%);
  }
  .policy-subtitle {
    font-size: 32px;
  }
  .policy-text {
    padding-left: 15px;
    margin-top: 10px;
    text-shadow: 0 4px 4px rgb(0 0 0 / 25%), 0 -4px 4px rgb(0 0 0 / 25%);
    width: 450px;
    font-weight: 700;
  }
  .policy-operator {
    position: absolute;
    bottom: 0;
    right: 30px;
    width: 226px;
  }
}
.policy-description {
  font-weight: 400;
}
</style>
