import { useDispatch, useSelector } from "react-redux";
import { testCurrency } from "../../currency/testCurrency";
import {
  createWindowsWithCurrencyTC,
  InitialStateType,
  setCurrencyAC,
  setGlobalErrorAC,
} from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import styles from "./styles.module.scss";

const GlobalError = () => {
  const dispatch = useDispatch();
  const { globalError } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;

  return (
    <div className={styles.globalError}>
      <div className={styles.errorWindow}>
        <div>{globalError}</div>
        <button
          onClick={() => {
            dispatch(setGlobalErrorAC({ error: "" }));
            dispatch(setCurrencyAC({ currency: testCurrency }));
            createWindowsWithCurrencyTC(testCurrency)(dispatch);
          }}
        >
          Конечно
        </button>
      </div>
    </div>
  );
};

export default GlobalError;
