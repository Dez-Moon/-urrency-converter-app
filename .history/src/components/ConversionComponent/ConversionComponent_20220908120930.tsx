import { useDispatch, useSelector } from "react-redux";
import {
  addWindowsWithCurrencyTC,
  InitialStateType,
} from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";
import PlusImg from "../../assets/icons/plus.svg";
import styles from "./styles.module.scss";

const ConversionComponent = () => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency, selectOpen, error } =
    useSelector<AppRootStateType>(
      (state) => state.currency
    ) as InitialStateType;
  return (
    <div className={styles.conversionComponent}>
      <div
        onClick={() => {
          if (windowsWithCurrency.length < currency.length) {
            addWindowsWithCurrencyTC(currency, windowsWithCurrency)(dispatch);
          }
        }}
      >
        <div className={styles.addCurrency}>
          <span>Добавить валюту</span> <svg xmlns={PlusImg} fill='red' />
        </div>
      </div>
      <div className={styles.conversionBlockContainer}>
        {windowsWithCurrency.map((el: any, index: number) => (
          <ConversionBlock index={index} />
        ))}
      </div>
    </div>
  );
};

export default ConversionComponent;
