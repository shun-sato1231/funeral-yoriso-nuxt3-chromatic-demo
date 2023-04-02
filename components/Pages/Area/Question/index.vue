<template>
  <div class="question-area sp-content content px-sp">
    <!-- よくある質問 -->
    <h2 class="accent-title px-3 mt-13">{{ city.name }}に関するよくある質問</h2>

    <!-- よくある質問リスト -->
    <OrganismsListQuestion :questions="questions" class="mt-5" />
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
    },
    questions: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.question-area {
  @include md-up {
    padding-top: 100px;
  }
  .accent-title {
    @include md-up {
      margin-bottom: 40px;
    }
    @include sm-down {
      font-size: 24px !important;
    }
  }
}
</style>
