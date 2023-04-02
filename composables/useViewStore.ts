import { Ref, readonly } from 'vue';

interface State {
  isRightDrawer: boolean;
  offsetTop: number;
  snackbarParam: null | any;
  funeralHomeHistories: Array<{ code: string; name: string }>;
  config: {
    maxDiscount: number;
  };
  isScrollY: boolean;
  inflowUrl: null | string;
}

export const useViewStore = () => {
  const state = useState<State>('view', () => ({
    isRightDrawer: false,
    offsetTop: 0,
    snackbarParam: null,
    funeralHomeHistories: [],
    config: {
      maxDiscount: 99000,
    },
    isScrollY: false,
    inflowUrl: null,
  }));
  return {
    state: readonly(state),
    initFuneralHomeHistories: () => initFuneralHomeHistories(state),
    updateIsRightDrawer: (isRightDrawer: boolean) =>
      updateIsRightDrawer(state, isRightDrawer),
    updateOffsetTop: (offsetTop: number) => updateOffsetTop(state, offsetTop),
    updateSnackbarParam: (snackbarParam: any | null) =>
      updateSnackbarParam(state, snackbarParam),
    addFuneralHomeHistories: ({ code, name }: { code: string; name: string }) =>
      addFuneralHomeHistories(state, { code, name }),
    updateInflowUrl: (inflowUrl: string | null) =>
      updateInflowUrl(state, inflowUrl),
  };
};

const initFuneralHomeHistories = (state: Ref<State>) => {
  state.value.funeralHomeHistories = localStorage.historyFacilities
    ? JSON.parse(localStorage.historyFacilities).map((funeralHome: any) => {
        return {
          code: funeralHome.facilityId,
          name: funeralHome.facilityName,
        };
      })
    : [];
};

const updateIsRightDrawer = (state: Ref<State>, isRightDrawer: boolean) => {
  state.value.isRightDrawer = isRightDrawer;
};

const updateOffsetTop = (state: Ref<State>, offsetTop: number) => {
  state.value.offsetTop = offsetTop;
  state.value.isScrollY = true;
};

const updateSnackbarParam = (state: Ref<State>, snackbarParam: any | null) => {
  state.value.snackbarParam = snackbarParam;
};

const addFuneralHomeHistories = (
  state: Ref<State>,
  { code, name }: { code: string; name: string }
) => {
  if (
    !state.value.funeralHomeHistories.find(
      (funeralHomeHistory) => funeralHomeHistory.code === code
    )
  ) {
    state.value.funeralHomeHistories.push({ code: code, name: name });
  }
};

const updateInflowUrl = (state: Ref<State>, inflowUrl: string | null) => {
  if (!state.value.inflowUrl) {
    state.value.inflowUrl = inflowUrl;
  }
};
