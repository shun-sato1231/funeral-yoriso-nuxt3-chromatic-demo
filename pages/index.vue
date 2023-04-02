<template>nuxt3実装中{{ phone }}</template>

<script lang="ts">
export default {
  setup() {
    const { phone, initPhone } = useCommonConfigStore();

    // クライアントでコンポーネントがマウントされた後にinitPhoneを呼び出す
    nextTick(async () => {
      initPhone();
    });

    return {
      phone: phone,
    };
  },
};
</script>
