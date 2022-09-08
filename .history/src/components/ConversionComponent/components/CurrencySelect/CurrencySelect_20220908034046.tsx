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
              let concurrence = 0;
              props.values.forEach((value) => {
                if (value.currency === props.currency[index].currency) {
                  concurrence++;
                }
              });
              if (concurrence === 0) {
                props.setSelectedCurrency(props.currency[index]);
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
