import { defineStore } from "pinia";

interface State {
  phone: string | null
}

export const useCommonConfigStore = defineStore('config', {
  state: ():State => ({
    phone: null
  }),
  actions: {
    async initPhone() {
      const inflowUrl = 'https://www.yoriso.com/sogi/urgency/'
      const { data } = await useFetch<any>('/common/config/free_dials', {
        baseURL: 'https://delta.api.stg.yoriso.com',
        params: { inflow_url: inflowUrl },
      })

      if(data.value) {
        this.phone = data.value.data.telephone_number.phone
      }
    }
  }
})