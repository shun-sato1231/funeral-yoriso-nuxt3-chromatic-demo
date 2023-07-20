import { defineStore } from "pinia"

type Region = {
  id: number
  name: string
  code: string
}

type Prefecture = {
  id: number
  code: string
  name: string
  full_name?: string
  region_id: number
}

interface NearCity {
  id: number;
  name: string;
  code: string;
  prefecture: Prefecture;
}

interface CityRelation {
  name: string,
  city_id: number;
  near_city_id: number;
  near_city: NearCity;
  url: string,
}

interface MajorCity {
  code: string;
  created_at: string;
  deleted_at: string | null;
  description: string;
  id: number;
  latlng: string;
  major_city_id: number;
  name: string;
  name_kana: string;
  prefecture_id: number;
  updated_at: string;
}

type City = {
  id: number
  code: string
  name: string
  prefecture_id: number
  is_major: number
  near_cities?: CityRelation[]
  prefecture?: Prefecture
  major_city?: MajorCity
}

type State = {
  city: City | null
  regions: Region[]
  prefectures: Prefecture[]
  cities: City[]
}

export const useAreaStore = defineStore('area', {
  state: ():State => ({
    city: null,
    regions: [
      { id: 1, name: '東北・北海道', code: 'th' },
      { id: 2, name: '関東', code: 'kk' },
      { id: 3, name: '中部・甲信越', code: 'ck' },
      { id: 4, name: '関西', code: 'ks' },
      { id: 5, name: '中国・四国', code: 'cs' },
      { id: 6, name: '九州・沖縄', code: 'ko' },
    ],
    prefectures: [
      { id: 1, code: 'hokkaido', name: '北海道', region_id: 1 },
      { id: 2, code: 'aomori', name: '青森', region_id: 1 },
      { id: 3, code: 'iwate', name: '岩手', region_id: 1 },
      { id: 4, code: 'miyagi', name: '宮城', region_id: 1 },
      { id: 5, code: 'akita', name: '秋田', region_id: 1 },
      { id: 6, code: 'yamagata', name: '山形', region_id: 1 },
      { id: 7, code: 'fukushima', name: '福島', region_id: 1 },
      { id: 8, code: 'tokyo', name: '東京', region_id: 2 },
      { id: 9, code: 'kanagawa', name: '神奈川', region_id: 2 },
      { id: 10, code: 'saitama', name: '埼玉', region_id: 2 },
      { id: 11, code: 'chiba', name: '千葉', region_id: 2 },
      { id: 12, code: 'ibaraki', name: '茨城', region_id: 2 },
      { id: 13, code: 'gumma', name: '群馬', region_id: 2 },
      { id: 14, code: 'tochigi', name: '栃木', region_id: 2 },
      { id: 15, code: 'aichi', name: '愛知', region_id: 3 },
      { id: 16, code: 'shizuoka', name: '静岡', region_id: 3 },
      { id: 17, code: 'gifu', name: '岐阜', region_id: 3 },
      { id: 18, code: 'mie', name: '三重', region_id: 3 },
      { id: 19, code: 'niigata', name: '新潟', region_id: 3 },
      { id: 20, code: 'nagano', name: '長野', region_id: 3 },
      { id: 21, code: 'yamanashi', name: '山梨', region_id: 3 },
      { id: 22, code: 'fukui', name: '福井', region_id: 3 },
      { id: 23, code: 'ishikawa', name: '石川', region_id: 3 },
      { id: 24, code: 'toyama', name: '富山', region_id: 3 },
      { id: 25, code: 'osaka', name: '大阪', region_id: 4 },
      { id: 26, code: 'kyoto', name: '京都', region_id: 4 },
      { id: 27, code: 'hyogo', name: '兵庫', region_id: 4 },
      { id: 28, code: 'nara', name: '奈良', region_id: 4 },
      { id: 29, code: 'shiga', name: '滋賀', region_id: 4 },
      { id: 30, code: 'wakayama', name: '和歌山', region_id: 4 },
      { id: 31, code: 'hiroshima', name: '広島', region_id: 5 },
      { id: 32, code: 'okayama', name: '岡山', region_id: 5 },
      { id: 33, code: 'yamaguchi', name: '山口', region_id: 5 },
      { id: 34, code: 'tottori', name: '鳥取', region_id: 5 },
      { id: 35, code: 'shimane', name: '島根', region_id: 5 },
      { id: 36, code: 'tokushima', name: '徳島', region_id: 5 },
      { id: 37, code: 'kochi', name: '高知', region_id: 5 },
      { id: 38, code: 'ehime', name: '愛媛', region_id: 5 },
      { id: 39, code: 'kagawa', name: '香川', region_id: 5 },
      { id: 40, code: 'fukuoka', name: '福岡', region_id: 6 },
      { id: 41, code: 'nagasaki', name: '長崎', region_id: 6 },
      { id: 42, code: 'saga', name: '佐賀', region_id: 6 },
      { id: 43, code: 'kumamoto', name: '熊本', region_id: 6 },
      { id: 44, code: 'oita', name: '大分', region_id: 6 },
      { id: 45, code: 'miyazaki', name: '宮崎', region_id: 6 },
      { id: 46, code: 'kagoshima', name: '鹿児島', region_id: 6 },
      { id: 47, code: 'okinawa', name: '沖縄', region_id: 6 },
    ],
    cities: [
      { id: 1, code: 'sapporo', name: '札幌市', prefecture_id: 1, is_major: 1 },
      {
        id: 2,
        code: 'hakodate-city',
        name: '函館市',
        prefecture_id: 1,
        is_major: 0,
      },
      {
        id: 3,
        code: 'otaru-city',
        name: '小樽市',
        prefecture_id: 1,
        is_major: 0,
      },
      {
        id: 4,
        code: 'asahikawa-city',
        name: '旭川市',
        prefecture_id: 1,
        is_major: 0,
      },
      {
        id: 5,
        code: 'muroran-city',
        name: '室蘭市',
        prefecture_id: 1,
        is_major: 0,
      },
      {
        id: 5,
        code: 'kushiro-city',
        name: '釧路市',
        prefecture_id: 1,
        is_major: 0,
      },
      {
        id: 6,
        code: 'sendai',
        name: '仙台市',
        prefecture_id: 4,
        is_major: 1,
      },
      {
        id: 7,
        code: 'yokohama',
        name: '横浜市',
        prefecture_id: 9,
        is_major: 1,
      },
      {
        id: 8,
        code: 'kawasaki',
        name: '川崎市',
        prefecture_id: 9,
        is_major: 1,
      },
      {
        id: 9,
        code: 'sagamihara',
        name: '相模原市',
        prefecture_id: 9,
        is_major: 1,
      },
      {
        id: 10,
        code: 'saitama',
        name: 'さいたま市',
        prefecture_id: 10,
        is_major: 1,
      },
      {
        id: 11,
        code: 'chiba',
        name: '千葉市',
        prefecture_id: 11,
        is_major: 1,
      },
      {
        id: 12,
        code: 'nagoya',
        name: '名古屋市',
        prefecture_id: 15,
        is_major: 1,
      },
      {
        id: 13,
        code: 'shizuoka',
        name: '静岡市',
        prefecture_id: 16,
        is_major: 1,
      },
      {
        id: 14,
        code: 'hamamatsu',
        name: '浜松市',
        prefecture_id: 16,
        is_major: 1,
      },
      {
        id: 15,
        code: 'niigata',
        name: '新潟市',
        prefecture_id: 19,
        is_major: 1,
      },
      {
        id: 16,
        code: 'osaka',
        name: '大阪市',
        prefecture_id: 25,
        is_major: 1,
      },
      {
        id: 17,
        code: 'sakai',
        name: '堺市',
        prefecture_id: 25,
        is_major: 1,
      },
      {
        id: 18,
        code: 'kyoto',
        name: '京都市',
        prefecture_id: 26,
        is_major: 1,
      },
      {
        id: 19,
        code: 'kobe',
        name: '神戸市',
        prefecture_id: 27,
        is_major: 1,
      },
      {
        id: 20,
        code: 'hiroshima',
        name: '広島市',
        prefecture_id: 31,
        is_major: 1,
      },
      {
        id: 21,
        code: 'okayama',
        name: '岡山市',
        prefecture_id: 32,
        is_major: 1,
      },
      {
        id: 22,
        code: 'kitakyushu',
        name: '北九州市',
        prefecture_id: 40,
        is_major: 1,
      },
      {
        id: 23,
        code: 'fukuoka',
        name: '福岡市',
        prefecture_id: 40,
        is_major: 1,
      },
      {
        id: 24,
        code: 'kumamoto',
        name: '熊本市',
        prefecture_id: 43,
        is_major: 1,
      },
    ],
  }),
  getters: {
  prefectureCities:
    (state) =>
    ({ prefectureId, isMajor }: {prefectureId: number, isMajor?: number}) => {
      return state.cities.filter((city) => {
        let result = city.prefecture_id === prefectureId;
        if (isMajor !== undefined && result) {
          result = city.is_major === isMajor;
        }
        return result;
      });
    },
  },
  actions: {
    /**
     * 市情報の初期化
     */
    async initCity({ cityCode, prefectureCode }: {cityCode: string, prefectureCode: string}) {
      const { data } = await useFetch<{data: City}>(`/common/area/cities/${cityCode}`, {
        baseURL: 'https://delta.api.stg.yoriso.com',
        params: { prefecture_code: prefectureCode },
      })

      if(data.value) {
        const nearCities = data.value.data.near_cities?.map(city => {
          city.url =
            '/area/' +
            city.near_city.prefecture.code +
            '/' +
            city.near_city.code +
            '/'
          return city
        })

        this.city = {
          ...data.value.data,
          near_cities: nearCities
        }
      }
    },
  }
})
