import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import currency, { defaultCurrency } from "../currency/currency";
import {
  CurrencyResponseType,
  CurrencyType,
  WindowsWithCurrencyType,
} from "../types/types";

type InitialStateType = {
  currency: Array<CurrencyType>;
  windowsWithCurrency: Array<WindowsWithCurrencyType>;
};
const initialState: InitialStateType = {
  currency: [],
  windowsWithCurrency: [],
};
const slice = createSlice({
  name: "currency",
  initialState: initialState,
  reducers: {
    setCurrencyAC(
      state,
      action: PayloadAction<{ currency: Array<CurrencyType> }>
    ) {
      state.currency = action.payload.currency;
    },
    setWindowsWithCurrencyAC(
      state,
      action: PayloadAction<{ newArray: Array<WindowsWithCurrencyType> }>
    ) {
      state.windowsWithCurrency = action.payload.newArray;
    },
  },
});
export const CurrencyReducer = slice.reducer;

export const { setCurrencyAC, setWindowsWithCurrencyAC } = slice.actions;

export const setCurrencyTC = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get<Array<CurrencyResponseType>>(
      "https://api.monobank.ua/bank/currency"
    );
    const newArray: Array<CurrencyType> = [];
    response.data.forEach((currencyRes: CurrencyResponseType) => {
      if (newArray.length === 0) {
        const currencyCopy = {
          ...currency.get(String(currencyRes.currencyCodeB)),
        } as CurrencyType;
        newArray.push(currencyCopy);
      }
      if (currency.has(String(currencyRes.currencyCodeA))) {
        const currencyCopy = {
          ...currency.get(String(currencyRes.currencyCodeA)),
        } as CurrencyType;
        if (currencyRes.rateCross) {
          currencyCopy.rateCross = currencyRes.rateCross;
        } else {
          currencyCopy.rateBuy = currencyRes.rateBuy;
          currencyCopy.rateSell = currencyRes.rateSell;
        }
        let overlap = 0;
        newArray.forEach((el) => {
          if (el.code === currencyCopy.code) {
            overlap++;
          }
        });
        if (overlap === 0) {
          newArray.push(currencyCopy);
        }
      }
    });
    debugger;
    dispatch(setCurrencyAC({ currency: newArray }));
  } catch {
    dispatch(setCurrencyAC({ currency: defaultCurrency }));
  }
};
export const setWindowsWithCurrencyTC =
  (array: Array<WindowsWithCurrencyType>) => (dispatch: Dispatch) => {};
