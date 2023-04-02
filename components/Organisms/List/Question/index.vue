<template>
  <div class="list">
    <v-list-group
      v-for="(question, index) in questions"
      :key="index"
      color="primaryText"
      class="list-group py-4"
    >
      <template v-slot:activator>
        <v-list-item-avatar>
          <v-avatar color="accentLighten3" size="40">
            <span class="primaryText--text icon">Q</span>
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-content class="mr-2 question">
          {{ question.question }}
        </v-list-item-content>
      </template>

      <v-list-item class="py-2 px-0">
        <v-list-item-avatar class="avater mt-0">
          <v-avatar color="primary" size="36">
            <span class="primaryText--text icon">A</span>
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-content class="mr-2">
          <div v-html="$md.render(question.answer)" />
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  font-size: 22px;
  font-family: Roboto, Arial, Helvetica;
}
.question {
  padding: 15px 0px;
}
:deep(.common-link) {
  color: #2e5985;
}
.list-group {
  border-top: 1px dashed #ccc;
}
.list {
  border-bottom: 1px dashed #ccc;
}
.avater {
  align-items: start;
  align-self: start;
}
.list-group ::v-deep .v-list-group__header {
  padding: 0;
}
</style>
