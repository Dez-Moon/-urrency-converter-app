import React from "react";
import { CurrencyType } from "../../../../types/types";
import { CSSTransition } from "react-transition-group";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../../../store/store";
import {
  InitialStateType,
  setSelectedPageWindowsWithCurrencyAC,
} from "../../../../store/currency-reducer";

type PropsType = {
  selectOpen: boolean;
  index: number;
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
        {currency.map((currency: CurrencyType, index: number) => (
          <div
            className='currency'
            key={currency.code}
            onClick={() => {
              dispatch(
                setSelectedPageWindowsWithCurrencyAC({
                  indexWindow: props.index,
                  index,
                  currency: currency.currency,
                })
              );
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
