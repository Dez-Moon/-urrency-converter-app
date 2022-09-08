import React from "react";
import { CurrencyType } from "../../types/types";
import styles from "./styles.module.css";

type PropsType = {
  currency: Array<CurrencyType>;
};
const ConversionComponent = (props: PropsType) => {
  return (
    <div className={styles.conversionComponent}>
      <div>
        <input />
        <select>
          {props.currenct &&
            props.currency.map((currency: CurrencyType) => (
              <div>{currency.name}</div>
            ))}
        </select>
      </div>
      <div>
        <input />
        <select />
      </div>
    </div>
  );
};

export default ConversionComponent;
