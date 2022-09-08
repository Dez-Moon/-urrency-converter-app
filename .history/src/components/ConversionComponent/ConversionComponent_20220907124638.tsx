import React, { useEffect, useState } from "react";
import { CurrencyType } from "../../types/types";
import styles from "./styles.module.scss";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";
import currency from "../../currency/currency";

type PropsType = {
  currency: Array<CurrencyType>;
};

const ConversionComponent = (props: PropsType) => {
  const [values, setValues] = useState([]);
  const [conversionBlockCount, setConversionBlockCount] = useState([1, 1]);
  useEffect(() => {
    const newArray: Array<CurrencyType> = [];
    props.currency.forEach((currency) => {
      if (newArray.length < 2) {
        newArray.unshift(currency);
      }
    });
  });
  return (
    <div className={styles.conversionComponent}>
      {conversionBlockCount.map((el, index) => (
        <ConversionBlock
          currency={props.currency}
          index={index}
          value={value[index]}
        />
      ))}
    </div>
  );
};

export default ConversionComponent;
