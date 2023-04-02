<template>
  <div class="main-header">
    <div class="d-flex header-system-bar hidden-sm-down justify-center">
      <p class="text-white caption onestop">
        終活の不安にワンストップでサポートします
      </p>

      <v-btn
        class="body-4 ml-10 mr-1 px-0"
        text
        :href="$to('/membership/')"
        small
        flat
      >
        <v-icon color="primary" class="user-question" size="11"
          >fa-caret-right</v-icon
        >
        <span class="text-white">会員とは？</span>
      </v-btn>
      <v-btn
        class="body-4 px-0 ml-2"
        text
        small
        target="_blank"
        :href="'/login/'"
        flat
      >
        <v-icon color="primary" class="user-login" size="11"
          >fa-caret-right</v-icon
        >
        <span class="text-white">会員ログイン</span>
      </v-btn>
    </div>

    <div class="flex-box content main-content-area">
      <v-card flat :href="$to('/')" class="flex-box">
        <img
          src="/img/logo/logo_yoriso-ososhiki.svg"
          alt="よりそうお葬式"
          class="main-image"
        />
        <img src="/img/icon/icon_nhk.svg" alt="NHK" class="sub-image" />
      </v-card>

      <v-spacer />
      <div class="flex-box hidden-sm-down">
        <div class="d-flex">
          <div class="maincta-body-title bg-accentLighten4 rounded">
            <p class="font-weight-bold mb-0">無料相談ダイヤル</p>
            <p class="mb-0 caption caption-block">24時間365日対応</p>
          </div>

          <!-- 電話番号 -->
          <!-- <OrganismsButtonPhone is-header class="ml-2" /> -->
        </div>
        <div class="pb-2">
          <v-btn
            color="error"
            x-large
            class="btn-emergency"
            :href="$to('/urgency/')"
            height="52"
          >
            <v-icon left size="20" class="ml-2">fa-exclamation-triangle</v-icon>
            <span class="font-weight-bold mb-1 mr-1">緊急の方へ</span>
          </v-btn>
        </div>
      </div>

      <div class="flex-box hidden-md-up">
        <!-- メニュー -->
        <!-- <MoleculesButtonIcon href="/sogi/company/" title="運営会社">
          <svg
            class="header-tapItem__icon--company"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style="fill: rgb(var(--v-theme-darken)); width: 90%; height: 90%"
          >
            <path
              d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
            ></path>
          </svg>
        </MoleculesButtonIcon> -->

        <!-- メニュー -->
        <!-- <MoleculesButtonIcon
          title="メニュー"
          icon="fa-bars"
          @click="isRightDrawer = true"
        /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const viewStore = useViewStore();
    const serviceIndex = ref(0);

    const isRightDrawer = computed({
      get: () => viewStore.state.value.isRightDrawer,
      set: (value: boolean) => viewStore.updateIsRightDrawer(value),
    });

    const services = [
      {
        name: 'お葬式',
        href: '/',
      },
      {
        name: '法事・法要',
        href: '/obosan/',
      },
      {
        name: '仏壇・仏具',
        href: '/butsudan/',
      },
      {
        name: '永代供養墓',
        href: '/eitaikuyo/',
      },
      {
        name: '海洋散骨',
        href: '/kaiyo/',
      },
    ];

    return {
      serviceIndex,
      isRightDrawer,
      services,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-content-area {
  @include md-down {
    height: 65px;
  }
  @include md-up {
    height: 96px;
  }
}
.user-question {
  margin-right: 8px;
}
.user-login {
  margin-right: 8px;
}
.onestop {
  margin-right: 23px;
  letter-spacing: -0.005em !important;
}
.caption-block {
  letter-spacing: -0.03em !important;
}
.header-system-bar {
  background-color: rgb(var(--v-theme-darken));
  border-bottom: 2px solid rgb(var(--v-theme-primary));
  height: 28px;
  .v-btn {
    height: 26px;
    border-radius: 3px 3px 0 0;
  }
  .active {
    width: 98px;
    color: rgb(var(--v-theme-darken));
    background-color: rgb(var(--v-theme-primary));
    font-weight: 700;
  }
  .non-active {
    width: 95px;
    color: white;
    letter-spacing: -0.03em;
  }
}
.btn-emergency {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  width: 170px;
  box-shadow: inset 0 -3px 1px 0 rgb(0 0 0 / 30%);
  line-height: 48px;
  .v-icon {
    color: rgb(var(--v-theme-primary));
  }
}
.maincta-body-title {
  font-size: 14px;
  margin-bottom: 7px;
  padding: 5px 6px;
  line-height: 1.7;
}
.main-image {
  @include md-down {
    width: 150px;
    height: 27px;
  }
  @include md-up {
    width: 210px;
    height: 38px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
.sub-image {
  @include md-down {
    width: 45px;
    height: 36px;
  }
  @include md-up {
    width: 70px;
    height: 56px;
    margin-bottom: 10px;
    margin-left: 5px;
  }
}
.main-header {
  border-bottom: 1px solid #e5e5e5;
}
</style>
