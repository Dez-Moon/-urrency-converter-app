import React from "react";
import "./styles.scss";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import {
  InitialStateType,
  setSelectedCurrencyTC,
} from "../../../../store/currency-reducer";
import { CurrencyType } from "../../../../types/types";
import { AppRootStateType } from "../../../../store/store";
import { getImgFromBuffer } from "../../../../functions/functions";

type PropsType = {
  index: number;
};

const CurrencySelect = React.memo((props: PropsType) => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  //event functions
  const setCurrency = (newCurrency: string, index: number) => {
    setSelectedCurrencyTC(
      windowsWithCurrency,
      currency,
      props.index,
      index,
      newCurrency
    )(dispatch);
  };
  return (
    <CSSTransition
      in={windowsWithCurrency[props.index].listOfCurrenciesOpen}
      unmountOnExit
      timeout={200}
      classNames='currencySelect'
    >
      <div className='currencySelect'>
        {currency.map((el: CurrencyType, index: number) => {
          const img = getImgFromBuffer(el.flag.data);
          return (
            <div
              className='currency'
              key={el.code}
              onClick={() => setCurrency(el.currency, index)}
            >
              <img src={img} alt={el.currency} />
              <div>{el.currency}</div>
            </div>
          );
        })}
      </div>
    </CSSTransition>
  );
});

export default CurrencySelect;
