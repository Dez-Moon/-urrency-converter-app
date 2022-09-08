import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { currency } from "./currency/currency";
import { CurrencyResponseType } from "./types/types";

function App() {
  const [currentExchangeRate, setCurrentExchangeRate] = useState(null);
  useEffect(() => {
    axios.get("https://api.monobank.ua/bank/currency").then((res) => {
      res.data.forEach((currencyRes: CurrencyResponseType) => {
        if (currency.has(String(currencyRes.currencyCodeA))) {
          currency.set(String(currencyRes.currencyCodeA), {
            ...currency.get(String(currencyRes.currencyCodeA)),
            currencyCodeA: currencyRes.currencyRes,
          });
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
