import { reactive, toRefs, ref } from 'vue';
import { FreeDial } from '~/types/api/freeDial';

interface State {
  phone: null | string;
}

export function useCommonConfigStore() {
  const state = reactive<State>({
    phone: null,
  });

  async function initPhone() {
    if (state.phone) {
      return;
    }

    const inflowUrl = 'https://www.yoriso.com/sogi/urgency/';
    const response = ref<FreeDial | null>(null);

    await useFetch('/common/config/free_dials', {
      baseURL: 'https://delta.api.stg.yoriso.com',
      params: { inflow_url: inflowUrl },
      onResponse({ request, response: res, options }) {
        response.value = res._data;
      },
    });

    if (response.value) {
      state.phone = response.value.data.telephone_number.phone;
    }
  }

  return {
    ...toRefs(state),
    initPhone,
  };
}
