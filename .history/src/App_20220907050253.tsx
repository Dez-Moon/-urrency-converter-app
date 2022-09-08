import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { currency } from "./currency/currency";
import { CurrencyResponseType, CurrencyType } from "./types/types";

function App() {
  const [currentExchangeRate, setCurrentExchangeRate] = useState(null);
  const [currencyState, setCurrencyState] = useState(null);
  useEffect(() => {
    axios.get("https://api.monobank.ua/bank/currency").then((res) => {
      res.data.forEach((currencyRes: CurrencyResponseType) => {
        if (currency.has(String(currencyRes.currencyCodeA))) {
          const currencyCopy = {
            ...currency.get(String(currencyRes.currencyCodeA)),
          } as CurrencyType;
          currencyCopy.rateBuy = currencyRes.rateBuy;
          currencyCopy.rateSell = currencyRes.rateSell;
          currency.set(String(currencyRes.currencyCodeA), currencyCopy);
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
