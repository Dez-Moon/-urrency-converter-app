import React, { useEffect, useState } from "react";
import { CurrencyType } from "../../types/types";
import styles from "./styles.module.scss";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";
import currency from "../../currency/currency";

type PropsType = {
  currency: Array<CurrencyType>;
};
export type CurrencyWithValuesType = Array<{ value: string; index: number }>;

const ConversionComponent = (props: PropsType) => {
  const [currencyWithValues, setCurrencyWithValues] = useState([]) as any;
  useEffect(() => {
    const newArray: CurrencyWithValuesType = [];
    for (let i = 0; i < 10; i++) {
      if (newArray.length > 1) {
        break;
      }
      newArray.push({ value: "", index: i });
    }
    setCurrencyWithValues(newArray);
  });
  return (
    <div className={styles.conversionComponent}>
      {currencyWithValues.map((el: any, index: number) => (
        <ConversionBlock
          currency={props.currency}
          index={index}
          currencyWithValues={currencyWithValues}
          setCurrencyWithValues={setCurrencyWithValues}
        />
      ))}
    </div>
  );
};

export default ConversionComponent;
