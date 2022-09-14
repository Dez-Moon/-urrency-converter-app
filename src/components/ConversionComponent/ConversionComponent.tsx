import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addWindowsWithCurrencyTC,
  InitialStateType,
} from "../../store/currency-reducer";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";
import { AppRootStateType } from "../../store/store";

const ConversionComponent = () => {
  const dispatch = useDispatch();
  const { currency, windowsWithCurrency } = useSelector<
    AppRootStateType,
    InitialStateType
  >((state) => state.currency);

  //event functions
  const addCurrencyWindow = () => {
    addWindowsWithCurrencyTC(currency, windowsWithCurrency)(dispatch);
  };
  return (
    <div className={styles.conversionComponent}>
      <div onClick={addCurrencyWindow}>
        <div className={styles.addCurrency}>
          <div>Добавить валюту</div>
          <div className={styles.img}></div>
        </div>
      </div>
      <div className={styles.conversionBlockContainer}>
        {windowsWithCurrency.map((el, index) => (
          <ConversionBlock index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ConversionComponent;
