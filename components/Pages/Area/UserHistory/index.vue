<template>
  <div class="text-center hyper-link">
    <client-only>
      <a class="pa-2" :href="$to('/favorite/')"
        >検討リスト({{ funeralHomes.length }}件)</a
      >
      <a class="pa-2" :href="$to('/history/')"
        >閲覧履歴({{ funeralHomeHistories.length }}件)</a
      >
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      funeralHomes: 'ending/favorite/funeralHomes',
      funeralHomeHistories: 'view/funeralHomeHistories',
    }),
  },
};
</script>
