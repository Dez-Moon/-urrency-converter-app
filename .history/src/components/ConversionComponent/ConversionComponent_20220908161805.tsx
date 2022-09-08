import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addWindowsWithCurrencyTC,
  InitialStateType,
} from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import { useOutsideClick } from "../hooks/useOutsideClick";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";
import styles from "./styles.module.scss";

const ConversionComponent = () => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency, selectOpen, error } =
    useSelector<AppRootStateType>(
      (state) => state.currency
    ) as InitialStateType;
  const [opened, onClose] = useState(false);
  return (
    <div className={styles.conversionComponent}>
      <div
        onClick={() => {
          if (windowsWithCurrency.length < currency.length) {
            setTimeout(() => {
              addWindowsWithCurrencyTC(currency, windowsWithCurrency)(dispatch);
            }, 0);
          }
        }}
      >
        <div className={styles.addCurrency}>
          <div>Добавить валюту</div>
          <div className={styles.img}></div>
        </div>
      </div>
      <div className={styles.conversionBlockContainer}>
        {windowsWithCurrency.map((el: any, index: number) => (
          <ConversionBlock index={index} />
        ))}
      </div>
      <ErrorHandler />
    </div>
  );
};

export default ConversionComponent;
