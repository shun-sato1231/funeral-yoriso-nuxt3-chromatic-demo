<template>
  <div>
    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="primary"
      grow
      class="tab-area"
      slider-size="0"
    >
      <v-tab
        v-for="(item, index) in items"
        :key="index"
        active-class="active-tab"
        class="tab"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(item, index) in items" :key="index">
        <component :is="item.component" :city="city" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
    },
  },
  data() {
    return {
      tab: null,
      items: [
        {
          title: '式場を探す',
          component: 'PagesAreaSelectFuneralHome',
        },
        {
          title: '火葬場を探す',
          component: 'PagesAreaSelectFuneralCrematorium',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.tab-area {
  border-bottom: solid rgb(var(--v-theme-primary)) 5px;
  .tab {
    color: rgb(var(--v-theme-darken)) !important;
    font-weight: 700;
    font-size: 20px;
    border-radius: 3px 3px 0px 0px;
    background-color: white;
    margin: 0px 12px;
    border: 1px solid #ccc;
    border-bottom: none;
  }
  .active-tab {
    background-color: rgb(var(--v-theme-primary)) !important;
    border: none;
  }
}
.theme--light.v-tabs-items {
  background-color: transparent !important;
}
</style>
