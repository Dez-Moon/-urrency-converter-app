import React, { useEffect, useState } from "react";
import { CurrencyType } from "../../types/types";
import styles from "./styles.module.scss";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";
import currency from "../../currency/currency";
import { setWindowsWithCurrencyTC } from "../../store/currency-reducer";
import { useDispatch } from "react-redux";

type PropsType = {
  currency: Array<CurrencyType>;
};

const ConversionComponent = (props: PropsType) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setWindowsWithCurrencyTC();
  }, []);
  return (
    <div className={styles.conversionComponent}>
      <div
        onClick={() => {
          if (values.length < props.currency.length) {
            const newArray = values.slice();
            newArray.push({ value: "", index: newArray.length, ratio: 0 });
            setValues(newArray);
          }
        }}
      >
        Добавить окно
      </div>
      <div className={styles.conversionBlockContainer}>
        {values.map((el: any, index: number) => (
          <ConversionBlock
            currency={props.currency}
            values={values}
            index={index}
            setValues={setValues}
          />
        ))}
      </div>
    </div>
  );
};

export default ConversionComponent;
