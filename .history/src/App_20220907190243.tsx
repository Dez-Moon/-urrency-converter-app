import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ConversionComponent from "./components/ConversionComponent/ConversionComponent";
import Header from "./components/Header/Header";
import currencyBase from "./currency/currency";
import { setCurrencyTC } from "./store/currency-reducer";
import { AppRootStateType } from "./store/store";
import { CurrencyResponseType, CurrencyType } from "./types/types";

function App() {
  const dispatch = useDispatch();
  const currency = useSelector<AppRootStateType<Array<CurrencyType>>>(
    (state) => state.currency
  );
  useEffect(() => {
    const thunk = setCurrencyTC();
    thunk(dispatch);
  }, []);
  useEffect(() => {
    const newArray: Array<CurrencyType> = [];
    axios
      .get<Array<CurrencyResponseType>>("https://api.monobank.ua/bank/currency")
      .then((res) => {
        res.data.forEach((currencyRes: CurrencyResponseType) => {
          if (newArray.length === 0) {
            const currencyCopy = {
              ...currencyBase.get(String(currencyRes.currencyCodeB)),
            } as CurrencyType;
            newArray.push(currencyCopy);
          }
          if (currencyBase.has(String(currencyRes.currencyCodeA))) {
            const currencyCopy = {
              ...currencyBase.get(String(currencyRes.currencyCodeA)),
            } as CurrencyType;
            if (currencyRes.rateCross) {
              currencyCopy.rateCross = currencyRes.rateCross;
            } else {
              currencyCopy.rateBuy = currencyRes.rateBuy;
              currencyCopy.rateSell = currencyRes.rateSell;
            }
            let overlap = 0;
            newArray.forEach((el) => {
              if (el.code === currencyCopy.code) {
                overlap++;
              }
            });
            if (overlap === 0) {
              newArray.push(currencyCopy);
            }
          }
        });
        setCurrency(newArray);
      });
  }, []);
  return (
    <div className='App'>
      <Header />
      <ConversionComponent currency={currency} />
    </div>
  );
}

export default App;
