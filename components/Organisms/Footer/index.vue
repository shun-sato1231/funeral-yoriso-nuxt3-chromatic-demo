<template>
  <div>
    <v-divider />
    <!-- フッターメニュー -->
    <OrganismsFooterMenus class="hidden-sm-down" :menus="pcMenus" />
    <OrganismsFooterMenus class="hidden-md-up" :menus="spMenus" />

    <!-- ワンストップメニュー -->
    <OrganismsFooterOneStopMenuPc
      class="content mx-auto my-10 hidden-sm-down"
    />
    <OrganismsFooterOneStopMenuSp class="content mx-auto my-10 hidden-md-up" />

    <!-- ナビゲーション -->
    <OrganismsFooterNavigationPc class="hidden-sm-down" />
    <OrganismsFooterNavigationSp class="hidden-md-up" />

    <!-- 下スクロール時のバナー -->
    <OrganismsBannerSticky
      v-if="offsetTop || isScrollY"
      class="hidden-md-up fadeIn"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      funeralPlans: 'ending/funeral/funeralPlans',
      offsetTop: 'view/offsetTop',
      isScrollY: 'view/isScrollY',
    }),
    pcMenus() {
      return [
        {
          title: 'よりそうお葬式とは',
          items: [
            { href: '/urgency/', title: '緊急の方へ' },
            { href: '/info/', title: 'はじめての方へ' },
            { href: '/voice/', title: 'お客さまの声' },
            { href: '/case/', title: 'お葬式事例' },
            { href: '/company/', title: '運営会社' },
            { href: '/payment/', title: 'お支払方法' },
            { href: '/membership/', title: 'よりそう会員とは' },
            { href: '/company/guarantee/', title: 'プラン代金返金保証' },
            { href: '/newsrelease/', title: 'お知らせ' },
            { href: '/faq/', title: 'よくある質問' },
          ],
        },
        {
          title: '費用を知る',
          items: [
            {
              href: '/plan/',
              title: 'プラン詳細',
              items: this.funeralPlans.map((plan) => {
                return {
                  href: `/plan/${plan.code}/`,
                  title: `${plan.funeral_plan_type.name}：${plan.name}`,
                };
              }),
            },
            { href: '/syukyolist/', title: '各宗派のお葬式' },
            { href: '/ofuse/', title: 'お坊さんの手配' },
            { href: '/plan/jumbi/', title: 'お得な割引サービス' },
            { href: '/kyufukin/', title: '自治体の給付金制度' },
          ],
        },
        {
          title: '事前に備える',
          items: [
            { href: '/request/', title: '資料請求' },
            { href: '/jizenwari/', title: '事前割' },
            {
              href: '/request?view_type=fromDokuhonBnr',
              title: 'お葬式読本プレゼント',
            },
            { href: '/request/', title: 'よりそう会員登録' },
          ],
        },
        {
          title: 'お葬式の知識',
          items: [
            { href: '/category/nagare/', title: '流れ' },
            { href: '/category/hiyo/', title: '費用' },
            { href: '/category/sogi-manners/', title: 'マナー' },
            { href: '/category/fukuso/', title: '服装' },
            { href: '/category/sogi-shurui/', title: '種類・宗派' },
            { href: '/category/sogigo/', title: '葬儀後の流れ' },
          ],
        },
      ];
    },
    spMenus() {
      return [
        {
          title: 'よりそうお葬式とは',
          items: [
            { href: '/urgency/', title: '緊急の方へ' },
            { href: '/info/', title: 'はじめての方へ' },
            { href: '/voice/', title: 'お客さまの声' },
            { href: '/case/', title: 'お葬式事例' },
            { href: '/company/', title: '運営会社' },
            { href: '/payment/', title: 'お支払方法' },
            { href: '/membership/', title: 'よりそう会員とは' },
            { href: '/company/guarantee/', title: 'プラン代金返金保証' },
            { href: '/newsrelease/', title: 'お知らせ' },
            { href: '/faq/', title: 'よくある質問' },
          ],
        },
        {
          title: '費用を知る',
          items: [
            {
              href: '/plan/',
              title: 'プラン詳細',
            },
            ...this.funeralPlans.map((plan) => {
              return {
                href: `/plan/${plan.code}/`,
                title: `${plan.funeral_plan_type.name}：${plan.name}`,
              };
            }),
            { href: '/syukyolist/', title: '各宗派のお葬式' },
            { href: '/ofuse/', title: 'お坊さんの手配' },
            { href: '/plan/jumbi/', title: 'お得な割引サービス' },
            { href: '/kyufukin/', title: '自治体の給付金制度' },
          ],
        },
        {
          title: '事前に備える',
          items: [
            { href: '/request/', title: '資料請求' },
            { href: '/jizenwari/', title: '事前割' },
            {
              href: '/request?view_type=fromDokuhonBnr',
              title: 'お葬式読本プレゼント',
            },
            { href: '/request/', title: 'よりそう会員登録' },
          ],
        },
        {
          title: 'お葬式の知識',
          items: [
            { href: '/category/nagare/', title: '流れ' },
            { href: '/category/hiyo/', title: '費用' },
            { href: '/category/sogi-manners/', title: 'マナー' },
            { href: '/category/fukuso/', title: '服装' },
            { href: '/category/sogi-shurui/', title: '種類・宗派' },
            { href: '/category/sogigo/', title: '葬儀後の流れ' },
          ],
        },
        { title: '葬儀場・火葬場を探す', href: '/area/' },
      ];
    },
  },
};
</script>
<style lang="scss">
.fadeIn {
  animation: fadeIn 0.5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(200px);
    transition-duration: 0.7s;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
    transition-duration: 0.7s;
  }
}
</style>
