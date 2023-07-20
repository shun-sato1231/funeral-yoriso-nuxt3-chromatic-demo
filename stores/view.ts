import { defineStore } from "pinia";

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

export const useViewStore = defineStore('view', {
  state: ():State => ({
    isRightDrawer: false,
    offsetTop: 0,
    snackbarParam: null,
    funeralHomeHistories: [],
    config: {
      maxDiscount: 99000,
    },
    isScrollY: false,
    inflowUrl: null,
  }),
  actions: {
    /**
     * offsetTopの更新
     */
    async updateOffsetTop(offsetTop: number) {
      this.offsetTop = offsetTop;
      this.isScrollY = true;
    },
    /**
     * Snackbarの更新
     */
    async updateSnackbarParam(snackbarParam:any) {
      this.snackbarParam = snackbarParam;
    },
    /**
     * 斎場ホール閲覧履歴の追加
     */
    async addFuneralHomeHistories({ code, name }: { code: string; name: string }) {
      if (
        !this.funeralHomeHistories.find(
          (funeralHomeHistory) => funeralHomeHistory.code === code
        )
      ) {
        this.funeralHomeHistories.push({ code: code, name: name });
      }
    },
    /**
     * 流入元URLの保存
     */
    async updateInflowUrl(url: string) {
      if (!this.inflowUrl) {
        this.inflowUrl = url;
      }
    },
    /**
     * 閲覧履歴の初期化
     * @param {*} param0
     */
    async initFuneralHomeHistories() {
      this.funeralHomeHistories = localStorage.historyFacilities
      ? JSON.parse(localStorage.historyFacilities).map((funeralHome: {facilityId: string, facilityName: string}) => {
          return {
            code: funeralHome.facilityId,
            name: funeralHome.facilityName,
          };
        })
      : [];
    },
    updateIsRightDrawer (isRightDrawer: boolean) {
      this.isRightDrawer = isRightDrawer
    }
  }
})