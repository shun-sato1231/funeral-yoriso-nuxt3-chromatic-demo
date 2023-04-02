<template>
  <div>
    <v-card tile flat color="accentLighten" class="footer">
      <v-list color="accentLighten" class="py-0">
        <v-list-group
          v-for="(menu, menuIndex) in menus"
          :key="menuIndex"
          :append-icon="null"
          no-action
          color="primaryText"
          class="list-group"
        >
          <template v-slot:activator>
            <v-list-item
              :href="menu.href ? menu.href : undefined"
              class="my-2 list-title"
            >
              <v-list-item-title v-text="menu.title" />
            </v-list-item>
            <v-list-item-action>
              <v-btn icon>
                <v-icon v-if="menu.items" size="18">fa-chevron-down</v-icon>
                <v-icon v-else size="18">fa-chevron-right</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>

          <v-list-item
            v-if="menu.items"
            v-for="(item, itemIndex) in menu.items"
            :key="itemIndex"
            class="mx-4 px-0"
            :href="$to(item.href)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon size="14">fa-chevron-right</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
    },
  },
  computed: {
    isRightDrawer: {
      get() {
        return this.$store.state.view.isRightDrawer;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.list-group {
  border-bottom: 1px solid #ccc;
}
</style>
