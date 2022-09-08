import flag980 from "../assets/flags/980.png";
import flag840 from "../assets/flags/840.png";
import flag978 from "../assets/flags/978.png";
import flag985 from "../assets/flags/985.png";
import flag203 from "../assets/flags/203.png";
import flag826 from "../assets/flags/826.png";
import flag376 from "../assets/flags/376.png";
import flag156 from "../assets/flags/156.png";
import flag392 from "../assets/flags/392.png";
import flag949 from "../assets/flags/949.png";
import { CurrencyType } from "../types/types";

const currency = new Map<string, CurrencyType>([
  [
    "980",
    {
      code: 980,
      currency: "UAH",
      name: "Украинская гривна",
      flag: flag980,
      symbol: "₴",
    },
  ],
  [
    "840",
    {
      code: 840,
      currency: "USD",
      name: "Доллар США",
      flag: flag840,
      symbol: "$",
    },
  ],
  [
    "978",
    { code: 978, currency: "EUR", name: "Евро", flag: flag978, symbol: "€" },
  ],
  [
    "985",
    {
      code: 985,
      currency: "PLN",
      name: "Польский злотый",
      flag: flag985,
      symbol: "zł",
    },
  ],
  [
    "203",
    {
      code: 203,
      currency: "CZK",
      name: "Чешская крона",
      flag: flag203,
      symbol: "Kč",
    },
  ],
  [
    "826",
    {
      code: 826,
      currency: "GBP",
      name: "Фунт стерлингов",
      flag: flag826,
      symbol: "£",
    },
  ],
  [
    "376",
    {
      code: 376,
      currency: "ILS",
      name: "Израильский шекель",
      flag: flag376,
      symbol: "₪",
    },
  ],
  [
    "156",
    {
      code: 156,
      currency: "CNY",
      name: "Китайский юань",
      flag: flag156,
      symbol: "¥",
    },
  ],
  [
    "392",
    {
      code: 392,
      currency: "JPY",
      name: "Японская йена",
      flag: flag392,
      symbol: "₴",
    },
  ],
  [
    "949",
    {
      code: 949,
      currency: "TRY",
      name: "Турецкая лира",
      flag: flag949,
      symbol: "₴",
    },
  ],
]);

export default currency;
