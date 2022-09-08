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
  const [conversionBlockCount, setConversionBlockCount] = useState([1, 1]);
  useEffect(() => {
    const newArray: Array<CurrencyType> = [];
    props.currency.forEach((currency) => {
      if (newArray.length < 2) {
        const currencyCopy = { ...currency, value: "" };
        newArray.unshift(currencyCopy);
        debugger;
      }
    });
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
