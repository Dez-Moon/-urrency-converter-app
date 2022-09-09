import React from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteWindowsWithCurrencyAC,
  InitialStateType,
  setListOfCurrenciesOpenAC,
  setValuesWindowsWithCurrencyTC,
} from "../../../../store/currency-reducer";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import { AppRootStateType } from "../../../../store/store";
import arrowImg from "../../../../assets/icons/arrow-bottom.png";
import deleteImg from "../../../../assets/icons/delete.png";
import { getIndentForValues } from "../../../../functions/functions";

type PropsType = {
  index: number;
};
const ConversionBlock = React.memo((props: PropsType) => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  const inputMargin = getIndentForValues(
    [
      { currency: "CZK", values: [55, 5] },
      { currency: "ILS", values: [55, 5] },
    ],
    windowsWithCurrency[props.index].selectedCurrency.currency,
    windowsWithCurrency[props.index].value.length
  );
  const inputStyle: any = {
    right: inputMargin,
  };
  const currentCurrency =
    currency[windowsWithCurrency[props.index].selectedCurrency.index];

  return (
    <div className='conversionBlock'>
      <div
        className='selectedCurrency'
        onClick={async () => {
          setTimeout(() => {
            const value = windowsWithCurrency[props.index].listOfCurrenciesOpen
              ? false
              : true;
            dispatch(setListOfCurrenciesOpenAC({ index: props.index, value }));
          }, 0);
        }}
      >
        <div className='flagAndAbbreviation'>
          <img src={currentCurrency.flag} />
          <div>{currentCurrency.currency}</div>
        </div>
        <div className='name'>{currentCurrency.name}</div>
        <img
          src={arrowImg}
          className={
            !windowsWithCurrency[props.index].listOfCurrenciesOpen
              ? "arrowBottom"
              : "arrowTop"
          }
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
});

export default ConversionBlock;
