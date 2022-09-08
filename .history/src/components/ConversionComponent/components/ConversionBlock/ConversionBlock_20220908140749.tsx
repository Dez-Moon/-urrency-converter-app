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
  const [inputRef, setInputRef] = useState() as any;
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency, selectOpen } =
    useSelector<AppRootStateType>(
      (state) => state.currency
    ) as InitialStateType;
  useEffect(() => {
    if (inputRef) inputRef.focus();
    inputRef.selectionStart = 1;
  }, [inputRef?.value]);
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

      <input
        min='0'
        value={windowsWithCurrency[props.index].value}
        onChange={(e: any) => {
          if (!inputRef) {
            setInputRef(e.target);
          }
          setValuesWindowsWithCurrencyTC(
            windowsWithCurrency,
            e.target.value,
            props.index
          )(dispatch);
        }}
      />
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
