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
}>;

const ConversionComponent = (props: PropsType) => {
  const [values, setValues] = useState([]) as any;

  useEffect(() => {
    const newArray: ValuesType = [];
    for (let i = 0; i < 10; i++) {
      if (newArray.length > 1) {
        break;
      }
      newArray.push({ value: "", index: i, ratio: 0 });
    }
    setValues(newArray);
  }, []);
  return (
    <div className={styles.conversionComponent}>
      <div
        onClick={() => {
          newArray.push({ value: "", index: i, ratio: 0 });
        }}
      >
        Добавить окно
      </div>
      {values.map((el: any, index: number) => (
        <ConversionBlock
          currency={props.currency}
          index={index}
          values={values}
          setValues={setValues}
        />
      ))}
    </div>
  );
};

export default ConversionComponent;