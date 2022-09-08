import { CurrencyType } from "../../../../types/types";
import { CSSTransition } from "react-transition-group";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../../../store/store";
import {
  addErrorAC,
  InitialStateType,
  setSelectedCurrencyTC,
  setSelectOpenTC,
} from "../../../../store/currency-reducer";
import { checkSelectedCurrencies } from "../../../../functions/functions";
import React, { useRef } from "react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

type PropsType = {
  index: number;
};

const CurrencySelect = React.memo((props: PropsType) => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency, selectOpen } =
    useSelector<AppRootStateType>(
      (state) => state.currency
    ) as InitialStateType;

  return (
    <CSSTransition
      in={selectOpen[props.index]}
      unmountOnExit
      timeout={200}
      classNames='currencySelect'
    >
      <div className='currencySelect'>
        {currency.map((el: CurrencyType, index: number) => (
          <div
            className='currency'
            key={el.code}
            onClick={(e: any) => {
              if (
                checkSelectedCurrencies(
                  windowsWithCurrency,
                  el.currency,
                  windowsWithCurrency[props.index].selectedCurrency.currency
                )
              ) {
                setSelectedCurrencyTC(
                  windowsWithCurrency,
                  currency,
                  props.index,
                  index,
                  el.currency
                )(dispatch);
                setSelectOpenTC(selectOpen, props.index, true)(dispatch);
              } else {
                dispatch(addErrorAC({ error: "Валюта уже выбрана" }));
              }
            }}
          >
            <img src={el.flag} />
            <div>{el.currency}</div>
          </div>
        ))}
      </div>
    </CSSTransition>
  );
});

export default CurrencySelect;
