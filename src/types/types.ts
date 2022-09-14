export type CurrencyType = {
  code: number;
  currency: string;
  flag: { type: string; data: Buffer };
  name: string;
  symbol: string;
  rateBuy?: number;
  rateSell?: number;
  rateCross?: number;
};

export type WindowsWithCurrencyType = {
  value: string;
  ratio: number;
  selectedCurrency: { index: number; currency: string; symbol: string };
  listOfCurrenciesOpen: boolean;
};
