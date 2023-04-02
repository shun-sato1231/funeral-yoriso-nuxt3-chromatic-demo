<template>
  <div class="count-area mx-auto text-center sp-content">
    <h3 class="pt-5">
      <v-card color="accent" tile flat class="white--text">
        {{ city.name }}の実績数
      </v-card>
    </h3>

    <v-row no-gutters class="py-3 count-card">
      <v-col
        cols="4"
        class="px-1"
        v-for="(summary, index) in summaries"
        :key="index"
      >
        <v-card outlined height="100%">
          <v-card
            flat
            color="accentLighten5 body-2 font-weight-bold py-2 px-1"
            >{{ summary.name }}</v-card
          >
          <div class="py-3" v-html="count(summary.key)" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
    },
  },
  data() {
    return {
      summaries: [
        { name: '葬儀実績', key: 'funeral_count' },
        { name: '葬儀場', key: 'funeral_home_count' },
        { name: '葬儀場評価', key: 'funeral_home_review_count' },
      ],
    };
  },
  methods: {
    count(key) {
      const counts = JSON.parse(
        JSON.stringify(
          new Intl.NumberFormat('ja-JP', { notation: 'compact' }).formatToParts(
            BigInt(this.city.summary[key])
          ),
          null,
          2
        )
      );

      let countText = '';
      countText += '<span class="count">';
      let isEndSpan;
      counts.forEach((count) => {
        isEndSpan = false;
        if (count.type === 'integer') {
          countText += Number(count.value).toLocaleString();
        } else if (count.type === 'compact') {
          countText += '</span>';
          countText += count.value;
          isEndSpan = true;
        } else {
          countText += count.value;
        }
      });
      if (!isEndSpan) {
        countText += '</span>';
      }
      countText += '件';

      return countText;
    },
  },
};
</script>

<style lang="scss">
.count-area {
  .count-card {
    margin: 0 -3px;
  }
  .count {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: -0.7px;
    color: var(--v-accent-base);
    font-weight: bold;
  }
}
</style>
