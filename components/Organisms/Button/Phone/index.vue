<template>
  <v-card-actions :style="'width:' + width + 'px'" class="pa-0">
    <v-scale-transition>
      <a
        v-if="phone"
        class="btn-phone btn-phone-emergency error--text"
        :href="'tel:' + phone"
      >
        <v-icon size="26" :color="isCta ? 'accentDarken' : 'error'" class="mb-2"
          >fa-phone</v-icon
        >
        <span
          :class="[
            isHeader ? 'tel-number-header' : 'tel-number-footer',
            { 'is-cta': isCta },
          ]"
          >{{ phone }}</span
        >
      </a>
    </v-scale-transition>
  </v-card-actions>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    width: {
      type: [String, Number],
      default: '270',
    },
    isHeader: {
      type: Boolean,
      default: false,
    },
    isCta: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      phone: 'common/config/phone',
    }),
  },
};
</script>

<style lang="scss" scoped>
.btn-phone-emergency {
  font-size: 35px;
  text-decoration: none;
  line-height: 35px;
  display: table-cell;
  transition: 0.3s;

  &:hover {
    opacity: 0.6;
  }
  .tel-number-header {
    font-size: 35px;
    font-family: Roboto, Arial, Helvetica !important;
    font-weight: 400 !important;
    margin-right: 2px;
  }
  .tel-number-footer {
    font-size: 38px;
    font-family: Roboto, Arial, Helvetica !important;
    font-weight: 500 !important;
    margin-right: 2px;
  }
  .is-cta {
    color: var(--v-accentDarken-base);
    font-size: 44px !important;
  }
}
a:-webkit-any-link {
  text-decoration: none;
}
</style>
