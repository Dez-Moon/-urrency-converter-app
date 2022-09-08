import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import currencyBase from "./currency/currency";
import { CurrencyResponseType, CurrencyType } from "./types/types";

function App() {
  const [currentExchangeRate, setCurrentExchangeRate] = useState(null);
  const [currency, setCurrency] = useState(null) as any;
  if (currency) {
    debugger;
  }
  useEffect(() => {
    axios.get("https://api.monobank.ua/bank/currency").then((res) => {
      res.data.forEach((currencyRes: CurrencyResponseType) => {
        if (currencyBase.has(String(currencyRes.currencyCodeA))) {
          const currencyCopy = {
            ...currencyBase.get(String(currencyRes.currencyCodeA)),
          } as CurrencyType;
          currencyCopy.rateBuy = currencyRes.rateBuy;
          currencyCopy.rateSell = currencyRes.rateSell;
          debugger;
          currencyBase.set(String(currencyRes.currencyCodeA), currencyCopy);
        }
      });
      setCurrency(currencyBase);
    });
  });
  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
