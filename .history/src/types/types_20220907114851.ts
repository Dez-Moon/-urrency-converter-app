import React from "react";

export type CurrencyType = {
  code: string;
  currency: string;
  name: string;
  flag: string;
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
