<template>
  <div class="mt-13" v-if="contents.length > 0">
    <!-- お葬式事例 -->
    <OrganismsTitleBottomLine>
      <div class="text-h6 hidden-md-up">
        <span class="accent-title-bottom"
          >{{ city.prefecture.name + city.name }}周辺の</span
        ><br /><span class="accent-title-bottom">お葬式事例</span>
      </div>
      <span class="accent-title-bottom hidden-sm-down"
        >{{ city.prefecture.name }}のお葬式事例</span
      >
    </OrganismsTitleBottomLine>

    <div class="hidden-sm-down">
      <!-- スライダー -->
      <OrganismsSlide :contents="contents" title="事例一覧" />
    </div>
    <div class="content">
      <div class="hidden-md-up sp-content">
        <PagesAreaSurveyAnswersList :contents="contents" />
      </div>
      <!-- もっと見るボタン -->
      <OrganismsSlideShowLink :href="$to('/case/')" class="sp-content pr-3" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
    },
    contents: {
      type: Array,
    },
    meta: {
      type: Object,
    },
  },
};
</script>
