import { defineStore } from "pinia";

interface State {
  questions: Array<any>;
}

export const useQuestionStore = defineStore('question', {
  state: (): State => ({
    questions: []
  }),
  actions: {
    /**
     * 葬儀ホール情報取得
     */
    async initQuestions(
      { cityCode, prefectureCode, perPage = '100', page = '1' }
      :{ cityCode: string, prefectureCode: string, perPage?: string, page?: string }
    ) {
      const { data } = await useFetch<any>('/common/question/city_questions', {
        baseURL: 'https://delta.api.stg.yoriso.com',
        params: {
          city_code: cityCode,
          prefecture_code: prefectureCode,
          per_page: perPage,
          page: page,
        }
      })

      if(data.value) {
        this.questions = data.value.data
      }
    }
  }
})