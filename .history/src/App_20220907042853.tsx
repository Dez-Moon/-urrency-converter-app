import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { CurrencyResponseType } from "./types/types";

function App() {
  const [currentExchangeRate, setCurrentExchangeRate] = useState(null);

  useEffect(() => {
    axios.get <
      AxiosResponse<CurrencyResponseType>(
        "https://api.monobank.ua/bank/currency"
      ).then((res: { data: CurrencyResponseType }) => {
        res.data.forEach((currency: CurrencyResponseType) => {
          debugger;
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
