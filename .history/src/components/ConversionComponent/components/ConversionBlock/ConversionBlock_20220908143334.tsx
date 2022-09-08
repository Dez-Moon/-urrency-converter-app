import React, { useEffect, useState } from "react";
import arrowImg from "../../../../assets/icons/arrow-bottom.png";
import deleteImg from "../../../../assets/icons/delete.png";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../../../store/store";
import {
  deleteWindowsWithCurrencyAC,
  InitialStateType,
  setSelectOpenTC,
  setValuesWindowsWithCurrencyTC,
} from "../../../../store/currency-reducer";

type PropsType = {
  index: number;
};
const ConversionBlock = (props: PropsType) => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency, selectOpen } =
    useSelector<AppRootStateType>(
      (state) => state.currency
    ) as InitialStateType;
  const inputMargin = `${String(
    55 - windowsWithCurrency[props.index].value.length * 4
  )}px`;
  debugger;
  const inputStyle = {
    right: inputMargin,
  };
  const currentCurrency =
    currency[windowsWithCurrency[props.index].selectedCurrency.index];
  return (
    <div className='conversionBlock'>
      <div
        className='selectedCurrency'
        onClick={() => {
          setSelectOpenTC(selectOpen, props.index)(dispatch);
        }}
      >
        <div className='flagAndAbbreviation'>
          <img src={currentCurrency.flag} />
          <div>{currentCurrency.currency}</div>
        </div>
        <div>{currentCurrency.name}</div>
        <img
          src={arrowImg}
          className={!selectOpen[props.index] ? "arrowBottom" : "arrowTop"}
        />
      </div>
      <CurrencySelect index={props.index} />
      <div className={"input"}>
        <input
          min='0'
          value={windowsWithCurrency[props.index].value}
          onChange={(e: any) => {
            setValuesWindowsWithCurrencyTC(
              windowsWithCurrency,
              e.target.value,
              props.index
            )(dispatch);
          }}
        />
        {windowsWithCurrency[props.index].value && (
          <div style={inputStyle}>
            {windowsWithCurrency[props.index].selectedCurrency.symbol}
          </div>
        )}
      </div>
      {windowsWithCurrency.length > 2 && (
        <img
          src={deleteImg}
          className='deleteBtn'
          onClick={() => {
            dispatch(deleteWindowsWithCurrencyAC({ index: props.index }));
          }}
        />
      )}
    </div>
  );
};

export default ConversionBlock;
