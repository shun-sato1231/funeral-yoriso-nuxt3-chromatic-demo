<template>
  <v-card
    class="button-area"
    :style="'border-color: rgb(' + rgbColor + ')'"
    :href="href"
  >
    <v-list class="pa-3" :color="'rgb(' + rgbColor + ', 0.05)'" tile>
      <v-list-item>
        <img
          v-if="src"
          :src="src"
          :alt="title"
          width="40px"
          height="56"
          class="mr-5"
        />
        <v-icon v-else-if="icon" size="45" class="pr-3">{{ icon }}</v-icon>

        <v-list-item-content>
          <v-list-item-title class="title">
            {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle class="description pt-1">
            {{ description }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-icon size="24" class="mr-2" :color="'rgb(' + rgbColor + ')'"
          >fa-chevron-right</v-icon
        >
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    href: {
      type: String,
    },
    src: {
      type: String,
    },
    icon: {
      type: String,
    },
    rgbColor: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-weight: 700 !important;
  font-size: 24px !important;
}
.description {
  font-size: 14px !important;
}
.button-area {
  border: solid 3px;
}
</style>
