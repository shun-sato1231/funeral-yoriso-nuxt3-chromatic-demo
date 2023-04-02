<template>
  <div>
    <v-card tile flat color="accentLighten" class="py-10">
      <v-row no-gutters class="content mx-auto">
        <v-col cols="3" v-for="(menu, menuIndex) in menus" :key="menuIndex">
          <OrganismsFooterTitle :title="menu.title" />
          <div
            v-for="(item, itemIndex) in menu.items"
            :key="itemIndex"
            class="list-item"
          >
            <a :href="$to(item.href)">{{ item.title }}</a>

            <div v-if="item.items" class="mt-1">
              <div
                v-for="(childItem, childItemIndex) in item.items"
                :key="childItemIndex"
                :class="[
                  'tree',
                  childItemIndex === item.items.length - 1 ? 'last-child' : '',
                ]"
              >
                <a :href="$to(childItem.href)">{{ childItem.title }}</a>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" class="mt-10">
          <OrganismsFooterSearch />
        </v-col>
      </v-row>
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
};
</script>

<style lang="scss" scoped>
.list-item {
  margin-top: 3px;
}
a {
  color: #48484b;
  font-size: 14px;
}
.region-name {
  font-size: 14px;
  font-weight: 700;
}
.tree {
  position: relative;
  padding-top: 2px;
  padding-bottom: 5px;
  padding-left: 20px;
  margin-left: 10px;
  box-sizing: border-box;
  line-height: 20px;
  &:before {
    position: absolute;
    top: 15px;
    left: 0;
    width: 10px;
    height: 1px;
    margin: auto;
    content: '';
    background-color: #666;
  }
  &:first-child {
    &:after {
      position: absolute;
      top: 8px;
      bottom: 0;
      left: 0;
      width: 1px;
      height: 22px;
      content: '';
      background-color: #666;
    }
  }
  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 1px;
    height: 100%;
    content: '';
    background-color: #666;
  }
}
.last-child:after {
  height: 15px;
}
</style>
