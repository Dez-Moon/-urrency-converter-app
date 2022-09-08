import React from "react";
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
  const currentCurrency =
    currency[windowsWithCurrency[props.index].selectedCurrency.index];
  return (
    <div
      className='conversionBlock'
      onClick={() => {
        setSelectOpenTC(selectOpen, props.index)(dispatch);
      }}
    >
      <div
        className='selectedCurrency'
        onClick={() => {
          setSelectOpenTC(selectOpen, props.index);
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
