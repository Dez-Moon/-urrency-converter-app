import React from "react";
import { CurrencyType } from "../../../../types/types";
import { CSSTransition } from "react-transition-group";
import "./styles.scss";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../../../store/store";
import { InitialStateType } from "../../../../store/currency-reducer";

type PropsType = {
  selectOpen: boolean;
};
const CurrencySelect = (props: PropsType) => {
  const { currency, windowsWithCurrency } = useSelector<AppRootStateType>(
    (state) => state.currency.currency
  ) as InitialStateType;
  debugger;
  return (
    <CSSTransition
      in={props.selectOpen}
      unmountOnExit
      timeout={200}
      classNames='currencySelect'
    >
      <div className='currencySelect'>
        {currency.map((currency: CurrencyType, index: number) => (
          <div className='currency' key={currency.code} onClick={() => {}}>
            <img src={currency.flag} />
            <div>{currency.currency}</div>
          </div>
        ))}
      </div>
    </CSSTransition>
  );
};

export default CurrencySelect;
