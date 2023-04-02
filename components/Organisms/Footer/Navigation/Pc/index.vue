<template>
  <v-footer dark padless>
    <v-card flat tile class="darken pt-10 footer" width="100%">
      <div class="content">
        <div class="flex-box pb-9">
          <a
            class="white--text mr-4"
            :href="$to(menu.href)"
            v-for="(menu, menuIndex) in menus"
            :key="menuIndex"
            :target="$anchorTarget(menu.href)"
            >{{ menu.title }}</a
          >

          <v-spacer></v-spacer>
          <div>
            <v-card
              color="darken"
              flat
              href="https://www.yoriso.com/corp/"
              target="_blank"
            >
              <div class="flex-box">
                <v-spacer></v-spacer>
                <span class="logo-name mt-2">株式会社よりそう</span>
                <div>
                  <v-img
                    src="/img/logo/yoriso--white.svg"
                    alt=""
                    width="82px"
                    height="26px"
                  />
                </div>
              </div>
            </v-card>

            <div class="copyright">
              copyright © {{ new Date().getFullYear() }},Yoriso.Co.Ltd. All
              Rights Reserved.
            </div>
          </div>
        </div>

        <p class="caption lighten--text footer-caption">
          「{{
            city?.name ? city.name : ''
          }}で葬儀・家族葬をおこなえる斎場・火葬場一覧【よりそうお葬式】」こちらのページは「よりそうお葬式」が運営しています。「よりそうお葬式」はご家族・親族中心でゆっくりお見送りができる小規模の家族葬をセットプランでご提供しています。お葬式に関わるご依頼やご相談は24時間365日無料で承っておりますのでお気軽にご連絡ください。経験豊かな専門の相談員がどんな些細なことでも親身にご相談に乗らせていただきます。
        </p>
      </div>
    </v-card>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      city: 'common/area/city',
    }),
  },
  data() {
    return {
      menus: [
        { title: '運営会社', href: '/company/' },
        { title: '特定商取引法表記', href: '/company/tokushoho/' },
        {
          title: 'プライバシーポリシー',
          href: 'https://www.yoriso.com/corp/privacy_policy/',
        },
        {
          title: '利用規約',
          href: 'https://www.yoriso.com/corp/terms_of_use/',
        },
        {
          title: '福利厚生利用',
          href: 'https://www.yoriso.com/sogi/company/benefit/',
        },
        {
          title: '提携葬儀社の募集',
          href: 'https://www.yoriso.com/sogi/company/tieup/',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-application a {
  font-size: 14px;
}
.logo-name {
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  line-height: 1;
  margin-right: 0.5em;
  color: white;
}
.copyright {
  color: white;
  font-size: 8px;
  margin-top: 10px;
}
.footer {
  padding-bottom: 120px;
}
.footer-caption {
  line-height: 1.5;
}
</style>
