<template>
  <v-row class="rounded my-4">
    <v-col cols="2" class="white relative-wrapper rounded">
      <img
        src="/img/common/sonae/img-yoriso-lady.webp"
        width="150"
        height="205"
        alt="紹介する人"
        class="absolute-img"
      />
    </v-col>
    <v-col cols="10" class="white">
      <v-row class="mt-2">
        <v-col cols="7"
          ><p class="mb-2">
            <span class="strong-yoriso">よりそう会員</span>なら、資料請求などで
          </p>
          <p class="font-weight-bold discount-wrapper mb-0">
            お葬式費用が最大<span class="text-accent discount-number">3</span
            ><span class="text-accent">万円割引</span>
          </p>
        </v-col>
        <v-col cols="5">
          <a
            class="button-wrapper primary text-primaryText rounded pt-3 px-2 text-center mr-4"
            href="/sogi/request/"
          >
            <p class="mb-0">今すぐ資料請求をして</p>
            <p class="mb-0 button-strong">割引を受ける</p>
          </a>
        </v-col>
      </v-row>
      <v-row class="mb-2" dense>
        <v-col cols="7" class="d-flex align-center discount-detail">
          <p class="accentLighten3 rounded-pill py-1 px-3 mb-0">
            資料請求割 最大2万円<sup>※1</sup>
          </p>
          <img
            class="mx-1"
            src="/img/common/sonae/img-plus.webp"
            width="15"
            height="15"
            alt="+"
          />
          <p class="accentLighten3 rounded-pill py-1 px-3 mb-0">
            安心準備シート割 1万円<sup>※2</sup>
          </p>
        </v-col>
        <v-col cols="5"
          ><p class="discount-detail mb-0 text-center">
            資料請求と同時に会員登録できます
          </p></v-col
        >
      </v-row>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.relative-wrapper {
  position: relative;
  .absolute-img {
    content: '';
    position: absolute;
    top: -11px;
    left: 0;
  }
}
.strong-yoriso {
  position: relative;
  font-weight: bold;
  font-size: 22px;
  padding-top: 0.4em;
  background-position: top left -1px;
  background-repeat: repeat-x;
  background-size: 1em 0.3em;
  background-image: radial-gradient(
    0.08em 0.08em at center center,
    #ce7b4c,
    #ce7b4c 100%,
    transparent
  );
}
.discount-wrapper {
  font-size: 30px;
  height: 50px;
  line-height: 50px;
  text-shadow: 0 2px 2px rgb(0 0 0 / 10%);
  .discount-number {
    display: inline-block;
    margin: 0 4px;
    font-size: 70px;
    vertical-align: -10%;
    font-family: Bebas_Neue_Pro, Impact, sans-serif;
  }
}
.discount-detail {
  font-size: 14px;
}
.button-wrapper {
  display: block;
  border: 1px solid #ccc;
  box-shadow: 0 4px 4px rgb(0 0 0 / 15%), inset 0 -2px 0 rgb(0 0 0 / 20%);
  height: 100px;
  text-decoration: none;
  transition: all 0.3s;
  .button-strong {
    font-size: 30px;
    font-weight: bold;
  }
  &:hover {
    opacity: 0.6;
    filter: brightness(110%);
  }
}
</style>
