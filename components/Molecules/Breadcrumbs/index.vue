<template>
  <div>
    <div class="flex-box breadcrumbs caption">
      <v-icon size="11" class="mr-1 icon" v-if="breadcrumbs">fa-home</v-icon>
      <v-breadcrumbs
        :items="breadcrumbs"
        v-if="breadcrumbs"
        class="pa-0 breadcrumbs-wrap"
      >
        <template v-slot:divider>
          <v-icon size="6">fa-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <v-spacer />
      <!-- トップに戻るボタン -->
      <MoleculesButtonTop v-if="isTopButton" class="hidden-sm-down" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
    },
    isTopButton: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.v-application ul {
  display: inline;
}
.breadcrumbs {
  white-space: nowrap;
  overflow: auto;
  @include sm-down {
    background-color: var(--v-accentLighten-base);
    border-bottom: 1px solid #e5e5e5;
    padding: 0 6px;
  }
  @include sm-up {
    padding: 12px 0;
  }
}
.breadcrumbs-wrap {
  margin-top: 1px;
}
.breadcrumbs ::v-deep .v-breadcrumbs__item {
  font-size: 12px;
}
.breadcrumbs ::v-deep .v-breadcrumbs__divider {
  padding: 0 6px;
}
</style>
