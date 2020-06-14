export const combineWithDot = (currency: number) =>
  `${currency} `.replace(/\d(?=(\d{3})+\ )/g, '$&,');
