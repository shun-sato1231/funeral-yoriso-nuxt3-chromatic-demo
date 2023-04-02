<template>
  <v-navigation-drawer
    v-model="isRightDrawer"
    app
    right
    temporary
    width="350px"
  >
    <header class="d-flex justify-end">
      <v-icon class="pr-4 my-2" @click="isRightDrawer = false">fa-close</v-icon>
    </header>
    <div>
      <p
        class="darkest white--text py-1 pl-4 text-body-2 font-weight-bold mb-0"
      >
        お葬式をご検討中のお客様
      </p>
      <div class="d-flex justify-space-around row-content">
        <div class="col-content">
          <v-btn class="py-5 ml-2" :href="$to('/membership/')" text height="22">
            <v-icon class="mr-4" size="16">fa-caret-right</v-icon>
            <span class="black--text">よりそう会員とは</span>
          </v-btn>
        </div>
        <div class="col-content">
          <v-btn class="py-5 ml-2" text href="/login/" height="22">
            <v-icon class="mr-4" size="16">fa-caret-right</v-icon>
            <span class="black--text">会員ログイン</span>
          </v-btn>
        </div>
      </div>
      <div class="pa-4 request-content">
        <OrganismsButtonPhoneSp />
        <OrganismsButtonDocumentRequestSp class="mt-4" />
      </div>
      <OrganismsFooterMenusSp :menus="defaultMenus" />
      <p
        class="darkest white--text py-1 pl-4 text-body-2 font-weight-bold mb-0"
      >
        基本の知識をつけたい
      </p>
      <OrganismsFooterMenusSp :menus="categoryMenus" />
      <p
        class="darkest white--text py-1 pl-4 text-body-2 font-weight-bold mb-0"
      >
        その他のお悩みを解消したい
      </p>
      <OrganismsFooterMenusSp :menus="serviceMenus" />
      <div class="d-flex justify-center" @click="isRightDrawer = false">
        <v-icon class="pr-4 mt-0">fa-close</v-icon>
        <p class="pt-4">メニューを閉じる</p>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const viewStore = useViewStore();

    const funeralPlanMenus = [];
    // const funeralPlanMenus = computed(
    //   () => store.getters["ending/funeral/funeralPlanMenus"]
    // );
    // state.value.isRightDrawer

    const isRightDrawer = computed({
      get: () => viewStore.state.value.isRightDrawer,
      set: (value: boolean) => viewStore.updateIsRightDrawer(value),
    });

    const defaultMenus = computed(() => [
      {
        title: "よりそうお葬式とは",
        items: [
          { href: "/urgency/", title: "緊急の方へ" },
          { href: "/info/", title: "はじめての方へ" },
          { href: "/voice/", title: "お客さまの声" },
          { href: "/case/", title: "お葬式事例" },
          { href: "/company/", title: "運営会社" },
          { href: "/payment/", title: "お支払方法" },
          { href: "/company/guarantee/", title: "よりそう満足保証" },
          { href: "/newsrelease/", title: "お知らせ" },
          { href: "/faq/", title: "よくある質問" },
        ],
      },
      {
        title: "葬儀の費用",
        items: [
          {
            href: "/plan/",
            title: "プラン詳細",
            items: funeralPlanMenus,
          },
          { href: "/syukyolist/", title: "各宗派のお葬式" },
          { href: "/ofuse/", title: "お坊さんの手配" },
          { href: "/plan/jumbi/", title: "お得な割引サービス" },
          { href: "/kyufukin/", title: "自治体の給付金制度" },
        ],
      },
      {
        title: "事前に備える",
        items: [
          { href: "/request/", title: "資料請求" },
          { href: "/jizenwari/", title: "事前割" },
          { href: "/request/", title: "よりそう会員登録" },
          {
            href: "/request?view_type=fromDokuhonBnr",
            title: "お葬式読本プレゼント",
          },
        ],
      },
      {
        title: "ホームに戻る",
        href: "/sogi/",
      },
      {
        title: "葬儀場・火葬場を探す",
        href: "/sogi/area/",
      },
    ]);

    const categoryMenus = ref([
      {
        title: "お葬式の知識",
        items: [
          { href: "/category/nagare/", title: "流れ" },
          { href: "/category/hiyo/", title: "費用" },
          { href: "/category/sogi-manners/", title: "マナー" },
          { href: "/category/fukuso/", title: "服装" },
          { href: "/category/sogi-shurui/", title: "種類・宗派" },
          { href: "/category/sogigo/", title: "葬儀後の流れ" },
        ],
      },
    ]);

    const serviceMenus = ref([
      {
        title: "法事・法要",
        href: "/obosan/",
      },
      {
        title: "仏壇・仏具",
        href: "/butsudan/",
      },
      {
        title: "永代供養墓",
        href: "/eitaikuyo/",
      },
      {
        title: "海洋散骨",
        href: "/kaiyo/",
      },
      {
        title: "よりそうサービス一覧",
        href: "/corp/service/",
      },
    ]);

    return {
      funeralPlanMenus,
      isRightDrawer,
      defaultMenus,
      categoryMenus,
      serviceMenus,
    };
  },
});
</script>

<style lang="scss" scoped>
.row-content {
  border-bottom: 1px solid #e5e5e5;
}
.col-content {
  width: 100%;
  border-right: 1px solid #e5e5e5;
}
</style>
