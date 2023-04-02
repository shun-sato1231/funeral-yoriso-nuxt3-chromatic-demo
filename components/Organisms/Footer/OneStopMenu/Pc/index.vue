<template>
  <div>
    <div class="title">
      よりそうは終活や葬儀の不安をワンストップでサポートします
    </div>

    <v-row>
      <v-col
        cols="3"
        v-for="(oneStopMenu, oneStopMenuIndex) in oneStopMenus"
        :key="oneStopMenuIndex"
      >
        <div class="flex-box mb-2">
          <div class="flex-box service">
            <span class="title-detail">{{ oneStopMenu.title }}</span
            >のこと
            <v-chip
              color="primary"
              small
              class="ml-2"
              text-color="primaryText"
              v-if="selectMenuIndex === oneStopMenuIndex"
            >
              現在地
            </v-chip>
          </div>
          <div
            :class="
              oneStopMenuIndex < oneStopMenus.length - 1
                ? 'right'
                : 'right-none'
            "
          ></div>
        </div>

        <div
          v-for="(oneStopMenuItem, oneStopMenuItemIndex) in oneStopMenu.items"
          :key="oneStopMenuItemIndex"
          class="ml-4"
        >
          <v-icon left size="12"> fa-caret-right </v-icon
          ><a
            :href="
              oneStopMenuItem.isOtherDomain
                ? $to(oneStopMenuItem.href)
                : oneStopMenuItem.href
            "
            :target="$anchorTarget(oneStopMenuItem.href)"
            >{{ oneStopMenuItem.title }}</a
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectMenuIndex: 0,
      oneStopMenus: [
        {
          title: 'お葬式',
          items: [
            { href: '/sogi/category/sogi/', title: '基礎知識' },
            { href: '/sogi/', title: 'お葬式' },
            { href: '/sogi/ofuse/', title: '葬儀読経・戒名授与' },
          ],
        },
        {
          title: '法事・法要',
          items: [
            { href: '/sogi/category/hoji-hoyo/', title: '基礎知識' },
            {
              href: '/obosan/',
              title: '年忌法要',
            },
            {
              href: '/obosan/kaimyou/',
              title: '戒名授与',
            },
          ],
        },
        {
          title: '仏壇・仏具',
          items: [
            { href: '/sogi/category/butsudan/', title: '基礎知識' },
            {
              href: '/butsudan/ihai/',
              title: '位牌',
            },
            {
              href: '/butsudan/butsudan/',
              title: '仏壇',
            },
            {
              href: '/butsudan/butsugu/',
              title: '仏具',
            },
          ],
        },
        {
          title: '納骨・散骨',
          items: [
            { href: '/sogi/category/ohaka/', title: '基礎知識' },
            {
              href: 'https://ohaka.minrevi.jp/',
              title: '墓地・霊園',
              isOtherDomain: true,
            },
            {
              href: '/eitaikuyo/',
              title: '永代供養墓',
            },
            {
              href: '/kaiyo/',
              title: '海洋散骨',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-application a {
  color: #48484b;
  font-size: 14px;
  line-height: 1;
}
.title {
  font-size: 20px !important;
  margin-bottom: 2px;
  letter-spacing: -0.01em !important;
  font-family: Hiragino Kaku Gothic Pro, Meiryo,
    '\FF2D\FF33 \FF30\30B4\30B7\30C3\30AF', Osaka, Arial, Sans-serif !important;
}
.service {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background: rgb(var(--v-theme-accentLighten3));
  font-weight: 700;
  padding-left: 12px;
  min-width: 190px;
  .title-detail {
    font-size: 18px !important;
    font-weight: bold;
  }
}
.right {
  width: 0;
  height: 0;
  border-top: 20px solid white;
  border-bottom: 20px solid white;
  border-left: 20px solid rgb(var(--v-theme-accentLighten3));
}
.right-none {
  width: 0;
  height: 0;
  border: 20px solid rgb(var(--v-theme-accentLighten3));
}
</style>
