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
import {
  getImgFromBuffer,
  getIndentForValues,
} from "../../../../functions/functions";

type PropsType = {
  index: number;
};
const ConversionBlock = React.memo((props: PropsType) => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency } = useSelector<
    AppRootStateType,
    InitialStateType
  >((state) => state.currency);

  // Настраиваем отступ между value в инпуте и символом, с исключением(для валют с широким символом)
  const inputMargin = getIndentForValues(
    [
      { currency: "CZK", values: [50, 4.5] },
      { currency: "ILS", values: [55, 4.5] },
    ],
    windowsWithCurrency[props.index].selectedCurrency.currency,
    windowsWithCurrency[props.index].value.length
  );
  const inputStyle: any = {
    right: inputMargin,
  };
  // Переворачивание стрелки при открытии списка валют
  const arrowImgStyle = !windowsWithCurrency[props.index].listOfCurrenciesOpen
    ? "arrowBottom"
    : "arrowTop";

  const currentCurrency =
    currency[windowsWithCurrency[props.index].selectedCurrency.index];

  // event functions
  const changeVisibilityCurrencySelection = () => {
    setTimeout(() => {
      const value = windowsWithCurrency[props.index].listOfCurrenciesOpen
        ? false
        : true;
      dispatch(setListOfCurrenciesOpenAC({ index: props.index, value }));
    }, 0);
  };
  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValuesWindowsWithCurrencyTC(
      windowsWithCurrency,
      e.target.value,
      props.index
    )(dispatch);
  };
  const deleteCurrencyWindow = () => {
    dispatch(deleteWindowsWithCurrencyAC({ index: props.index }));
  };
  const img = getImgFromBuffer(currentCurrency.flag.data);
  return (
    <div className='conversionBlock'>
      <div
        className='selectedCurrency'
        onClick={changeVisibilityCurrencySelection}
      >
        <div className='flagAndAbbreviation'>
          <img src={img} alt={currentCurrency.currency} />
          <div>{currentCurrency.currency}</div>
        </div>
        <div className='name'>{currentCurrency.name}</div>
        <img
          src={arrowImg}
          alt='open-select-currency'
          className={arrowImgStyle}
        />
      </div>
      <CurrencySelect index={props.index} />
      <div className={"input"}>
        <input
          value={windowsWithCurrency[props.index].value}
          onChange={inputOnChange}
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
          alt='delete-currency'
          className='deleteBtn'
          onClick={deleteCurrencyWindow}
        />
      )}
    </div>
  );
});

export default ConversionBlock;
