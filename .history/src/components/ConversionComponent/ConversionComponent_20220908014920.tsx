import { useSelector } from "react-redux";
import { InitialStateType } from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import { CurrencyType } from "../../types/types";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";
import styles from "./styles.module.scss";

const ConversionComponent = () => {
  const { currency, windowsWithCurrency } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;

  return (
    <div className={styles.conversionComponent}>
      <div
        onClick={() => {
          if (windowsWithCurrency.length < currency.length) {
            const newArray = windowsWithCurrency.slice();
            // setValues(newArray);
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
