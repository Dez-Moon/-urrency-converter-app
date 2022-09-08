import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import ConversionComponent from "./components/ConversionComponent/ConversionComponent";
import Header from "./components/Header/Header";
import currencyBase from "./currency/currency";
import {
  InitialStateType,
  setClickElementAC,
  setCurrencyTC,
  setSelectOpenTC,
} from "./store/currency-reducer";
import { AppRootStateType } from "./store/store";
import { CurrencyResponseType, CurrencyType } from "./types/types";

function App() {
  const dispatch = useDispatch();
  const { selectOpen, clickElement } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  useEffect(() => {
    const thunk = setCurrencyTC();
    thunk(dispatch);
  }, []);
  return (
    <div
      className='App'
      onClick={(e: any) => {
        if (clickElement === "arrow") {
          dispatch(setClickElementAC({ element: "" }));
          setSelectOpenTC(selectOpen, null)(dispatch);
        } else {
          dispatch(setClickElementAC({ element: "" }));
          setSelectOpenTC(selectOpen, null)(dispatch);
        }
      }}
    >
      <Header />
      <ConversionComponent />
    </div>
  );
}

export default App;