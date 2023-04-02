<template>
  <div>
    <v-card @click="nextClick(item)" class="my-5">
      <v-card-title class="header">
        <h3 class="title">
          <a :href="next(item)" class="px-2 py-1">{{ item.name }}</a>
        </h3>
        <v-spacer></v-spacer>
        <client-only>
          <v-tooltip v-model="isModal" bottom>
            <template v-slot:activator="{ props }">
              <v-btn class="favorite-text" text @click.stop="toggle(item)">{{
                isFavorite ? '検討中' : '検討する'
              }}</v-btn>
            </template>
            <span>検討リストに1件追加しました。</span>
          </v-tooltip>
        </client-only>
        <v-btn color="primary" large width="180" :href="next(item)"
          >詳細をみる</v-btn
        >
      </v-card-title>
      <div>
        <v-row no-gutters class="pa-5">
          <v-col cols="3">
            <img
              :src="imagePath(item)"
              :alt="item.name"
              width="200"
              height="133"
            />
          </v-col>
          <v-col cols="9" class="card">
            <div class="flex-box rating" v-if="item.review_count">
              <MoleculesRating :rating="item.review_rating" />
              <span class="px-2">|</span>
              <span>ご評価 {{ item.review_count }}件</span>
            </div>

            <div class="flex-box py-3">
              <div class="flex-box" v-if="trainAccess">
                <v-chip label outlined class="mr-3">最寄駅</v-chip>
                <span class="font-weight-bold nowrap"
                  >{{ trainAccess.station.name }}駅</span
                >
                <span class="mx-1 nowrap">から</span>
                <span class="font-weight-bold">{{ trainAccess.minutes }}</span>
                <span class="pr-6">分</span>
              </div>
              <v-chip label outlined class="mr-3">住所</v-chip>
              {{ address(item) }}
            </div>
            <div class="description" v-if="item.description">
              {{ item.description }}
            </div>
          </v-col>
          <v-col cols="12" class="pt-5">
            <div class="flex-box">
              <AtomsChip
                v-for="(baseTag, baseTagIndex) in baseTags"
                :key="baseTagIndex"
                class="px-2"
                :icon="baseTag.icon"
                :text="baseTag.name"
                :disabled="!item.tags.includes(baseTag.name)"
              />
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
    baseTags: {
      type: Array,
    },
    toggleFavorite: {
      type: Function,
    },
    isFavorite: {
      type: Boolean,
    },
    isFuneralHome: {
      type: Boolean,
      default: false,
    },
    trainAccess: {
      type: Object,
    },
  },
  data() {
    return {
      isModal: false,
    };
  },
  methods: {
    next(item) {
      return this.isFuneralHome
        ? this.$to('/saijyo/' + item.code + '/')
        : this.$to('/kasoba/' + item.code + '/');
    },
    nextClick(item) {
      location.href = this.next(item);
    },
    imagePath(item) {
      return item.images && item.images.length > 0
        ? this.$image(item.images[0].path)
        : '/img/common/noimage/funeral_home.webp';
    },
    toggle(item) {
      this.toggleFavorite(item);
      this.isModal = !this.isFavorite;
    },
    address(item) {
      return (
        item.prefecture_name +
        item.city_name +
        this.$replaceFullToHalf(item.town_name)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  border: 1px solid #ccc;
  box-shadow: inset 0 -5px 0 0 rgb(0 0 0 / 20%) !important;
}
.button-shadow {
  box-shadow: inset 0 -4px 0 rgb(84 84 88 / 40%);
}
.card {
  font-size: 16px;
}
.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  height: 3em;
}
.header {
  border-bottom: 2px dotted #ccc;
  .title {
    margin-left: 10px;

    a {
      font-weight: 700;
      color: var(--v-primaryText-base);
      font-size: 24px;
      text-decoration: none;
      border-left: 4px solid var(--v-primary-base);
    }
  }
  .favorite-text {
    display: inline-block;
    margin-right: 8px;
    font-size: 16px;
    color: #2e5985;
    text-decoration: underline;
  }
}
</style>
