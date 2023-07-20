import { defineStore, storeToRefs } from 'pinia';
import { useConstantsStore } from './constants';

interface State {
  funeralPlans: Array<any>;
  funeralSurveyAnswers: null | any;
  funeralSurveyAnswersMeta: null | any;
  funeralHomes: null | any;
  funeralHomeMeta: null | any;
  crematoriums: null | any;
  crematoriumsMeta: null | any;
  funeralReviews: null | any;
  funeralReviewMeta: null | any;
  funeralPlanMenus: Array<any>;
}

interface GetFuneralParams {
  cityCode: string;
  prefectureCode: string;
  perPage?: string;
  page?: string;
  isAdd?: boolean;
}

interface GetFuneralSurveyAnswersParams {
  city: any;
  cityCode: string;
  prefectureCode: string;
  perPage?: string;
  page?: string;
  isAdd?: boolean;
}

export const useFuneralStore = defineStore('funeral', {
  state: (): State => ({
    funeralPlans: [
      {
        name: '一日プラン',
        short_name: '',
        code: 'plan-ichinichi',
        funeral_plan_type: {
          id: 1,
          name: '家族葬',
        },
        images: [
          {
            src: 'https://cdn.yoriso.com/sogi/renewal/images/plan/visual/v_ichinichi_01.jpg',
          },
        ],
        description: 'お通夜を省いた告別式のみの一日葬',
        short_description: '告別式を一日で',
        is_reccomend: true,
        max_discount_price: 30000,
        price: 270000,
        tax: 27000,
        colors: {
          primary: '114,91,155',
        },
        number_of_people: 30,
        tags: [
          { name: 'お通夜', disabled: true },
          { name: '告別式', disabled: false },
          { name: 'ご火葬', disabled: false },
        ],
      },
      {
        name: '二日プラン',
        short_name: '',
        code: 'plan-futsuka',
        funeral_plan_type: {
          id: 1,
          name: '家族葬',
        },
        images: [
          {
            src: 'https://cdn.yoriso.com/sogi/renewal/images/plan/visual/v_ichinichi_01.jpg',
          },
        ],
        description: 'お通夜・告別式をご家族中心で',
        short_description: '通夜・告別式をご家族で',
        is_reccomend: true,
        max_discount_price: 30000,
        price: 369000,
        tax: 36900,
        colors: {
          primary: '199, 95, 126',
        },
        number_of_people: 30,
        tags: [
          { name: 'お通夜', disabled: false },
          { name: '告別式', disabled: false },
          { name: 'ご火葬', disabled: false },
        ],
      },
      {
        name: '華やか二日プラン',
        short_name: '華やかプラン',
        code: 'plan-futsuka2',
        funeral_plan_type: {
          id: 1,
          name: '家族葬',
        },
        images: [
          {
            src: 'https://cdn.yoriso.com/sogi/renewal/images/plan/visual/v_ichinichi_01.jpg',
          },
        ],
        options: [
          {
            name: '棺上花束',
            images: [
              {
                src: 'https://cdn.yoriso.com/sogi/renewal/images/plan/planWithKanjoHana_spPc.jpg',
              },
            ],
          },
        ],
        description: 'たくさんのお花でお見送り',
        short_description: '多くの参列者と華やかに',
        is_reccomend: false,
        max_discount_price: 30000,
        price: 499000,
        tax: 49900,
        colors: {
          primary: '199, 95, 126',
        },
        number_of_people: 30,
        tags: [
          { name: 'お通夜', disabled: false },
          { name: '告別式', disabled: false },
          { name: 'ご火葬', disabled: false },
        ],
      },
      {
        name: 'シンプルプラン',
        short_name: '',
        code: 'plan-simple',
        funeral_plan_type: {
          id: 2,
          name: '火葬式',
        },
        images: [
          {
            src: 'https://cdn.yoriso.com/sogi/renewal/images/plan/visual/v_simple_01.jpg',
          },
        ],
        description: '最も費用を抑えられる',
        short_description: '費用を抑えた<br/>火葬式なら',
        is_reccomend: false,
        max_discount_price: 15000,
        price: 76000,
        tax: 7600,
        colors: {
          primary: '119, 86, 80',
        },
        number_of_people: 10,
        tags: [
          { name: 'ご火葬のみ', disabled: false },
          { name: '預かり安置', disabled: false },
          { name: '面会なし', disabled: false },
        ],
      },
      {
        name: '面会プラン',
        short_name: '',
        code: 'plan-menkai',
        funeral_plan_type: {
          id: 2,
          name: '火葬式',
        },
        images: [
          {
            src: 'https://cdn.yoriso.com/sogi/renewal/images/plan/visual/v_menkai_01.jpg',
          },
        ],
        description: 'ご火葬前に最後の面会ができる',
        short_description: '最後の面会ができる',
        is_reccomend: false,
        max_discount_price: 15000,
        price: 135000,
        tax: 13500,
        colors: {
          primary: '58, 114, 67',
        },
        number_of_people: 10,
        tags: [
          { name: 'ご火葬のみ', disabled: false },
          { name: '預かり安置', disabled: false },
          { name: '面会あり', disabled: false },
        ],
      },
      {
        name: '自宅安置プラン',
        short_name: '基本プラン',
        code: 'plan-jitakuanchi',
        funeral_plan_type: {
          id: 2,
          name: '火葬式',
        },
        images: [
          {
            src: 'https://cdn.yoriso.com/sogi/renewal/images/plan/visual/v_jitakuanchi_01.jpg',
          },
        ],
        description: 'ご火葬までご自宅で一緒に過ごせる',
        short_description: '自宅で一緒に過ごせる',
        is_reccomend: false,
        max_discount_price: 15000,
        price: 135000,
        tax: 13500,
        colors: {
          primary: '4, 120, 131',
        },
        number_of_people: 10,
        tags: [
          { name: 'ご火葬のみ', disabled: false },
          { name: 'ご自宅安置', disabled: false },
        ],
      },
    ],
    funeralSurveyAnswers: [],
    funeralSurveyAnswersMeta: null,
    funeralHomes: [],
    funeralHomeMeta: null,
    crematoriums: [],
    crematoriumsMeta: null,
    funeralReviews: null,
    funeralReviewMeta: null,
    funeralPlanMenus: [],
  }),
  actions: {
    /**
     * 葬儀ホール情報取得
     */
    async getFuneralHomes({
      cityCode,
      prefectureCode,
      perPage = '10',
      page = '1',
      isAdd = false,
    }: GetFuneralParams) {
      const { data } = await useFetch<any>('/ending/funeral/funeral_homes', {
        baseURL: 'https://delta.api.stg.yoriso.com',
        params: {
          city_code: cityCode,
          prefecture_code: prefectureCode,
          per_page: perPage,
          page: page,
        },
      });

      if (data.value) {
        if (isAdd) {
          this.funeralHomes = this.funeralHomes.concat(data.value.data);
        } else {
          this.funeralHomes = data.value.data;
        }

        this.funeralHomeMeta = data.value.meta;
      }
    },
    /**
     * 火葬場情報取得
     */
    async getCrematoriums({
      cityCode,
      prefectureCode,
      perPage = '10',
      page = '1',
      isAdd = false,
    }: GetFuneralParams) {
      const { data } = await useFetch<any>('/ending/funeral/crematoriums', {
        baseURL: 'https://delta.api.stg.yoriso.com',
        params: {
          city_code: cityCode,
          prefecture_code: prefectureCode,
          per_page: perPage,
          page: page,
        },
      });

      if (data.value) {
        if (isAdd) {
          this.crematoriums = this.crematoriums.concat(data.value.data);
        } else {
          this.crematoriums = data.value.data;
        }

        this.crematoriumsMeta = data.value.meta;
      }
    },
    /**
     * 葬儀レビュー情報取得
     */
    async getFuneralReviews({
      cityCode,
      prefectureCode,
      perPage = '4',
      page = '1',
    }: GetFuneralParams) {
      const { data } = await useFetch<any>(
        '/ending/funeral/funeral_survey_answers',
        {
          baseURL: 'https://delta.api.stg.yoriso.com',
          params: {
            city_code: cityCode,
            prefecture_code: prefectureCode,
            per_page: perPage,
            page: page,
          },
        }
      );

      if (data.value) {
        this.funeralReviews = data.value.data;
        this.funeralReviewMeta = data.value.meta;
      }
    },
    /**
     * 葬儀事例情報取得
     */
    async getFuneralSurveyAnswers({
      city,
      cityCode,
      prefectureCode,
      perPage = '10',
      page = '1',
      isAdd = false,
    }: GetFuneralSurveyAnswersParams) {
      const { image } = useCommon();
      const constantsStore = useConstantsStore();
      const { constants } = storeToRefs(constantsStore);

      const { data } = await useFetch<any>(
        '/ending/funeral/funeral_survey_answers',
        {
          baseURL: 'https://delta.api.stg.yoriso.com',
          params: {
            city_code: cityCode,
            prefecture_code: prefectureCode,
            per_page: perPage,
            page: page,
          },
        }
      );

      const results = await data.value.data.map((funeralSurveyAnswer: any) => {
        funeralSurveyAnswer.src = image(
          funeralSurveyAnswer.funeral.funeral_home.images[0].path
        );

        funeralSurveyAnswer.imageAlt =
          city.prefecture.full_name +
          city.name +
          '、' +
          funeralSurveyAnswer.funeral.funeral_home.name +
          '斎場の火葬式：自宅安置プランの事例';

        funeralSurveyAnswer.href =
          '/case/#case' + funeralSurveyAnswer.survey_answer.id;
        funeralSurveyAnswer.description =
          funeralSurveyAnswer.funeral.funeral_home.city.prefecture.name +
          funeralSurveyAnswer.funeral.funeral_home.city.name +
          'の事例';
        funeralSurveyAnswer.comment =
          funeralSurveyAnswer.survey_answer.survey_answer_details.find(
            (surveyAnswerDetail: any) =>
              surveyAnswerDetail?.survey_question.survey_question_category
                .name ===
              constants.value.view.surveyQuestionCategoryNames.comment
          )?.value;

        funeralSurveyAnswer.reviewDetails = [];
        constants.value.view.surveyQuestionCategoryNames.reviewDetails.forEach(
          (surveyQuestionCategoryName: any) => {
            const surveyAnswerDetail =
              funeralSurveyAnswer.survey_answer.survey_answer_details.find(
                (surveyAnswerDetail: any) =>
                  surveyAnswerDetail?.survey_question.survey_question_category
                    .name === surveyQuestionCategoryName
              );
            if (surveyAnswerDetail?.survey_question?.view_name) {
              // 同一の title が存在するかどうかを調べる
              const existingEntry = funeralSurveyAnswer.reviewDetails.find(
                (entry: any) =>
                  entry.title === surveyAnswerDetail.survey_question.view_name
              );

              // 同一の title が存在しない場合にのみ、新しいオブジェクトを追加
              if (!existingEntry) {
                funeralSurveyAnswer.reviewDetails.push({
                  title: surveyAnswerDetail.survey_question.view_name,
                  rating: Number(surveyAnswerDetail.value),
                });
              }
            }
          }
        );

        funeralSurveyAnswer.address =
          funeralSurveyAnswer.funeral.funeral_home.city.prefecture.name +
          funeralSurveyAnswer.funeral.funeral_home.city.name;

        funeralSurveyAnswer.attendee =
          funeralSurveyAnswer.survey_answer.survey_answer_details.find(
            (surveyAnswerDetail: any) =>
              surveyAnswerDetail?.survey_question.survey_question_category
                .name ===
              constants.value.view.surveyQuestionCategoryNames.attendee
          )?.value;

        funeralSurveyAnswer.userImage =
          'https://cdn.yoriso.com/sogi/renewal/images/common/illust/yellow/' +
          funeralSurveyAnswer.survey_answer.user_image +
          '.png';

        return funeralSurveyAnswer;
      });

      this.funeralSurveyAnswers = results;
    },
  },
});
