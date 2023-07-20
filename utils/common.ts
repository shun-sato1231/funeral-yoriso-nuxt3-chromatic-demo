export function useCommon() {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();

  /**
   * 現在のURLにマッチしているか判定
   */
  const isMatchUrl = (url: string) => url === route.path;

  /**
   * 遷移先URL取得
   */
  const to = (url: string) => {
    if (!url) {
      return '';
    }
    return url.startsWith('http') ? url : '/sogi' + url;
  };

  /**
   * アンカーtarget取得
   */
  const anchorTarget = (url: string) => {
    if (!url) {
      return '';
    }
    return url.startsWith('http') ? '_blank' : '';
  };

  /**
   * 画像URLフルパス取得
   */
  const image = (path: string) => {
    return runtimeConfig.public.contentURL + '/' + path;
  };

  /**
   * 全角 → 半角（英数字）
   */
  const replaceFullToHalf = (str: string) => {
    return str.replace(/[！-～]/g, function (s: string) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    });
  };

  /**
   * 切り捨て
   */
  const floorDecimal = (value: number, n: number) =>
    Math.floor(value * Math.pow(10, n)) / Math.pow(10, n);

  return {
    isMatchUrl,
    to,
    anchorTarget,
    image,
    replaceFullToHalf,
    floorDecimal,
  };
}
