<template>
  <div>
    <MoleculesSlideGroup
      :items="contents"
      #default="{ item: item }"
      height="250"
    >
      <v-card height="99%" class="mx-2" :href="$to(item.href)">
        <v-card class="image-area" flat>
          <img
            :src="item.src"
            :alt="item.imageAlt ? item.imageAlt : item.title + item.description"
            height="155"
          />
        </v-card>
        <v-card-text v-if="item.title || item.description" class="pa-2">
          <h3 v-if="item.title" class="card-title py-1" v-text="item.title" />
          <div v-if="item.description" class="description">
            {{ item.description }}
          </div>
          <div class="card-comment">
            {{ item.comment }}
          </div>
        </v-card-text>
      </v-card>
    </MoleculesSlideGroup>

    <div class="all-button" v-if="url">
      <v-btn class="" color="primary" :href="url" width="420" large
        >{{ title }}をみる</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
    },
    title: {
      type: String,
    },
    url: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-height: 1.6;
  overflow: hidden;
  font-size: 16px !important;
  font-weight: 700 !important;
  text-decoration: underline;
  -webkit-line-clamp: 2;
  height: 320%;
}
.card-comment {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 表示する行数を指定 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
}
.image-area {
  height: 155px;
  position: relative;
  font-weight: 400;
  display: block;
}
.accent-text {
  position: absolute;
  bottom: 5px;
  width: 100%;
  text-align: center;
}
.all-button {
  text-align: center;
  padding: 70px 0;
}
.description {
  font-size: 12px;
  -webkit-line-clamp: 3;
  height: 480%;
}
</style>
