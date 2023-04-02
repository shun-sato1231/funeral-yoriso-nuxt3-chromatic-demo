<template>
  <div class="mb-15">
    <p
      v-if="
        this.city.summary['funeral_home_review_count'] &&
        10 >= this.city.summary['funeral_home_review_count']
      "
      class="body-2 mb-2 pt-15 font-weight-bold"
    >
      ※
      日程や希望プランによりご案内できない場合があります。詳しくはお問合せください。
    </p>
    <p
      v-if="!this.city.summary['funeral_home_review_count']"
      class="body-2 mb-2 pt-15 font-weight-bold"
    >
      ※ 葬儀場をお探ししたのですが、見つかりませんでした。
    </p>
    <!-- クレジットカード払い -->
    <OrganismsBannerCreditcard class="pt-4 mb-2" width="180" height="27" />
    <div
      :class="[
        'sp-content description',
        isShowDescription ? 'description-hidden' : '',
      ]"
    >
      <div
        v-if="this.city.summary['funeral_home_review_count']"
        v-html="$md.render(city.description)"
        class="description-area"
      />
      <div v-else class="description-area">
        <p class="body-1">
          周辺で対応可能な葬儀場をお探ししますので、<span
            class="text-accent font-weight-bold"
            >まずは{{ phone }}までお電話ください。</span
          >
          24時間365日専門の相談員が待機しておりますので、事前のご相談もお急ぎの場合もお気軽にご相談ください。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    city: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters({
      phone: 'common/config/phone',
    }),
  },
  data() {
    return {
      isShowDescription: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.description {
  @include sm-down {
    margin-top: 10px;
  }
  @include xs {
    font-size: 16px;
  }
}
.description-area {
  font-size: 20px !important;
  line-height: 1.6;
}
:deep(.common-bold--orange) {
  color: #ce7b4c;
}
.emergency-button {
  -webkit-box-shadow: inset 0 -3px 1px 0 rgb(0 0 0 / 30%);
  box-shadow: inset 0 -3px 1px 0 rgb(0 0 0 / 30%) !important;
  .button-icon {
    border: 1px solid white;
    border-radius: 3px;
    width: 30px;
    height: 30px;
  }
  .icon {
    margin-top: -3px;
  }
}
</style>
