import { Dispatch } from "redux";
import { CurrencyType, WindowsWithCurrencyType } from "../types/types";

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
  value: string | any,
  maxValue: number,
  numberOfDecimals: number
) => {
  // Проверка на максимальное значение
  if (Number(value) > maxValue) throw `Максимальное значение ${maxValue}`;
  // Проверка на пустой инпут
  if (!value) return "";
  // Проверка на колличество цифр после запятой
  if (
    value.toString().includes(".") &&
    value.toString().split(".").pop().length > numberOfDecimals
  )
    throw "";
  // Проверки для удобства ввода
  if (value[0] === "0" && !!Number(value[1])) {
    return value[1];
  }
  if (value === ".") {
    const a = value.split("");
    a.unshift("0");
    return a.join("");
  }
  if (value === "0" || !!Number(value) || value === "0.") return value;
  throw "";
};

export const getWindowsWithCurrencyOnStartApp = (
  currency: Array<CurrencyType>,
  countWindows: number
) => {
  const newArray: Array<WindowsWithCurrencyType> = [];
  const array: Array<boolean> = [];
  currency
    .slice()
    .splice(0, countWindows)
    .forEach((currency, index) => {
      const object = {
        value: "",
        ratio: currency.rateBuy || currency.rateCross || 1,
        selectedCurrency: {
          index,
          currency: currency.currency,
          symbol: currency.symbol,
          listOfCurrenciesOpen: false,
        },
      } as any;
      array.push(!object);
      newArray.push(object);
    });
  return newArray;
};
export const getObjectWithNoSelectedCurrency = (
  currency: Array<CurrencyType>,
  windowsWithCurrency: Array<WindowsWithCurrencyType>
) => {
  const newArray = new Map();
  windowsWithCurrency.forEach((el) => {
    newArray.set(el.selectedCurrency.currency, el.selectedCurrency.currency);
  });
  for (let i = 0; i < currency.length; i++) {
    if (!newArray.has(currency[i].currency)) {
      const ratio =
        windowsWithCurrency[0].ratio /
        (currency[i].rateBuy || currency[i].rateCross || 1);
      const object = {
        value: windowsWithCurrency[0].value
          ? String((Number(windowsWithCurrency[0].value) * ratio).toFixed(2))
          : "",
        ratio: currency[i].rateBuy || currency[i].rateCross || 1,
        selectedCurrency: {
          index: i,
          currency: currency[i].currency,
          symbol: currency[i].symbol,
        },
      } as any;
      return object;
    }
  }
};
