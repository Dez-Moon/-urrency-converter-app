import React from "react";

export type CurrencyType = {
  code: number;
  currency: string;
  name: string;
  flag: File;
  rateBuy?: number;
  rateSell?: number;
};

export type CurrencyResponseType = {
  currencyCodeA: number;
  currencyCodeB: number;
  date: number;
  rateBuy: number;
  rateSell: number;
};
