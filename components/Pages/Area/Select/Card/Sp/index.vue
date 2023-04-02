<template>
  <div class="sp-content">
    <v-card @click="nextClick(item)" class="my-5 pb-2">
      <v-card-title class="header py-2">
        <h3 class="title">
          <a :href="next(item)" class="px-2 py-1">{{ item.name }}</a>
        </h3>
      </v-card-title>
      <div class="px-3 py-2 body-3">
        <div class="flex-box" v-if="item.review_count">
          <MoleculesRating :rating="item.review_rating" />
          <span class="px-2">|</span>
          <span>ご評価 {{ item.review_count }}件</span>
        </div>
        <div class="pa-2 body-4 my-2 access-area">
          <!-- 最寄駅 -->
          <div class="flex-box" v-if="trainAccess">
            <v-icon size="16" left>fa-train</v-icon>

            <span v-if="trainAccess.station.route">{{
              trainAccess.station.route.name
            }}</span>
            <span v-if="trainAccess.station" class="font-weight-bold"
              >{{ trainAccess.station.name }}駅</span
            >
            <span class="font-weight-bold">{{ trainAccess.point_name }}</span
            >から
            <span class="font-weight-bold px-1">{{ trainAccess.minutes }}</span>
            <span class="pr-6">分</span>
          </div>
          <!-- 住所 -->
          <div>
            <v-icon size="16" left>fa-location-dot</v-icon>{{ address(item) }}
          </div>
        </div>
        <div>
          <img :src="imagePath(item)" :alt="item.name" width="100%" />
        </div>

        <!-- 説明 -->
        <div v-if="item.description" class="pt-3">
          {{ item.description }}
        </div>

        <!-- タグ -->
        <v-row no-gutters class="tag-area mt-3">
          <v-col
            cols="4"
            v-for="(baseTag, baseTagIndex) in baseTags"
            :key="baseTagIndex"
            :class="[
              'flex-box pa-1 tag caption',
              item.tags.includes(baseTag.name) ? 'select-tag' : '',
            ]"
          >
            <div
              :class="[
                item.tags.includes(baseTag.name) ? 'font-weight-bold' : '',
              ]"
            >
              {{ baseTag.name }}
            </div>
            <v-spacer></v-spacer>
            <div class="check">
              <i
                v-if="item.tags && item.tags.includes(baseTag.name)"
                class="accent--text fa-regular fa-circle"
              />
              <div v-else>-</div>
            </div>
          </v-col>
        </v-row>

        <!-- 交通・行き方 -->
        <div v-if="trainAccess" class="access-detail-area pt-2">
          <h4>交通・行き方</h4>
          <div>
            <div class="flex-box font-weight-bold">
              <div class="icon">
                <v-icon size="16" left color="primary">fa-train</v-icon>
              </div>
              電車でお越しの方
            </div>
            <div class="flex-box py-1">
              <div class="pl-7">
                <span v-if="trainAccess.station.route">{{
                  trainAccess.station.route.name
                }}</span
                ><span class="">「{{ trainAccess.station.name }}駅」</span
                >から<span class="">徒歩{{ trainAccess.minutes }}</span
                ><span class="pr-6">分</span>
              </div>
            </div>
          </div>
        </div>

        <!-- お客さまのご評価 -->
        <div v-if="item.review?.count">
          <h4>お客さまのご評価</h4>
          <v-list three-line class="py-0 reviews">
            <v-list-item
              v-for="(review, reviewIndex) in item.reviews"
              :key="reviewIndex"
              class="pb-3"
            >
              <v-list-item-avatar class="mt-2">
                <v-img :src="review.user.image" alt="" />
              </v-list-item-avatar>

              <v-list-item-content class="body-4">
                <v-list-item-title class="flex-box">
                  <OrganismsChipFuneralPlan
                    :funeralPlan="review.funeral.funeral_plan"
                    small
                  />
                  <MoleculesRating small :rating="review.rating" />
                </v-list-item-title>
                <div class="pb-2 caption description">
                  <div>
                    施行地域：{{ item.prefecture_name + item.city_name }}
                  </div>
                  <div class="nowrap">
                    {{ $formatYM(review.funeral.created_at) }}
                  </div>
                </div>
                <div>{{ review.comment }}</div>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>

        <!-- 運営元 -->
        <v-card
          v-if="item.venrder"
          color="accentLighten5"
          class="pa-2 mt-3 body-4"
          flat
        >
          <div>
            運営元：<span class="font-weight-bold">{{
              item.venrder.name
            }}</span>
          </div>
          <div>
            <v-icon size="16" left>fa-location-dot</v-icon
            >{{ address(item.venrder) }}
          </div>
        </v-card>

        <v-row no-gutters class="mt-3">
          <v-col cols="9" class="pr-2">
            <!-- 電話をかける -->
            <OrganismsButtonPhoneSp />
          </v-col>
          <v-col cols="3">
            <v-card
              class="pa-3 text-center font-weight-bold justify-center"
              height="100%"
            >
              詳細へ
            </v-card>
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
    trainAccess: {
      type: Object,
    },
  },
  methods: {
    next(item) {
      return this.$to('/saijyo/' + item.code + '/');
    },
    nextClick(item) {
      location.href = this.next(item);
    },
    imagePath(item) {
      return item.images && item.images.length > 0
        ? this.$image(item.images[0].path)
        : '/img/common/noimage/funeral_home.webp';
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
.header {
  background-color: var(--v-accentLighten5-base);
  .title {
    a {
      font-weight: 700;
      color: var(--v-primaryText-base);
      font-size: 20px;
      text-decoration: none;
      border-left: 4px solid var(--v-primary-base);
    }
  }
  .favorite-text {
    display: inline-block;
    margin-right: 18px;
    font-size: 16px;
    color: #2e5985;
    text-decoration: underline;
  }
}
.access-area {
  background-color: var(--v-secondary-base);
  border: 1px solid #f3f0e4;
}
.access-detail-area {
  font-size: 14px;
  .icon {
    width: 30px;
  }
}
.tag-area {
  border-top: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
  .tag {
    border-bottom: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
  }
  .select-tag {
    background-color: var(--v-accentLighten5-base);
  }
  .check {
    width: 12px;
    text-align: center;
  }
}
h4 {
  margin: 9px 0;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  background-color: var(--v-accentLighten5-base);
}
.reviews {
  .description {
    display: flex;
  }
}
</style>
