import React, { useEffect, useState } from "react";
import { CurrencyType } from "../../types/types";
import styles from "./styles.module.scss";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";
import currency from "../../currency/currency";

type PropsType = {
  currency: Array<CurrencyType>;
};
export type ValuesType = Array<{
  value: string;
  index: number;
  ratio: number;
  currency: string;
}>;
declare global {
  interface Window {
    values: any;
  }
}
const ConversionComponent = (props: PropsType) => {
  const [values, setValues] = useState([]) as any;
  window.values = values;
  useEffect(() => {
    const newArray: ValuesType = [];
    for (let i = 0; i < 10; i++) {
      if (newArray.length > 1) {
        break;
      }
      newArray.push({
        value: "",
        index: i,
        ratio: 0,
        currency: "",
      });
    }
    setValues(newArray);
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
