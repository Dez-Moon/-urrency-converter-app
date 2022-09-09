import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { InitialStateType } from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import { CurrencyType } from "../../types/types";

const Header = () => {
  const { currency } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  const array: Array<CurrencyType> = [];
  currency.forEach((el) => {
    if (el.currency === "USD" || el.currency === "EUR") {
      array.push(el);
    }
  });
  return (
    <div className={styles.header}>
      <div>
        <h1>Конвертер валют</h1>
      </div>
      <div className={styles.currencyRates}>
        {array.map((el) => (
          <div className={styles.currency} key={el.code}>
            <div className={styles.currencyName}>
              <div>{el.currency}</div>
              <img src={el.flag} />
            </div>
            <div className={styles.rates}>
              <div>
                <div className={styles.value}>
                  <div>Покупка</div>
                  <div>{el.rateBuy?.toFixed(2)}</div>
                </div>
              </div>
              <div>
                <div className={styles.value}>
                  <div>Продажа</div>
                  <div>{el.rateSell?.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
