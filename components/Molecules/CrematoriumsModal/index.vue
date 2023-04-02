<template>
  <v-dialog v-model="isShowCrematoriumsModal" width="900" height="872">
    <header class="modal__header py-8 px-8">
      <h2 class="accent-title">火葬料金が別途必要です</h2>
      <v-icon class="ml-auto" @click="$emit('close-modal')">fa-close</v-icon>
    </header>
    <div class="modal__scrollBox">
      <div class="list-area">
        <p class="font-weight-bold body-1">
          火葬料金は別途お客さまのご負担となります
        </p>
        <p>
          火葬料金はあくまで目安です。地域・自治体によって火葬料金が異なりますので予めご了承ください。
        </p>
        <p class="font-weight-bold body-1">
          【料金目安】<span class="caption">※非課税</span>
        </p>
        <v-list-group
          v-for="(crematoriumsPrice, index) in crematoriumsPriceList"
          :key="index"
          :append-icon="null"
          color="primaryText"
          class="mb-2 list-title"
        >
          <template v-slot:activator>
            <v-list-item-content>
              {{ crematoriumsPrice.name }}
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon>fa-plus</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>

          <table class="common-tableColumn3 mt-4">
            <tbody>
              <tr
                v-for="(prefecture, index) in crematoriumsPrice.prefectures"
                :key="index"
                class="body-3"
              >
                <th
                  v-if="prefecture.prefectureName !== undefined"
                  :rowspan="prefecture.rowspan"
                >
                  {{ prefecture.prefectureName }}
                </th>
                <td>
                  {{ prefecture.cityName }}
                </td>
                <td>{{ prefecture.price }}</td>
              </tr>
            </tbody>
          </table>
        </v-list-group>
      </div>
      <div class="accentLighten4 caption mt-8 mx-auto px-8 py-2 caption-area">
        <p class="mb-2">
          ※目安表に記載している金額は2021年8月時点の市民料金です。市外料金の場合は金額が大きく異なります。
        </p>
        <p class="mb-2">
          ※市民料金とは：住民票がある地域の公営火葬場で住民の方が火葬される場合は市民料金となります。
        </p>
        <p class="mb-2">
          ※市外料金とは：住民票がある市区町村と異なるエリアでの火葬を希望される場合、公営火葬場の無い地域や、公営サービスとして市民料金の設定が無い地域にお住まいの場合、市や町内に公営火葬場が無い地域（首都圏や沖縄県の一部地域等）や、市民料金の設定が無い自治体に住民票がある方は、市外料金となります。
        </p>
      </div>
      <v-row class="justify-center my-8">
        <v-btn
          color="accentLighten3"
          class="font-weight-bold"
          width="420"
          @click="$emit('close-modal')"
        >
          <v-icon class="mr-2">fa-close</v-icon>
          閉じる
        </v-btn>
      </v-row>
    </div>
  </v-dialog>
