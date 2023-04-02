<template>
  <div v-if="funeralReviews.length > 0" class="content">
    <!-- お客さまのご評価 -->
    <OrganismsTitleBottomLine>
      <div class="text-h6 hidden-md-up">
        <span class="accent-title-bottom">{{ city.name }}の式場に関する</span
        ><br /><span class="accent-title-bottom">お客さまのご評価</span>
      </div>
      <span class="accent-title-bottom hidden-sm-down"
        >{{ city.name }}のお客さまのご評価</span
      >
    </OrganismsTitleBottomLine>

    <!-- レビュー一覧 -->
    <PagesAreaReviewList :funeralReviews="funeralReviews" />

    <div>
      <!-- 一覧をみるボタン -->
      <OrganismsSlideShowLink
        :href="
          $to(
            '/sogi/area/' + city.prefecture.code + '/' + city.code + '/review/'
          )
        "
        class="pr-3 sp-content"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
    },
    funeralReviews: {
      type: Array,
    },
    funeralReviewMeta: {
      type: Object,
    },
  },
};
</script>
