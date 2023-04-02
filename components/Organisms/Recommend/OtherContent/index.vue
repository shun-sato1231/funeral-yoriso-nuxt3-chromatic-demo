<template>
  <div class="sp-content mt-10">
    <h2 class="font-weight-bold title body-1 text-center py-1">
      そのほかのコンテンツを見る
    </h2>

    <v-card flat color="accentLighten4" class="py-3">
      <v-row no-gutters class="px-sp">
        <v-col
          cols="6"
          v-for="(item, index) in items"
          :key="index"
          class="pa-1"
        >
          <v-card class="text-center py-2" :href="$to(item.href)">
            <div class="pb-1">
              <v-img
                v-if="item.image"
                :src="item.image"
                :alt="item.title"
                height="28"
                contain
              ></v-img>
              <v-icon v-else-if="item.icon" color="primary">{{
                item.icon
              }}</v-icon>
            </div>
            <div class="body-4 font-weight-bold">{{ item.title }}</div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'よりそうお葬式とは',
          image: '/img/icon/icon_beginner_yellow.svg',
          href: '/info/',
        },
        {
          title: '費用・プランを知る',
          image: '/img/icon/icon-icn_sk_en_circle.svg',
          href: '/plan/',
        },
        {
          title: '近隣の葬儀場を探す',
          icon: 'fa-building-columns',
          href: '/area/',
        },
        {
          title: 'お急ぎの相談窓口',
          icon: 'fa-phone',
          href: '/urgency/',
        },
        {
          title: 'よくあるご質問',
          icon: 'fa-comment-dots',
          href: '/faq/',
        },
        {
          title: 'お得な3つの会員割',
          image: '/img/icon/icon_waribiki.webp',
          href: '/plan/jumbi/',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sp-content {
  .title {
    background-color: rgb(var(--v-theme-accentLighten2));
  }
}
</style>
