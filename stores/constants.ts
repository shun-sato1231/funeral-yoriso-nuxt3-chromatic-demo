import { defineStore } from 'pinia';

export const useConstantsStore = defineStore('constants', () => {
  const state = reactive({
    constants: {
      db: {
        common: {
          contentCategories: {
            funeral: {
              id: 1,
            },
          },
          routeTypes: {
            train: {
              id: 1,
              name: '電車',
            },
            car: {
              id: 2,
              name: '車',
            },
          },
        },
        ec: {},
        ending: {
          funeralPlanTypes: {
            family: {
              id: 1,
              name: '家族葬',
              image: '/img/logo/logo_yoriso-kazokuso.svg',
            },
            fire: {
              id: 2,
              name: '火葬式',
              image: '/img/logo/logo_yoriso-kasoshiki.svg',
            },
          },
        },
      },
      view: {
        funeralReview: {
          minAverageValue: 4,
        },
        funeralHome: {
          tags: [
            { icon: 'fa-train', name: '駅ちか' },
            { icon: 'fa-industry', name: '火葬場併設' },
            { icon: 'fa-car', name: '駐車場' },
            { icon: 'fa-chair', name: '控え室' },
            { icon: 'fa-user', name: '仮眠施設' },
            { icon: 'fa-wheelchair', name: 'バリアフリー' },
            { icon: 'fa-bed', name: '安置施設' },
            { icon: 'fa-praying-hands', name: '全宗派対応' },
          ],
        },
        funeralCrematorium: {
          tags: [
            { icon: 'fa-home', name: '駅ちか' },
            { icon: 'fa-car', name: '駐車場' },
            { icon: 'fa-home', name: '控え室' },
            { icon: 'fa-bed', name: '安置施設' },
          ],
        },
        mapIcons: [
          {
            title: '火葬場併設',
            src: '/img/area/map/off_mapicon_kaso.webp',
            has_crematory: 1,
          },
          {
            title: '式場',
            src: '/img/area/map/off_mapicon_shikijo.webp',
            has_crematory: 0,
          },
        ],
        creditcardText:
          'VISA,マスターカード,JCB,アメリカン・エキスプレス,ダイナースクラブのクレジットカードに対応',
        surveyQuestionCategoryNames: {
          comment: 'YS010',
          reviewDetails: ['SJ001', 'SJ003', 'SJ005', 'KS001', 'KS003'], // 斎場＞火葬場となるように設定
          attendee: 'YS001',
        },
      },
    },
  });
  return {
    ...toRefs(readonly(state)),
  };
});
