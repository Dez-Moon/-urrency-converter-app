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

type PropsType = {
  index: number;
};
const CurrencySelect = (props: PropsType) => {
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
                dispatch(setErrorAC());
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
};

export default CurrencySelect;
