export type CurrencyType = {
  code: number;
  currency: string;
  name: string;
  flag: string;
  symbol: string;
  rateBuy?: number;
  rateSell?: number;
  rateCross?: number;
};

export type CurrencyResponseType = {
  currencyCodeA: number;
  currencyCodeB: number;
  date: number;
  rateBuy?: number;
  rateSell?: number;
  rateCross?: number;
};

export type WindowsWithCurrencyType = {
  value: string;
  ratio: number;
  selectedCurrency: { index: number; currency: string };
};
