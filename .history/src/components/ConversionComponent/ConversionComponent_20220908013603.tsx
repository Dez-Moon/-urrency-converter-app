import { useSelector } from "react-redux";
import { AppRootStateType } from "../../store/store";
import { CurrencyType } from "../../types/types";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";
import styles from "./styles.module.scss";

const ConversionComponent = () => {
  const { currency, windowWithCurrency } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as any;

  return (
    <div className={styles.conversionComponent}>
      <div
        onClick={() => {
          if (windowWithCurrency.length < currency.length) {
            const newArray = windowWithCurrency.slice();
            newArray.push({ value: "", index: newArray.length, ratio: 0 });
            // setValues(newArray);
          }
        }}
      >
        Добавить окно
      </div>
      <div className={styles.conversionBlockContainer}>
        {windowWithCurrency.map((el: any, index: number) => (
          <ConversionBlock index={index} />
        ))}
      </div>
    </div>
  );
};

export default ConversionComponent;
