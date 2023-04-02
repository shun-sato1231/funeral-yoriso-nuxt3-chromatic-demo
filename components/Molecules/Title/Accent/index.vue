<template>
  <div class="mb-5">
    <h2>
      <div class="justify-center flex-box">
        <img
          :width="imageWidth"
          :height="imageHeight"
          :src="src"
          :alt="title"
          class="mr-4"
        />
        {{ title }}
      </div>
    </h2>
    <div class="text-center body-1 py-2">
      <span
        class="text-accent font-weight-bold"
        v-html="accent_text"
        v-if="accent_text"
      />
      <span v-html="description" v-if="description" />
      <div class="caption my-4" v-html="caption" v-if="caption" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
    imageWidth: {
      type: String,
      default: '104',
    },
    imageHeight: {
      type: String,
      default: '57',
    },
    title: {
      type: String,
    },
    accent_text: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
  },
};
</script>
