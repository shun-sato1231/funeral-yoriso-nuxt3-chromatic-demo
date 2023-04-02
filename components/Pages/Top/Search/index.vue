<template>
  <div>
    <!-- タイトル -->
    <MoleculesTitleLine
      src="/img/illust/yellow/illust_sogisha.webp"
      title="近隣の葬儀場をご案内"
      chip-text="葬儀場を探す"
      description='厳選した<span class="font-weight-bold text-accent">4,000ヶ所</span>からご希望にあった場所をご利用ください'
      imageWidth="95"
      imageHeight="54"
    />

    <div class="text-center mt-15 mb-10">
      <img
        width="768"
        height="77"
        src="/img/top/search/img_top_saijo_pc.webp"
        alt="葬儀場写真"
      />
    </div>

    <!-- 都道府県一覧 -->
    <OrganismsMapPrefecture class="content" />

    <!-- 郵便番号から探す -->
    <OrganismsInputSearchPostCode class="content py-4" color="#f7f7f7" />
  </div>
</template>

<script>
export default {
  props: {
    funeralPlans: {
      type: Array,
    },
  },
};
</script>
