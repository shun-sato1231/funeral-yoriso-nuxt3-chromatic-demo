<template>
  <div>
    <!-- タイトル -->
    <MoleculesTitleAccent
      src="/img/illust/yellow/illust_saidan.webp"
      title="全国のお葬式・家族葬事例"
      accent_text="年間相談実績50,000件以上！"
      description="過去事例を写真でご紹介"
      imageWidth="127"
      imageHeight="57"
    />

    <!-- スライダー -->
    <OrganismsSlide
      :contents="contents"
      title="事例一覧"
      :url="$to('/sogi/case/all/?pn=1')"
    />
  </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
    },
  },
};
</script>
