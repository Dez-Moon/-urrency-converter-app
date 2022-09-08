import React from "react";
import { CurrencyType } from "../../../../types/types";
import { CSSTransition } from "react-transition-group";
import "./styles.scss";

type PropsType = {
  currency: Array<CurrencyType>;
  selectOpen: boolean;
};
const CurrencySelect = (props: PropsType) => {
  return (
    <CSSTransition
      in={props.selectOpen}
      unmountOnExit
      timeout={200}
      classNames='currencySelect'
    >
      <div className='currencySelect'>
        {props.currency.map((currency: CurrencyType) => (
          <div>
            <div>{currency.currency}</div>
          </div>
        ))}
      </div>
    </CSSTransition>
  );
};

export default CurrencySelect;
