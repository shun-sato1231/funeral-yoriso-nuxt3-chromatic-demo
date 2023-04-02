import { Ref, readonly } from "vue";

interface State {
  isRightDrawer: null | boolean;
  offsetTop: number;
  snackbarParam: null | any;
  funeralHomeHistories: Array<{ code: string; name: string }>;
  config: {
    maxDiscount: number;
  };
  isScrollY: boolean;
  inflowUrl: null | string;
  count: number;
}

export const useCounterStore = () => {
  const state = useState<State>("counter_state", () => ({
    isRightDrawer: null,
    offsetTop: 0,
    snackbarParam: null,
    funeralHomeHistories: [],
    config: {
      maxDiscount: 99000,
    },
    isScrollY: false,
    inflowUrl: null,
    count: 0,
  }));
  return {
    state: readonly(state),
    countUp: countUp(state),
    setCount: setCount(state),
    updateInflowUrl: (inflowUrl: string | null) =>
      updateInflowUrl(state, inflowUrl),
  };
};

// Sets the count to a given number
const setCount = (state: Ref<State>) => {
  return (count: number) => (state.value.count = count);
};

// Increments the count
const countUp = (state: Ref<State>) => {
  return () => state.value.count++;
};

const initFuneralHomeHistories = (state: Ref<State>) => {
  state.value.funeralHomeHistories = localStorage.historyFacilities
    ? JSON.parse(localStorage.historyFacilities).map((funeralHome) => {
        return {
          code: funeralHome.facilityId,
          name: funeralHome.facilityName,
        };
      })
    : [];
};

const updateIsRightDrawer = (
  state: Ref<State>,
  isRightDrawer: boolean | null
) => {
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
