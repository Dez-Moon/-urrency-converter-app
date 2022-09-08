import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CurrencyResponseType, CurrencyType } from "../types/types";

type InitialStateType = {
  currency: Array<CurrencyType>;
};
const slice = createSlice({
  name: "currency",
  initialState: { currency: [] } as InitialStateType,
  reducers: {
    setCurrencyAC(
      state,
      action: PayloadAction<{ currency: Array<CurrencyType> }>
    ) {
      state.currency = action.payload.currency;
    },
  },
});
export const VideosReducer = slice.reducer;

export const { setCurrencyAC } = slice.actions;

export const setCurrencyTC = () => async (dispatch: Dispatch) => {
  const response = await axios.get<Array<CurrencyResponseType>>(
    "https://api.monobank.ua/bank/currency"
  );
  const newArray: Array<CurrencyType> = [];
  response.data.forEach((currencyRes: CurrencyResponseType) => {
    if (newArray.length === 0) {
      const currencyCopy = {
        ...currencyBase.get(String(currencyRes.currencyCodeB)),
      } as CurrencyType;
      newArray.push(currencyCopy);
    }
    if (currencyBase.has(String(currencyRes.currencyCodeA))) {
      const currencyCopy = {
        ...currencyBase.get(String(currencyRes.currencyCodeA)),
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
  setCurrency(newArray);
};
