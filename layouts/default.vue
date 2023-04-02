<template>
  <v-app>
    <v-main>
      <!-- 右ドロワー -->
      <!-- <OrganismsDrawerRightDrawer /> -->
      <!-- ヘッダー -->
      <OrganismsHeader />
      <!-- メインコンテンツ -->
      <slot />
      <!-- フッター -->
      <!-- <OrganismsFooter /> -->
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { mdiAccount } from '@mdi/js';
import { onMounted, onUnmounted, ref } from 'vue';
const viewStore = useViewStore();
const { state } = viewStore;

const handleScroll = () => {
  viewStore.updateOffsetTop(window.scrollY);
};

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll);
    viewStore.updateInflowUrl(location.href);
    viewStore.initFuneralHomeHistories();
    //     store.dispatch("ending/favorite/initFavoriteFuneralHome");
  }
});
onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>
