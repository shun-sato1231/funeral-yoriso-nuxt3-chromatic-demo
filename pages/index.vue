<template>
  <p>nuxt3実装中</p>
  <p>{{ phone }}</p>
  <p>{{ formatYMD('19990101') }}</p>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useCommonConfigStore } from '@/stores/config';
const configStore = useCommonConfigStore();
const { initPhone } = configStore;
const { phone } = storeToRefs(configStore);
const { formatYMD } = useFormat();

initPhone();
</script>
