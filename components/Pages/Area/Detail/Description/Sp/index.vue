<template>
  <div class="mb-15">
    <!-- 実績数 -->
    <PagesAreaDetailCount :city="city" />
    <p
      v-if="
        this.city.summary['funeral_home_review_count'] &&
        10 >= this.city.summary['funeral_home_review_count']
      "
      class="caption my-4 font-weight-bold"
    >
      ※
      日程や希望プランによりご案内できない場合があります。詳しくはお問合せください。
    </p>
    <p
      v-if="!this.city.summary['funeral_home_review_count']"
      class="caption my-4 font-weight-bold"
    >
      ※ 葬儀場をお探ししたのですが、見つかりませんでした。
    </p>
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
        <p class="body-2">
          周辺で対応可能な葬儀場をお探ししますので、<span
            class="text-accent font-weight-bold"
            >まずは{{ phone }}までお電話ください。</span
          >
          24時間365日専門の相談員が待機しておりますので、事前のご相談もお急ぎの場合もお気軽にご相談ください。
        </p>
      </div>
    </div>
    <v-card
      color="error"
      dark
      class="sp-content mx-auto emergency-button px-3 py-1 mb-8 mt-8 hidden-md-up flex-box"
      @click="isShowModal = true"
    >
      <div class="my-2">
        <div class="text-h6">お亡くなり・ご危篤の場合</div>
        <div class="body-4">病院まで1時間程度でお迎えにあがります</div>
      </div>
      <v-spacer></v-spacer>
      <div class="button-icon text-center">
        <v-icon class="icon" size="14">fa-plus</v-icon>
      </div>
    </v-card>
    <v-dialog v-model="isShowModal" fullscreen
      ><MoleculesPassed @close-modal="isShowModal = false" />
    </v-dialog>
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
      isShowModal: false,
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
