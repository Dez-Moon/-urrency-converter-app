import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import currencyBase from "./currency/currency";
import { CurrencyResponseType, CurrencyType } from "./types/types";

function App() {
  const [currentExchangeRate, setCurrentExchangeRate] = useState(null);
  const [currency, setCurrency] = useState(currencyBase);

  useEffect(() => {
    axios.get("https://api.monobank.ua/bank/currency").then((res) => {
      res.data.forEach((currencyRes: CurrencyResponseType) => {
        if (currency.has(String(currencyRes.currencyCodeA))) {
          const currencyCopy = {
            ...currency.get(String(currencyRes.currencyCodeA)),
          } as CurrencyType;
          currencyCopy.rateBuy = currencyRes.rateBuy;
          currencyCopy.rateSell = currencyRes.rateSell;
          currencyBase.set(String(currencyRes.currencyCodeA), currencyCopy);
          debugger;
        }
      });
    });
  });
  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
