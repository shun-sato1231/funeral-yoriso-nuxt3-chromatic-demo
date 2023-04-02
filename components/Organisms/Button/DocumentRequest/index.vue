<template>
  <div>
    <OrganismsButtonDocumentRequestPc
      class="hidden-sm-down"
      :title="title"
      :_class="_class"
    />
    <OrganismsButtonDocumentRequestSp class="hidden-md-up" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '無料で資料請求する',
    },
    _class: {
      type: String,
      default: 'px-3 py-2',
    },
  },
};
</script>
