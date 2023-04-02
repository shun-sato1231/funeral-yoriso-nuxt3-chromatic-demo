<template>
  <v-card color="accentLighten" tile flat class="pt-10 pb-15">
    <div class="text-center py-4">
      <h2 id="area-select">
        <div class="justify-center flex-box">
          <v-icon size="28" color="primary" class="mr-4"
            >fa-building-columns</v-icon
          >
          {{ city.name }} の方がご利用できる葬儀場
        </div>
      </h2>
      <div class="caption">
        ※「検討する」をクリックすると、気になる葬儀場を保存できます
      </div>
    </div>

    <!-- 式場・火葬場 -->
    <PagesAreaSelectPcList class="content my-8" :city="city" />

    <!-- 閲覧履歴 -->
    <PagesAreaUserHistory class="pb-5" />
  </v-card>
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
