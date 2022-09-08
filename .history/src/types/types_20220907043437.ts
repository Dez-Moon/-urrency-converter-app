import React from "react";

export const CurrencyType = {
    { code: 980, currency: "UAH", name: "Украинская гривна", flag: flag980 },

}
export type CurrencyResponseType = {
  currencyCodeA: number;
  currencyCodeB: number;
  date: number;
  rateBuy: number;
  rateSell: number;
};
