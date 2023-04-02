<template>
  <div class="mt-15">
    <!-- タイトル -->
    <MoleculesTitleAccent
      src="/img/illust/yellow/illust_danjyo_senior.webp"
      title="お葬式・家族葬のお客さまへのインタビュー"
      accent_text="お客さま満足度94%"
      description='<span class="caption">※</span>お褒めの言葉からお叱りの言葉まですべて公開中'
      caption="※対象期間2021年11月〜2022年1月(満足・やや満足の合計) 自社調べ"
    />

    <!-- スライダー -->
    <OrganismsSlide
      :contents="contents"
      title="インタビュー一覧"
      :url="$to('/sogi/voice/')"
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
