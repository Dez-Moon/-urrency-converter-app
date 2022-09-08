import { CurrencyType } from "../../../../types/types";
import { CSSTransition } from "react-transition-group";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../../../store/store";
import {
  InitialStateType,
  setErrorAC,
  setSelectedCurrencyTC,
  setSelectOpenTC,
} from "../../../../store/currency-reducer";
import { checkSelectedCurrencies } from "../../../../functions/functions";
import { useRef } from "react";
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
  const currencyList = useRef(null);

  return (
    <CSSTransition
      in={selectOpen[props.index]}
      unmountOnExit
      timeout={200}
      classNames='currencySelect'
    >
      <div className='currencySelect' ref={currencyList}>
        {currency.map((el: CurrencyType, index: number) => (
          <div
            className='currency'
            key={el.code}
            onClick={() => {
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
                setSelectOpenTC(selectOpen, props.index)(dispatch);
              } else {
                debugger;
                dispatch(setErrorAC({ error: "Валюта уже выбрана" }));
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