import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import ConversionComponent from "./components/ConversionComponent/ConversionComponent";
import Header from "./components/Header/Header";
import currencyBase from "./currency/currency";
import { setCurrencyTC } from "./store/currency-reducer";
import { AppRootStateType } from "./store/store";
import { CurrencyResponseType, CurrencyType } from "./types/types";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const thunk = setCurrencyTC();
    thunk(dispatch);
  }, []);
  return (
    <div className='App'>
      <Header />
      <ConversionComponent />
    </div>
  );
}

export default App;
