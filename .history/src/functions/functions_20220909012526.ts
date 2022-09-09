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

export const getNumberDigitsAfterPoint = (x: any) =>
  x.toString().includes(".") ? x.toString().split(".").pop().length : 0;

export const valueValidator = (value: string | any, maxValue: number) => {
  if (Number(value) > maxValue) throw `Максимальное значение ${maxValue}`;
  if (!value) return "";
  if (value[0] === "0" && !!Number(value[1])) return value[1];
  if (
    value.toString().includes(".") &&
    value.toString().split(".").pop().length < 2
  )
    throw "";
  if (value === ".") {
    const a = value.split("");
    a.unshift("0");
    return a.join("");
  }
};
