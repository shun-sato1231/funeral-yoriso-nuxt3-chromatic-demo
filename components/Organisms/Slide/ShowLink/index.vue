<template>
  <div class="flex-box py-2">
    <v-spacer></v-spacer>
    <v-icon left size="17"> fa-caret-right </v-icon>
    <a :href="href">一覧をみる</a>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
    },
  },
};
</script>
