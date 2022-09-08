import React, { useState } from "react";
import { CurrencyType } from "../../types/types";
import styles from "./styles.module.scss";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";

type PropsType = {
  currency: Array<CurrencyType>;
};

const ConversionComponent = (props: PropsType) => {
  const [value2, setValue2] = useState("");

  return (
    <div className={styles.conversionComponent}>
      <ConversionBlock currency={props.currency} />
      <div>
        <input
          value={value2}
          onChange={(e: any) => {
            setValue2(e.target.value);
          }}
        />
        <select>
          {props.currency &&
            props.currency.map((currency: CurrencyType) => (
              <option value={currency.name}>{currency.name}</option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default ConversionComponent;
