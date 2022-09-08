import React from "react";
import { CurrencyType } from "../../../../types/types";
import { CSSTransition } from "react-transition-group";
import "./styles.scss";
import { ValuesType } from "../../ConversionComponent";

type PropsType = {
  currency: Array<CurrencyType>;
  selectOpen: boolean;
  values: ValuesType;
  setSelectedValue: React.Dispatch<React.SetStateAction<number>>;
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
        {props.currency.map((currency: CurrencyType, index: number) => (
          <div
            className='currency'
            key={currency.code}
            onClick={() => {
              let concurrence = 0;
              props.values.forEach((value) => {
                if (value.currency === props.currency[index].currency) {
                  debugger;
                  concurrence++;
                }
              });
              if (concurrence === 0) {
                debugger;
                props.setSelectedValue(index);
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
