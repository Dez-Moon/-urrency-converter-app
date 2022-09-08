import { useDispatch, useSelector } from "react-redux";
import {
  addWindowsWithCurrencyTC,
  InitialStateType,
  setSelectOpenAC,
  setSelectOpenTC,
} from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";
import styles from "./styles.module.scss";

const ConversionComponent = () => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency, selectOpen, error } =
    useSelector<AppRootStateType>(
      (state) => state.currency
    ) as InitialStateType;
  return (
    <div className={styles.conversionComponent}>
      {error && <div>{error}</div>}
      <div
        onClick={() => {
          if (windowsWithCurrency.length < currency.length) {
            addWindowsWithCurrencyTC(currency, windowsWithCurrency)(dispatch);
          }
        }}
      >
        Добавить окно
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
