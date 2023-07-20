import { defineStore } from "pinia";

interface State {
  funeralHomes: Array<{ code: string; name: string }>;
}

export const useFavoriteStore = defineStore('favorite', {
  state: ():State => ({
    funeralHomes: [],
  }),
  getters: {
    /**
     * 斎場お気に入り情報取得
     * @param {*} state
     * @returns
     */
    funeralHome: (state) => (funeralHomeCode:any) => {
      return state.funeralHomes.find(
        (funeralHome) => funeralHome.code === funeralHomeCode
      );
    },
  },
  actions: {
    initFavoriteFuneralHome() {
      this.funeralHomes = localStorage.favoriteFacilities
        ? JSON.parse(localStorage.favoriteFacilities).map((funeralHome:any) => {
            return {
              code: funeralHome.facilityId,
              name: funeralHome.facilityName,
            };
          })
        : [];
    },
    toggleFuneralHome({ code, name }: { code: string; name: string }) {
      let index = this.funeralHomes.findIndex(
        (funeralHome) => funeralHome.code === code
      );
      if (index === -1) {
        this.funeralHomes.push({ code: code, name: name });
      } else {
        this.funeralHomes.splice(index, 1);
      }
  
      // 現行基盤への適用
      localStorage.favoriteFacilities = JSON.stringify(
        this.funeralHomes.map((funeralHome) => {
          return {
            facilityId: funeralHome.code,
            facilityName: funeralHome.name,
          };
        })
      );
    }
  }
})