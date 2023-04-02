<template>
  <div class="main-tab">
    <v-card tile flat>
      <v-row no-gutters class="content">
        <v-col
          :cols="tab.cols"
          v-for="(tab, index) in tabs"
          :key="index"
          :class="[tab.class, 'tab-button']"
        >
          <v-card
            :href="tab.href"
            flat
            tile
            :color="tab.color"
            :class="[
              'tab',
              tab.tabClass,
              $isMatchUrl(tab.href) ? 'active' : '',
              'justify-center',
            ]"
          >
            <div :class="[tab.isDivider ? 'divider' : '', 'text-primaryText']">
              <v-icon
                v-if="tab.icon"
                size="18"
                color="darken"
                :class="['icon', tab.tabClass]"
              >
                {{ tab.icon }}
              </v-icon>
              <img
                v-else-if="tab.image"
                :src="tab.image"
                :class="['image-icon', tab.tabClass]"
                alt="タブアイコン"
              />
              {{ tab.name }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    tabs() {
      return [
        // 以下 PC
        {
          name: 'ホーム',
          href: this.$to('/'),
          class: 'hidden-sm-down',
          cols: 2,
        },
        {
          name: 'はじめての方へ',
          href: this.$to('/info/'),
          class: 'hidden-sm-down',
          cols: 2,
        },
        {
          name: 'お葬式の費用',
          href: this.$to('/plan/'),
          class: 'hidden-sm-down',
          cols: 2,
        },
        {
          name: '葬儀場を探す',
          href: this.$to('/area/'),
          class: 'hidden-sm-down',
          cols: 2,
        },
        {
          name: 'お客さまの声',
          href: this.$to('/voice/'),
          class: 'hidden-sm-down',
          cols: 2,
        },
        {
          name: '運営会社',
          href: this.$to('/company/'),
          class: 'hidden-sm-down',
          cols: 2,
        },
        // 以下 SP
        {
          name: 'はじめての方',
          href: this.$to('/info/'),
          class: 'hidden-md-up',
          cols: 3,
          image: '/img/icon/wakaba.svg',
          isDivider: true,
        },
        {
          name: 'お葬式の費用',
          href: this.$to('/plan/'),
          class: 'hidden-md-up',
          cols: 3,
          icon: 'fa-yen-sign',
          isDivider: true,
        },
        {
          name: '葬儀場を探す',
          href: this.$to('/area/'),
          class: 'hidden-md-up',
          cols: 3,
          icon: 'fa-location-dot',
        },
        {
          name: '緊急の方へ',
          href: this.$to('/area/'),
          class: 'hidden-md-up',
          cols: 3,
          icon: 'fa-triangle-exclamation',
          tabClass: 'emergency',
          color: 'error',
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.main-tab {
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  @include md-down {
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  }
  @include md-up {
    border-bottom: 1px solid #e5e5e5;
  }
  .tab {
    text-align: center;
    color: rgb(var(--v-theme-darken));
    height: 50px;

    @include md-down {
      font-size: 13px;
    }
    @include md-up {
      font-size: 18px;
      font-weight: 700;
    }
    .icon {
      margin-bottom: 1px;
    }
    .image-icon {
      margin-bottom: -3px;
      height: 18px;
    }
    .emergency {
      color: white !important;
      font-weight: bold;
    }
    &:active {
      border-bottom: solid 3px rgb(var(--v-theme-primary));
    }
  }
  .divider {
    border-right: solid #e5e5e5;
  }
}
</style>
