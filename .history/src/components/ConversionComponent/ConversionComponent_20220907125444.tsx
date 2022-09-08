import React, { useEffect, useState } from "react";
import { CurrencyType } from "../../types/types";
import styles from "./styles.module.scss";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";
import currency from "../../currency/currency";

type PropsType = {
  currency: Array<CurrencyType>;
};

const ConversionComponent = (props: PropsType) => {
  const [currencyWithValues, setCurrencyWithValues] = useState([]) as any;
  useEffect(() => {
    const newArray: Array<{ value: string; index: number }> = [];
    for (let i = 0; i < 10; i++) {
      if (newArray.length > 2) {
        break;
      }
      newArray.push({ value: "", index: i });
    }
    setCurrencyWithValues(newArray);
  });
  return (
    <div className={styles.conversionComponent}>
      {currencyWithValues.map((el, index) => (
        <ConversionBlock currency={currencyWithValues} index={index} />
      ))}
    </div>
  );
};

export default ConversionComponent;
