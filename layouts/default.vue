<template>
  <v-app>
    <v-main>
      <v-icon :icon="mdiAccount"></v-icon>
      <VTextField
        :prepend-inner-icon="mdiAccount"
        id="password"
        name="password"
        type="password"
      />
      <!-- 右ドロワー -->
      <!-- <OrganismsDrawerRightDrawer /> -->
      <!-- ヘッダー -->
      <!-- <OrganismsHeader /> -->
      <!-- メインコンテンツ -->
      <div>{{ state.count }}</div>
      <div>{{ state.inflowUrl }}</div>
      <v-btn @click="counterStore.countUp">countUp</v-btn>

      <v-btn @click="counterStore.setCount(0)">reset</v-btn>
      <slot />
      <!-- フッター -->
      <!-- <OrganismsFooter /> -->
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { mdiAccount } from "@mdi/js";
import { onMounted, onUnmounted, ref } from "vue";
const counterStore = useCounterStore();
const { state } = counterStore;

const handleScroll = () => {
  //   store.dispatch("view/updateOffsetTop", window.scrollY);
};

onMounted(() => {
  if (process.client) {
    window.addEventListener("scroll", handleScroll);
    counterStore.updateInflowUrl("test");

    //     store.dispatch("view/updateInflowUrl");
    //     store.dispatch("ending/favorite/initFavoriteFuneralHome");
    //     store.dispatch("view/initFuneralHomeHistories");
  }
});
onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("scroll", handleScroll);
  }
});
</script>
