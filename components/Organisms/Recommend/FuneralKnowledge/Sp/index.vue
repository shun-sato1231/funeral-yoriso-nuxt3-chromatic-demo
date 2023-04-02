<template>
  <div class="sp-content mt-5">
    <!-- お葬式の知識 -->
    <v-card color="accentLighten4 pt-5 pb-8" flat class="px-sp">
      <h2 class="title text-center">
        <v-img
          src="https://cdn.yoriso.com/sogi/renewal/images/common/illust/yellow/illust_benkyou.png"
          alt=""
          height="50"
          contain
        />
        <v-img
          class="icon"
          src="/img/icon/icon-beginner.svg"
          alt=""
          height="30"
          contain
        />
        <span class="body-1 font-weight-bold">お葬式の知識をつける</span>
      </h2>

      <v-card class="mx-auto mt-3 mb-5">
        <v-row no-gutters>
          <v-col
            cols="6"
            v-for="(contentCategory, index) in funeralCategories"
            :key="index"
          >
            <v-card
              flat
              tile
              :href="
                $to(
                  contentCategory.code.indexOf('kazokuso') === -1
                    ? '/category/'
                    : '/article/' + contentCategory.code + '/'
                )
              "
            >
              <div class="flex-box funeral-knowledge-button py-4 px-5">
                <span> {{ contentCategory.name }}</span>
                <v-spacer></v-spacer>
                <v-icon size="14">fa-chevron-right</v-icon>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>

      <div class="mx-auto py-2">
        <h3 class="body-1 font-weight-bold text-center mb-3">
          お葬式以外のお悩みも解決
        </h3>
        <!-- リンク -->
        <MoleculesListLink :items="otherCategories" class="body-3">
          <template #default="{ item: contentCategory }">
            <a
              style="line-height: 2"
              :href="$to('/category/' + contentCategory.code + '/')"
              class="nowrap"
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
          this.$const.db.common.contentCategories.funeral.id
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
.title {
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  position: relative;
  .icon {
    width: auto;
    height: 30px;
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
  }
}
.funeral-knowledge-button {
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>
