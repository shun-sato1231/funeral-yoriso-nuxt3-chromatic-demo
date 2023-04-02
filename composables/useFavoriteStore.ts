import { Ref, readonly } from 'vue';

interface State {
  funeralHomes: Array<{ code: string; name: string }>;
}

export const useFavoriteStore = () => {
  const state = useState<State>('funeralHome', () => ({
    funeralHomes: [],
  }));
  return {
    state: readonly(state),
    initFavoriteFuneralHome: () => initFavoriteFuneralHome(state),
    toggleFuneralHome: ({ code, name }: { code: string; name: string }) =>
      toggleFuneralHome(state, { code, name }),
  };
};

const initFavoriteFuneralHome = (state: Ref<State>) => {
  state.value.funeralHomes = localStorage.favoriteFacilities
    ? JSON.parse(localStorage.favoriteFacilities).map((funeralHome: any) => {
        return {
          code: funeralHome.facilityId,
          name: funeralHome.facilityName,
        };
      })
    : [];
};

const toggleFuneralHome = (
  state: Ref<State>,
  { code, name }: { code: string; name: string }
) => {
  let index = state.value.funeralHomes.findIndex(
    (funeralHome) => funeralHome.code === code
  );
  if (index === -1) {
    state.value.funeralHomes.push({ code: code, name: name });
  } else {
    state.value.funeralHomes.splice(index, 1);
  }

  // 現行基盤への適用
  localStorage.favoriteFacilities = JSON.stringify(
    state.value.funeralHomes.map((funeralHome) => {
      return {
        facilityId: funeralHome.code,
        facilityName: funeralHome.name,
      };
    })
  );
};
