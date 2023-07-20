export function useFormat() {
  const { $dayjs } = useNuxtApp();
  /**
   * フォーマット：金額
   */
  const formatPrice = (string: string) =>
    Number(string).toLocaleString() + '円';

  /**
   * フォーマット：YYYY年M月D日
   */
  const formatYMD = (string: string) => $dayjs(string).format('YYYY年M月D日');

  /**
   * フォーマット：YYYY年M月
   */
  const formatYM = (string: string) => $dayjs(string).format('YYYY年M月');

  /**
   * フォーマット：郵便番号 000-0000
   */
  const formatPostalCode = (val: string | number) => {
    if (!val) {
      return '';
    }
    if (val.toString().length === 3) {
      val += '-';
    }
    return val;
  };

  return {
    formatPrice,
    formatYMD,
    formatYM,
    formatPostalCode,
  };
}
