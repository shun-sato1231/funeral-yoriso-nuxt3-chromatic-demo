export default ({ app, route, store }, inject) => {
  /**
   * ドット記法のオブジェクト取得
   */
  inject("obj", (object, keys) => {
    return keys.split(".").reduce(function (o, k) {
      return (o || {})[k];
    }, object);
  });
  /**
   * Snackbar表示
   */
  inject("snackbar", (snackbarParam) => {
    store.dispatch("view/updateSnackbarParam", snackbarParam);
  });
  /**
   * gtmClick
   */
  inject("gtmClick", (category, action, label) => {
    app.$gtm.push({
      event: "analytics",
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
    });
  });
  /**
   * 切り捨て
   */
  inject("floorDecimal", (value, n) => {
    return Math.floor(value * Math.pow(10, n)) / Math.pow(10, n);
  });
  inject("isSpContent", (value) => {
    return value.breakpoint.name === "xs" || value.breakpoint.name === "sm";
  });
  /**
   * 後々多言語化した時用
   */
  inject("st", (text) => {
    return text;
  });
  /**
   * 遷移先URL取得
   */
  inject("to", (url) => {
    if (!url) {
      return "";
    }
    return url.startsWith("http") ? url : "/sogi" + url;
  });
  /**
   * アンカーtarget取得
   */
  inject("anchorTarget", (url) => {
    if (!url) {
      return "";
    }
    return url.startsWith("http") ? "_blank" : "";
  });
  /**
   * 画像URLフルパス取得
   */
  inject("image", (path) => {
    return app.$config.contentURL + "/" + path;
  });
  /**
   * 現在のURLにマッチしているか判定
   */
  inject("isMatchUrl", (url) => {
    return url === route.path;
  });
  /**
   * 全角 → 半角（英数字）
   */
  inject("replaceFullToHalf", (str) => {
    return str.replace(/[！-～]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    });
  });
  /**
   * head情報の取得
   */
  inject("getHead", ({ title, description, url, image, ogType, canonical }) => {
    let result = {
      meta: [],
      link: [],
    };

    // タイトルの設定
    if (title) {
      result.title = title;
      result.meta.push({
        hid: "og:title",
        property: "og:title",
        content: title,
      });
    }

    // 説明の設定
    if (description) {
      result.meta.push({
        hid: "description",
        name: "description",
        content: description,
      });
      result.meta.push({
        hid: "og:description",
        property: "og:description",
        content: description,
      });
    }

    // URLの設定
    if (url) {
      result.meta.push({
        hid: "og:url",
        property: "og:url",
        content: url,
      });
    }

    // 画像の設定
    if (image) {
      result.meta.push({
        hid: "og:image",
        property: "og:image",
        content: image,
      });
    }

    // og:typeの設定
    if (ogType) {
      result.meta.push({
        hid: "og:type",
        property: "og:type",
        content: ogType,
      });
    }

    // canonicalの設定
    if (canonical) {
      result.link.push({
        hid: "canonical",
        rel: "canonical",
        href: canonical,
      });
    }

    return result;
  });
};
