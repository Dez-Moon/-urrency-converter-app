import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addErrorAC,
  addWindowsWithCurrencyTC,
  InitialStateType,
} from "../../store/currency-reducer";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";
import { AppRootStateType } from "../../store/store";

const ConversionComponent = () => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  return (
    <div className={styles.conversionComponent}>
      <div
        onClick={() => {
          if (windowsWithCurrency.length < currency.length) {
            setTimeout(() => {
              addWindowsWithCurrencyTC(currency, windowsWithCurrency)(dispatch);
            }, 0);
          } else {
            dispatch(addErrorAC({ error: "Все доступные валюты добавлены" }));
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
          <ConversionBlock index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ConversionComponent;
