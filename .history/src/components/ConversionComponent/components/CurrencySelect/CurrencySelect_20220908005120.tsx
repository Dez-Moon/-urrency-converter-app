import React from "react";
import { CurrencyType } from "../../../../types/types";
import { CSSTransition } from "react-transition-group";
import "./styles.scss";

type PropsType = {
  currency: Array<CurrencyType>;
  selectOpen: boolean;
  setSelectedCurrency: React.Dispatch<React.SetStateAction<CurrencyType>>;
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
        {/* {props.currency.map((currency: CurrencyType, index: number) => (
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
        ))} */}
      </div>
    </CSSTransition>
  );
};

export default CurrencySelect;
