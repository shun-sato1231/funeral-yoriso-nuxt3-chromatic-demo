<template>
  <div class="content mt-8">
    <!-- お葬式の知識 -->
    <v-card color="accentLighten3 content-wrapper" flat>
      <h2 class="content-title">
        <div class="flex-box justify-center">
          <img
            width="20"
            height="32"
            src="/img/icon/icon-beginner.svg"
            alt="初心者マーク"
            class="mr-2"
          />
          <span class="small">初心者の方でも大丈夫。</span
          >お葬式の知識はこちらから
        </div>
      </h2>

      <v-card class="content-area funeral-knowledge-area mx-auto my-4">
        <v-row no-gutters>
          <v-col
            cols="4"
            v-for="(contentCategory, index) in funeralCategories"
            :key="index"
          >
            <v-card
              outlined
              tile
              :href="$to('/category/' + contentCategory.code + '/')"
            >
              <div class="flex-box funeral-knowledge-button py-4 px-5">
                <div class="icon" v-if="contentCategory.icon">
                  <v-icon size="20" color="primary">
                    {{ contentCategory.icon }}</v-icon
                  >
                </div>
                <span> {{ contentCategory.name }}</span>
                <v-spacer></v-spacer>
                <v-icon size="14">fa-chevron-right</v-icon>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <div class="content-area mx-auto py-2 other-knowledge-area">
        <h3 class="title py-2">お葬式以外のお悩みも解決</h3>
        <!-- リンク -->
        <MoleculesListLink :items="otherCategories">
          <template #default="{ item: contentCategory }">
            <a
              class="hyper-link"
              :href="$to('/category/' + contentCategory.code + '/')"
              >{{ contentCategory.name }}</a
            >
          </template>
        </MoleculesListLink>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    contentCategories: {
      type: Array,
    },
  },
  computed: {
    funeralCategories() {
      return this.contentCategories?.filter(
        (contentCategory) =>
          contentCategory.parent_id ===
            this.$const.db.common.contentCategories.funeral.id &&
          [
            'hiyo',
            'nagare',
            'sogi-shurui',
            'fukuso',
            'sogi-manners',
            'sogigo',
          ].includes(contentCategory.code)
      );
    },
    otherCategories() {
      return this.contentCategories?.filter(
        (contentCategory) =>
          contentCategory.parent_id === null &&
          contentCategory.id !==
            this.$const.db.common.contentCategories.funeral.id
      );
    },
  },
};
</script>

<!-- FuneralKnowledge -->
<style lang="scss" scoped>
.content-title {
  font-size: 24px;
  font-weight: 700;
  .small {
    font-size: 80%;
    font-weight: inherit;
  }
}
.content-area {
  max-width: 820px;
}
.content-wrapper {
  padding: 35px 90px;
}
.funeral-knowledge-area {
  .funeral-knowledge-button {
    font-size: 20px;
    font-weight: 700;
  }
  .icon {
    width: 40px;
  }
}
.other-knowledge-area {
  .title {
    font-weight: 700 !important;
    vertical-align: initial;
    font-size: 18px !important;
  }
}
</style>
