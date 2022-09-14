import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CurrencyType, WindowsWithCurrencyType } from "../types/types";
import { v4 } from "uuid";
import {
  changeValueInAllWindow,
  checkSelectedCurrencies,
  getNewObjectCurrency,
  getObjectWithNoSelectedCurrency,
  getWindowsWithCurrencyOnStartApp,
  valueValidator,
} from "../functions/functions";

export type InitialStateType = {
  currency: Array<CurrencyType>;
  windowsWithCurrency: Array<WindowsWithCurrencyType>;
  errors: Array<{ error: string; index: string }>;
  appLoaded: boolean;
};
const initialState: InitialStateType = {
  currency: [],
  windowsWithCurrency: [],
  errors: [],
  appLoaded: false,
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
    addWindowsWithCurrencyAC(
      state,
      action: PayloadAction<{ object: WindowsWithCurrencyType }>
    ) {
      state.windowsWithCurrency.push(action.payload.object);
    },
    setListOfCurrenciesOpenAC(
      state,
      action: PayloadAction<{
        index: number | null;
        value: boolean;
      }>
    ) {
      if (action.payload.index === null) {
        state.windowsWithCurrency.forEach((el) => {
          el.listOfCurrenciesOpen = action.payload.value;
        });
      } else {
        state.windowsWithCurrency[action.payload.index].listOfCurrenciesOpen =
          action.payload.value;
      }
    },
    setSelectedCurrencyAC(
      state,
      action: PayloadAction<{
        object: WindowsWithCurrencyType;
        index: number;
      }>
    ) {
      state.windowsWithCurrency.splice(
        action.payload.index,
        1,
        action.payload.object
      );
    },
    deleteWindowsWithCurrencyAC(
      state,
      action: PayloadAction<{ index: number }>
    ) {
      state.windowsWithCurrency.splice(action.payload.index, 1);
    },

    addErrorAC(
      state,
      action: PayloadAction<{
        error: string;
      }>
    ) {
      state.errors.push({ error: action.payload.error, index: v4() });
    },
    deleteErrorAC(
      state,
      action: PayloadAction<{
        index: string;
      }>
    ) {
      state.errors.forEach((error, index) => {
        if (error.index === action.payload.index) state.errors.splice(index, 1);
      });
    },
    setAppLoadedAC(
      state,
      action: PayloadAction<{
        value: boolean;
      }>
    ) {
      state.appLoaded = action.payload.value;
    },
  },
});
export const CurrencyReducer = slice.reducer;

export const {
  setCurrencyAC,
  setWindowsWithCurrencyAC,
  addWindowsWithCurrencyAC,
  setListOfCurrenciesOpenAC,
  setSelectedCurrencyAC,
  deleteWindowsWithCurrencyAC,
  addErrorAC,
  deleteErrorAC,
  setAppLoadedAC,
} = slice.actions;

export const setCurrencyTC = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get<Array<CurrencyType>>(
      "https://api-current-currency.herokuapp.com/"
    );
    dispatch(setCurrencyAC({ currency: response.data }));
    createWindowsWithCurrencyTC(response.data)(dispatch);
  } catch (error: any) {
    dispatch(addErrorAC({ error }));
  }
  setTimeout(() => {
    dispatch(setAppLoadedAC({ value: true }));
  }, 1000);
};
export const createWindowsWithCurrencyTC =
  (currency: Array<CurrencyType>) => (dispatch: Dispatch) => {
    try {
      // Создаем окна с валютами при старте
      const newArray = getWindowsWithCurrencyOnStartApp(currency, 2);
      dispatch(setWindowsWithCurrencyAC({ newArray }));
    } catch (error: any) {
      dispatch(addErrorAC({ error }));
    }
  };

export const addWindowsWithCurrencyTC =
  (
    currency: Array<CurrencyType>,
    windowsWithCurrency: Array<WindowsWithCurrencyType>
  ) =>
  (dispatch: Dispatch) => {
    try {
      const object = getObjectWithNoSelectedCurrency(
        currency,
        windowsWithCurrency
      );
      dispatch(addWindowsWithCurrencyAC({ object }));
    } catch (error: any) {
      if (error.message)
        dispatch(addErrorAC({ error: "Все доступные валюты добавлены" }));
    }
  };

export const setValuesWindowsWithCurrencyTC =
  (
    windowsWithCurrency: Array<WindowsWithCurrencyType>,
    value: string,
    indexWindow: number
  ) =>
  (dispatch: Dispatch) => {
    try {
      // Валидируем value
      value = valueValidator(value, 1000000000, 2);
      // Изменяем value во всех окнах
      const newArray = changeValueInAllWindow(
        windowsWithCurrency,
        value,
        indexWindow
      );
      dispatch(setWindowsWithCurrencyAC({ newArray }));
    } catch (error: any) {
      if (error.message) dispatch(addErrorAC({ error: error.message }));
    }
  };

export const setSelectedCurrencyTC =
  (
    windowsWithCurrency: Array<WindowsWithCurrencyType>,
    currency: Array<CurrencyType>,
    indexWindow: number,
    newCurrencyIndex: number,
    newCurrencyName: string
  ) =>
  (dispatch: Dispatch) => {
    try {
      // Проверяем что валюта не выбрана в других окнах
      checkSelectedCurrencies(
        windowsWithCurrency,
        newCurrencyName,
        windowsWithCurrency[indexWindow].selectedCurrency.currency
      );
      // Получаем окно с новой валютой
      const object = getNewObjectCurrency(
        currency,
        windowsWithCurrency,
        newCurrencyIndex
      );
      dispatch(setSelectedCurrencyAC({ object, index: indexWindow }));
    } catch (error: any) {
      if (error.message) dispatch(addErrorAC({ error: error.message }));
    }
  };
