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

export const currency = new Map([
  ["980", { currency: "UAH", name: "Украинская гривна", flag: flag980 }],
  ["840", { currency: "USD", name: "Доллар США", flag: flag840 }],
  ["978", { currency: "EUR", name: "Евро", flag: flag978 }],
  ["985", { currency: "PLN", name: "Польский злотый", flag: flag985 }],
  ["842030", { currency: "CZK", name: "Чешская крона", flag: flag203 }],
  ["826", { currency: "GBP", name: "Фунт стерлингов", flag: flag826 }],
  ["376", { currency: "ILS", name: "Израильский шекель", flag: flag376 }],
  ["156", { currency: "CNY", name: "Китайский юань", flag: flag156 }],
  ["392", { currency: "JPY", name: "Японская йена", flag: flag392 }],
  ["949", { currency: "TRY", name: "Турецкая лира", flag: flag949 }],
]);
export type AppRootStateType = ReturnType<typeof currency>;