</template>
<script>
export default {
  props: {
    isShowCrematoriumsModal: {
      type: Boolean,
    },
  },
  data() {
    return {
      isShowMenu: false,
      crematoriumsPriceList: [
        {
          name: '東北・北海道',
          prefectures: [
            { prefectureName: '北海道', cityName: '札幌市', price: '無料' },
            { prefectureName: '青森県', cityName: '青森市', price: '無料' },
            {
              prefectureName: '岩手県',
              cityName: '盛岡市',
              price: '10,000円',
            },
            {
              prefectureName: '宮城県',
              cityName: '仙台市',
              price: '9,000円',
            },
            { prefectureName: '秋田県', cityName: '秋田市', price: '無料' },
            { prefectureName: '山形県', cityName: '山形市', price: '無料' },
            {
              prefectureName: '福島県',
              cityName: '福島市',
              price: '10,000円',
            },
          ],
        },
        {
          name: '関東',
          prefectures: [
            {
              prefectureName: '茨城県',
              cityName: '水戸市',
              price: '5,000円',
            },
            {
              prefectureName: '栃木県',
              cityName: '宇都宮市',
              price: '無料',
            },
            {
              prefectureName: '群馬県',
              cityName: '前橋市',
              price: '10,000円',
            },
            {
              prefectureName: '埼玉県',
              cityName: 'さいたま市',
              price: '7,000円',
              rowspan: 3,
            },
            { cityName: '川口市', price: '30,000円' },
            { cityName: '越谷市', price: '10,000円' },
            {
              prefectureName: '千葉県',
              cityName: '千葉市',
              price: '6,000円',
              rowspan: 3,
            },
            { cityName: '松戸市', price: '3,000円' },
            { cityName: '柏市', price: '4,600円' },
            {
              prefectureName: '東京都',
              cityName: '23区',
              price: '40,000〜75,000円',
              rowspan: 2,
            },
            { cityName: '23区外', price: '無料〜10,000円' },
            {
              prefectureName: '神奈川県',
              cityName: '川崎市',
              price: '6,750円',
              rowspan: 4,
            },
            { cityName: '横浜市', price: '12,000円' },
            { cityName: '横須賀市', price: '10,000円' },
            { cityName: '相模原市', price: '6,000円' },
          ],
        },
        {
          name: '中部・甲信越',
          prefectures: [
            { prefectureName: '新潟県', cityName: '新潟市', price: '無料' },
            { prefectureName: '富山県', cityName: '富山市', price: '無料' },
            {
              prefectureName: '石川県',
              cityName: '金沢市',
              price: '5,000円',
            },
            {
              prefectureName: '福井県',
              cityName: '福井市',
              price: '10,000円',
            },
            { prefectureName: '山梨県', cityName: '甲府市', price: '10,000円' },
            { prefectureName: '長野県', cityName: '長野市', price: '15,000円' },
            {
              prefectureName: '岐阜県',
              cityName: '岐阜市',
              price: '5,000円',
            },
            {
              prefectureName: '静岡県',
              cityName: '静岡市',
              price: '10,000円',
              rowspan: 2,
            },
            {
              cityName: '浜松市',
              price: '無料',
            },
            {
              prefectureName: '岐阜県',
              cityName: '岐阜市',
              price: '5,000円',
            },
          ],
        },
        {
          name: '関西',
          prefectures: [
            { prefectureName: '三重県', cityName: '津市', price: '3,000円' },
            { prefectureName: '滋賀県', cityName: '大津市', price: '20,000円' },
            {
              prefectureName: '京都府',
              cityName: '京都市',
              price: '20,000円',
            },
            {
              prefectureName: '大阪府',
              cityName: '大阪市',
              price: '10,000円',
              rowspan: 4,
            },
            {
              cityName: '堺市',
              price: '20,000円',
            },
            {
              cityName: '八尾市',
              price: '18,000円',
            },
            {
              cityName: '東大阪市',
              price: '7,000円',
            },
            {
              prefectureName: '兵庫県',
              cityName: '西宮市',
              price: '10,000円',
              rowspan: 3,
            },
            {
              cityName: '尼崎市',
              price: '13,200円',
            },
            {
              cityName: '神戸市',
              price: '12,000円',
            },
            { prefectureName: '長野県', cityName: '長野市', price: '15,000円' },
            {
              prefectureName: '岐阜県',
              cityName: '岐阜市',
              price: '5,000円',
            },
            {
              prefectureName: '静岡県',
              cityName: '静岡市',
              price: '10,000円',
              rowspan: 2,
            },
            {
              cityName: '浜松市',
              price: '無料',
            },
            {
              prefectureName: '岐阜県',
              cityName: '岐阜市',
              price: '5,000円',
            },
          ],
        },
        {
          name: '中国・四国',
          prefectures: [
            { prefectureName: '鳥取県', cityName: '鳥取市', price: '25,000円' },
            { prefectureName: '島根県', cityName: '松江市', price: '14,000円' },
            {
              prefectureName: '岡山県',
              cityName: '岡山市',
              price: '10,000円',
            },
            {
              prefectureName: '広島県',
              cityName: '広島市',
              price: '8,200円',
            },
            { prefectureName: '山口県', cityName: '山口市', price: '無料' },
            { prefectureName: '徳島県', cityName: '徳島市', price: '15,000円' },
            {
              prefectureName: '香川県',
              cityName: '高松市',
              price: '20,000円',
            },
            {
              prefectureName: '愛媛県',
              cityName: '松山市',
              price: '8,000円',
            },
            {
              prefectureName: '高知県',
              cityName: '高知市',
              price: '20,000円',
            },
          ],
        },
        {
          name: '九州・沖縄',
          prefectures: [
            {
              prefectureName: '福岡県',
              cityName: '福岡市',
              price: '20,000円',
              rowspan: 2,
            },
            {
              cityName: '北九州市',
              price: '15,000円',
            },
            { prefectureName: '佐賀県', cityName: '佐賀市', price: '6,500円' },
            {
              prefectureName: '長崎県',
              cityName: '長崎市',
              price: '6,000円',
            },
            {
              prefectureName: '熊本県',
              cityName: '熊本市',
              price: '6,000円',
            },
            { prefectureName: '大分県', cityName: '大分市', price: '5,000円' },
            { prefectureName: '宮崎県', cityName: '宮崎市', price: '12,000円' },
            {
              prefectureName: '鹿児島県',
              cityName: '鹿児島市',
              price: '9,000円',
            },
            {
              prefectureName: '沖縄県',
              cityName: '那覇市',
              price: '25,000円',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.modal__header {
  position: sticky;
  top: 0;
  background: #fbfaf5;
  height: 92px;
  border-bottom: 2px dotted #ccc;
  display: flex;
  line-height: 25px;
}
.modal__scrollBox {
  background: white;
  overflow-y: scroll;
  height: 780px;
  .list-area {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    .list-title {
      border-bottom: 1px solid #ccc;
    }
  }
  .modal__footer {
    text-align: center;
    padding: 42px 30px;
  }
}
.common-tableColumn3 {
  font-size: 16px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  width: 100%;
  table-layout: fixed;
  margin-bottom: 10px;
  border-collapse: collapse;
  border-spacing: 0;
  tbody {
    display: table-row-group;
    tr {
      border-top: 1px solid #ccc;
      th {
        display: table-cell;
        padding: 0.75em;
        width: 100px;
        vertical-align: top;
        border-right: 1px solid #ccc;
        background-color: rgb(var(--v-theme-accentLighten3));
        text-align: left;
        font-weight: 400;
      }
      td {
        display: table-cell;
        padding: 0.75em;
        vertical-align: top;
        border-right: 1px solid #ccc;
      }
    }
  }
}
.caption-area {
  width: 90%;
}
</style>
