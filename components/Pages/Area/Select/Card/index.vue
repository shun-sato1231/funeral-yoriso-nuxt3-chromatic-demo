<template>
  <div>
    <PagesAreaSelectCardPc
      :item="item"
      :baseTags="baseTags"
      class="hidden-sm-down"
      :toggleFavorite="toggleFavorite"
      :isFavorite="isFavorite"
      :isFuneralHome="isFuneralHome"
      :trainAccess="trainAccess"
    />
    <PagesAreaSelectCardSp
      :item="item"
      :baseTags="baseTags"
      class="hidden-md-up"
      :toggleFavorite="toggleFavorite"
      :isFavorite="isFavorite"
      :isFuneralHome="isFuneralHome"
      :trainAccess="trainAccess"
    />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
    baseTags: {
      type: Array,
    },
    toggleFavorite: {
      type: Function,
    },
    isFavorite: {
      type: Boolean,
    },
    isFuneralHome: {
      type: Boolean,
      default: false,
    },
    trainAccess: {
      type: Object,
    },
  },
};
</script>
