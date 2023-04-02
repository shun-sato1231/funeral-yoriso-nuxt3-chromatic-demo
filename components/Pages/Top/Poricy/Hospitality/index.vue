<template>
  <div class="l-contentBox__moduleBody">
    <h3 class="text-center">
      <span class="title-small">よりそうお葬式だからできる、故人を偲ぶ</span
      ><strong class="accent--text"
        ><span class="title-number">4</span>つ</strong
      >のお別れ演出
    </h3>
    <p class="text-center body-1">家族葬セットプラン内にすべて含まれています</p>

    <v-row no-gutters>
      <v-col
        cols="3"
        v-for="(point, index) in points"
        :key="index"
        class="pa-2"
      >
        <v-card flat>
          <v-card flat>
            <v-img
              :src="point.image"
              :alt="point.title"
              width="234"
              height="156"
            />
          </v-card>
          <v-card-title class="justify-center py-2">
            <h4 class="point-title body-1">
              <div class="accent--text font-weight-bold" v-text="point.title" />
              <div class="point-subtitle" v-text="point.subtitle" />
            </h4>
          </v-card-title>
          <v-card-text class="px-0" v-text="point.description" />
        </v-card>
      </v-col>
    </v-row>
    <div class="caption">
      ※一部の式場ではメモリアルコーナーが設置できない場合がございます。
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      points: [
        {
          title: 'メモリアルコーナー',
          subtitle: '想い出を形にする',
          description:
            '故人さまが好きだったものを飾り、お人柄を偲ぶ空間を演出します。',
          image: '/img/top/policy/points/img-event_1.webp',
        },
        {
          title: 'ラストメッセージ',
          subtitle: '気持ちを伝える',
          description:
            'ご遺族や参列者さまが書いたメッセージを、棺の中に入れ思いを届けます。',
          image: '/img/top/policy/points/img-event_3.webp',
        },
        {
          title: 'お花入れ',
          subtitle: 'お見送りを華やかに彩る',
          description:
            '出棺時に棺を華やかなお花で飾り、故人さまを見送ることができます。',
          image: '/img/top/policy/points/img-event_2.webp',
        },
        {
          title: '遺影花飾り',
          subtitle: 'ご遺影を彩る',
          description:
            '「いい顔で旅立ってもらいたい」というお声から、遺影を美しいお花で飾り付けしています。',
          image: '/img/top/policy/points/img-event_4.webp',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title-small {
  font-size: 80%;
  font-weight: inherit;
}
.title-number {
  font-weight: 700 !important;
  vertical-adivgn: initial;
  font-size: 125%;
}
.description {
  divne-height: 1.8;
  vertical-adivgn: inherit;
  font-weight: 400;
}
.point-title {
  text-align: center;
  .point-subtitle {
    font-size: 80%;
    font-weight: inherit;
  }
}
</style>
