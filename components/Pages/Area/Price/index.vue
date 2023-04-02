<template>
  <div class="content pt-13 pb-5" v-if="city.city_funeral_survey">
    <h2 class="accent-title px-3">
      ご存知ですか？{{ city.name }}の平均葬儀費用
    </h2>
    <div class="body-1 pt-3 pb-5">
      お葬式の費用は「絶対にかかる費用」と「希望に応じてかかる費用」の2つに分けられます。
    </div>

    <h3 class="subtitle">お葬式費用の仕組み</h3>
    <v-img
      src="https://cdn.yoriso.com/sogi/renewal/images/areacity/img-hiyou-shikumi.png"
      alt="お葬式費用の仕組み"
      class="my-10"
    />

    <h3 class="subtitle">
      {{ city.prefecture.full_name }}{{ city.name }} の平均葬儀費用
    </h3>
    <div class="body-1 pb-5">
      よりそうお葬式なら、<b class="accent--text">全国平均の半額程度</b
      >でお葬式をあげられます
    </div>
    <PagesAreaPriceAverage :city="city" />

    <!-- お葬式の費用詳細 -->
    <PagesAreaPriceDetail :city="city" @click="$emit('click')" />
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
    },
  },
};
</script>
