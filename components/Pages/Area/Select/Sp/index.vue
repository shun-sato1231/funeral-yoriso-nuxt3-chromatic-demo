<template>
  <div>
    <v-card color="accentLighten" tile flat class="px-sp pt-4">
      <h2 class="flex-box text-h6 sp-content">
        <v-icon size="22" left>fa-building-columns</v-icon>
        <div>
          {{ city.prefecture.full_name }}{{ city.name }}
          <span class="body-3 font-weight-bold">周辺の式場一覧</span>
        </div>
      </h2>

      <!-- 式場 -->
      <PagesAreaSelectFuneralHome :city="city" />
    </v-card>

    <div class="py-5">
      <v-divider></v-divider>
    </div>

    <v-card color="accentLighten" tile flat class="px-sp pt-4">
      <h2 class="flex-box text-h6 sp-content">
        <v-icon size="22" left>fa-industry</v-icon>
        <div>
          {{ city.prefecture.full_name }}{{ city.name }}
          <span class="body-3 font-weight-bold">周辺の火葬場一覧</span>
        </div>
      </h2>

      <!-- 火葬場 -->
      <PagesAreaSelectFuneralCrematorium :city="city" />
    </v-card>
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
