import { Ref, readonly } from 'vue';
import { useStore } from 'vuex';
// import axios from 'axios';

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

export const useFuneralStore = () => {
  const state = {
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
    funeralSurveyAnswers: null,
    funeralSurveyAnswersMeta: null,
    funeralHomes: null,
    funeralHomeMeta: null,
    crematoriums: null,
    crematoriumsMeta: null,
    funeralReviews: null,
    funeralReviewMeta: null,
    funeralPlanMenus: [],
  };
  return {
    state: readonly(state),
  };
};

const updateFuneralPlans = (state: Ref<State>, funeralPlans: Array<any>) => {
  state.value.funeralPlans = funeralPlans;
};

const updateFuneralSurveyAnswers = (
  state: Ref<State>,
  funeralSurveyAnswers: any | null
) => {
  state.value.funeralSurveyAnswers = funeralSurveyAnswers;
};

const updateFuneralSurveyAnswersMeta = (
  state: Ref<State>,
  funeralSurveyAnswersMeta: any | null
) => {
  state.value.funeralSurveyAnswersMeta = funeralSurveyAnswersMeta;
};

const updateFuneralHomes = (state: Ref<State>, funeralHomes: any | null) => {
  state.value.funeralHomes = funeralHomes;
};

const updateFuneralHomeMeta = (
  state: Ref<State>,
  funeralHomeMeta: any | null
) => {
  state.value.funeralHomeMeta = funeralHomeMeta;
};

const updateCrematoriums = (state: Ref<State>, crematoriums: any | null) => {
  state.value.crematoriums = crematoriums;
};

const updateCrematoriumsMeta = (
  state: Ref<State>,
  crematoriumsMeta: any | null
) => {
  state.value.crematoriumsMeta = crematoriumsMeta;
};

const updateFuneralReviews = (
  state: Ref<State>,
  funeralReviews: any | null
) => {
  state.value.funeralReviews = funeralReviews;
};

const updateFuneralReviewMeta = (
  state: Ref<State>,
  funeralReviewMeta: any | null
) => {
  state.value.funeralReviewMeta = funeralReviewMeta;
};

const updateFuneralPlanMenus = (
  state: Ref<State>,
  funeralPlanMenus: Array<any>
) => {
  state.value.funeralPlanMenus = funeralPlanMenus;
};

export function useFuneral() {
  const store = useStore();

  const funeralHomes = ref([]);
  const funeralHomeMeta = ref(null);
  const crematoriums = ref([]);
  const crematoriumsMeta = ref(null);
  const funeralReviews = ref([]);
  const funeralReviewMeta = ref(null);
  const funeralPlanMenus = ref([]);
  const funeralSurveyAnswers = ref([]);
  const funeralSurveyAnswersMeta = ref(null);

  async function getFuneralHomes(
    cityCode,
    prefectureCode,
    perPage = '10',
    page = '1',
    isAdd = false
  ) {
    const response = await axios.get('/ending/funeral/funeral_homes', {
      params: {
        city_code: cityCode,
        prefecture_code: prefectureCode,
        per_page: perPage,
        page: page,
      },
    });

    if (isAdd) {
      funeralHomes.value = funeralHomes.value.concat(response.data.data);
    } else {
      funeralHomes.value = response.data.data;
    }
    funeralHomeMeta.value = response.data.meta;
  }

  async function getCrematoriums(
    cityCode,
    prefectureCode,
    perPage = '10',
    page = '1',
    isAdd = false
  ) {
    const response = await axios.get('/ending/funeral/crematoriums', {
      params: {
        city_code: cityCode,
        prefecture_code: prefectureCode,
        per_page: perPage,
        page: page,
      },
    });

    if (isAdd) {
      crematoriums.value = crematoriums.value.concat(response.data.data);
    } else {
      crematoriums.value = response.data.data;
    }
    crematoriumsMeta.value = response.data.meta;
  }

  async function getFuneralReviews(
    cityCode,
    prefectureCode,
    perPage = '4',
    page = '1'
  ) {
    const response = await axios.get('/ending/funeral/funeral_survey_answers', {
      params: {
        city_code: cityCode,
        prefecture_code: prefectureCode,
        per_page: perPage,
        min_total_rating: store.state.const.view.funeralReview.minAverageValue,
        page: page,
      },
    });

    funeralReviews.value = response.data.data;
    funeralReviewMeta.value = response.data.meta;
  }

  async function getFuneralSurveyAnswers(
    city,
    cityCode,
    prefectureCode,
    perPage = '10',
    page = '1'
  ) {
    let results = await axios
      .get('/ending/funeral/funeral_survey_answers', {
        params: {
          city_code: cityCode,
          prefecture_code: prefectureCode,
          min_total_rating: this.$const.view.funeralReview.minAverageValue,
          per_page: perPage,
          page: page,
        },
      })
      .then((result) => {
        return result.data;
      });

    results.data = await results.data.map((funeralSurveyAnswer) => {
      funeralSurveyAnswer.src = this.$image(
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
          (surveyAnswerDetail) =>
            surveyAnswerDetail?.survey_question.survey_question_category
              .name === this.$const.view.surveyQuestionCategoryNames.comment
        )?.value;

      funeralSurveyAnswer.reviewDetails = [];
      this.$const.view.surveyQuestionCategoryNames.reviewDetails.forEach(
        (surveyQuestionCategoryName) => {
          const surveyAnswerDetail =
            funeralSurveyAnswer.survey_answer.survey_answer_details.find(
              (surveyAnswerDetail) =>
                surveyAnswerDetail?.survey_question.survey_question_category
                  .name === surveyQuestionCategoryName
            );
          if (surveyAnswerDetail?.survey_question?.view_name) {
            // 同一の title が存在するかどうかを調べる
            const existingEntry = funeralSurveyAnswer.reviewDetails.find(
              (entry) =>
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
          (surveyAnswerDetail) =>
            surveyAnswerDetail?.survey_question.survey_question_category
              .name === this.$const.view.surveyQuestionCategoryNames.attendee
        )?.value;

      funeralSurveyAnswer.userImage =
        'https://cdn.yoriso.com/sogi/renewal/images/common/illust/yellow/' +
        funeralSurveyAnswer.survey_answer.user_image +
        '.png';

      return funeralSurveyAnswer;
    });
  }

  return {
    funeralHomes,
    funeralHomeMeta,
    crematoriums,
    crematoriumsMeta,
    funeralReviews,
    funeralReviewMeta,
    funeralPlanMenus,
    funeralSurveyAnswers,
    funeralSurveyAnswersMeta,
    getFuneralHomes,
    getCrematoriums,
    getFuneralReviews,
    getFuneralSurveyAnswers,
  };
}
