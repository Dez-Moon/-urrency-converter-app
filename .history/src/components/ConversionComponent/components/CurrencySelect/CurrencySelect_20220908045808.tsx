import { CurrencyType } from "../../../../types/types";
import { CSSTransition } from "react-transition-group";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../../../store/store";
import {
  InitialStateType,
  setSelectedCurrencyTC,
  setSelectedPageWindowsWithCurrencyAC,
} from "../../../../store/currency-reducer";
import { checkSelectedCurrencies } from "../../../../functions/functions";
import React from "react";

type PropsType = {
  selectOpen: boolean;
  index: number;
  setSelectOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CurrencySelect = (props: PropsType) => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  return (
    <CSSTransition
      in={props.selectOpen}
      unmountOnExit
      timeout={200}
      classNames='currencySelect'
    >
      <div className='currencySelect'>
        {currency.map((el: CurrencyType, index: number) => (
          <div
            className='currency'
            key={el.code}
            onClick={() => {
              if (checkSelectedCurrencies(windowsWithCurrency, el.currency)) {
                setSelectedCurrencyTC(
                  windowsWithCurrency,
                  currency,
                  props.index,
                  index,
                  el.currency
                )(dispatch);
              }
            }}
          >
            <img src={currency.flag} />
            <div>{currency.currency}</div>
          </div>
        ))}
      </div>
    </CSSTransition>
  );
};

export default CurrencySelect;
