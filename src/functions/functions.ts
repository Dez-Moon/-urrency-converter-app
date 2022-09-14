import { CurrencyType, WindowsWithCurrencyType } from "../types/types";

// Создает окна с валютами при старте страницы
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
        },
        listOfCurrenciesOpen: false,
      } as any;
      array.push(!object);
      newArray.push(object);
    });
  return newArray;
};
// Получить картинку из buffer
export const getImgFromBuffer = (buffer: Buffer) => {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  const img = "data:image/jpeg;base64," + window.btoa(binary);
  return img;
};
// Валидатор ввода
export const valueValidator = (
  value: string | any,
  maxValue: number,
  numberOfDecimals: number
) => {
  // Проверка на максимальное значение
  if (Number(value) > maxValue)
    throw Object.assign(new Error(`Максимальное значение ${maxValue}`));
  // Проверка на пустой инпут
  if (!value) return "";
  // Проверка на колличество цифр после запятой
  if (
    value.toString().includes(".") &&
    value.toString().split(".").pop().length > numberOfDecimals
  )
    throw Object.assign(new Error(""));
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
  throw Object.assign(new Error(""));
};
// Функция конвертера валют
export const changeValueInAllWindow = (
  windowsWithCurrency: Array<WindowsWithCurrencyType>,
  value: string,
  indexWindow: number
) => {
  const newArray: Array<WindowsWithCurrencyType> = [];
  windowsWithCurrency.forEach((el, index) => {
    const object = {
      ...el,
      value: value
        ? indexWindow === index
          ? value
          : String(
              (
                (Number(value) * windowsWithCurrency[indexWindow].ratio) /
                windowsWithCurrency[index].ratio
              ).toFixed(2)
            )
        : "",
      selectedCurrency: { ...el.selectedCurrency },
    };
    newArray.push(object);
  });
  return newArray;
};
// Проверка не выбрана ли уже валюта
export const checkSelectedCurrencies = (
  windowsWithCurrency: Array<WindowsWithCurrencyType>,
  currentCurrency: string,
  selectedCurrency: string
) => {
  const newArray = new Map();
  windowsWithCurrency.forEach((el) => {
    newArray.set(el.selectedCurrency.currency, el.selectedCurrency.currency);
    newArray.delete(selectedCurrency);
  });

  if (!newArray.has(currentCurrency)) return;
  else throw Object.assign(new Error(`Валюта уже выбрана`));
};
// Проверяет окна с существующими валютами, и возвращает ту, которой нет
export const getObjectWithNoSelectedCurrency = (
  currency: Array<CurrencyType>,
  windowsWithCurrency: Array<WindowsWithCurrencyType>
) => {
  if (windowsWithCurrency.length < currency.length) {
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
  } else throw Object.assign(new Error("Все доступные валюты добавлены"));
};
// Возвращает обьект с новой валютой
export const getNewObjectCurrency = (
  currency: Array<CurrencyType>,
  windowsWithCurrency: Array<WindowsWithCurrencyType>,
  newCurrencyIndex: number
) => {
  const value = windowsWithCurrency[0].value
    ? String(
        (
          Number(windowsWithCurrency[0].value) *
          (windowsWithCurrency[0].ratio /
            (currency[newCurrencyIndex].rateBuy ||
              currency[newCurrencyIndex].rateCross ||
              1))
        ).toFixed(2)
      )
    : "";
  const ratio =
    currency[newCurrencyIndex].rateBuy ||
    currency[newCurrencyIndex].rateCross ||
    1;
  const selectedCurrency = {
    index: newCurrencyIndex,
    currency: currency[newCurrencyIndex].currency,
    symbol: currency[newCurrencyIndex].symbol,
  };
  const object: WindowsWithCurrencyType = {
    ...windowsWithCurrency[newCurrencyIndex],
    value,
    ratio,
    selectedCurrency,
    listOfCurrenciesOpen: false,
  };
  return object;
};
// Увеличить отступ для указаных валют между цифрами и символом
export const getIndentForValues = (
  currency: Array<{ currency: string; values: Array<number> }>,
  currentCurrency: string,
  valueLength: number
) => {
  let value;
  if (currency.length === 0) {
    value = 55 - valueLength * 4;
  } else {
    for (let i = 0; i < currency.length; i++) {
      if (currency[i].currency === currentCurrency) {
        value = currency[i].values[0] - valueLength * currency[i].values[1];
        break;
      } else {
        value = 55 - valueLength * 4;
      }
    }
  }
  return `${value}px`;
};
