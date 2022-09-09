import { Dispatch } from "redux";
import { WindowsWithCurrencyType } from "../types/types";

export const checkSelectedCurrencies = (
  windowsWithCurrency: Array<WindowsWithCurrencyType>,
  currency: string,
  selectedCurrency: string
) => {
  const newArray = new Map();
  windowsWithCurrency.forEach((el) => {
    newArray.set(el.selectedCurrency.currency, el.selectedCurrency.currency);
    newArray.delete(selectedCurrency);
  });

  if (!newArray.has(currency)) return true;
  else return false;
};

export const valueValidator = (
  value: string,
  dispatch: Dispatch,
  onClick: any
) => {
  if (Number(value) > 1000000000) {
    dispatch(onClick);
    return false;
  }
  if (!value) return true;
  if (
    (value[0] === "0" && value[1] === "." && value.length === 2) ||
    value === "0"
  )
    return true;

  return !!Number(value);
};

export const getNumberDigitsAfterPoint = (x: any) =>
  x.toString().includes(".") ? x.toString().split(".").pop().length : 0;

const valueValidator1 = (value: string, maxValue: number) => {
  if (Number(value) > maxValue) throw `Максимальное значение ${maxValue}`;
  if (!value) return "";
};
