import { CurrencyType } from "../../../../types/types";
import { CSSTransition } from "react-transition-group";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../../../store/store";
import {
  addErrorAC,
  InitialStateType,
  setSelectedCurrencyTC,
} from "../../../../store/currency-reducer";
import { checkSelectedCurrencies } from "../../../../functions/functions";
import React, { useEffect, useRef, useState } from "react";

type PropsType = {
  index: number;
  ref: any;
  isShow: boolean;
  setIsShow: any;
};
export const useOutside = (initialIsVisible: any) => {
  const [isShow, setIsShow] = useState(initialIsVisible);
  const ref = useRef(null) as any;

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isShow, setIsShow };
};
const CurrencySelect = React.memo((props: PropsType) => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;

  return (
    <CSSTransition
      in={props.isShow}
      unmountOnExit
      timeout={200}
      classNames='currencySelect'
    >
      <div className='currencySelect' ref={props.ref}>
        {currency.map((el: CurrencyType, index: number) => (
          <div
            className='currency'
            key={el.code}
            onClick={(e: any) => {
              setSelectedCurrencyTC(
                windowsWithCurrency,
                currency,
                props.index,
                index,
                el.currency
              )(dispatch);
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
