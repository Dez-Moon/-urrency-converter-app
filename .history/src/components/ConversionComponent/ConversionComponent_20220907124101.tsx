import React, { useState } from "react";
import { CurrencyType } from "../../types/types";
import styles from "./styles.module.scss";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";

type PropsType = {
  currency: Array<CurrencyType>;
};

const ConversionComponent = (props: PropsType) => {
  const [values, setValues] = useState([]);
  const [conversionBlockCount, setConversionBlockCount] = useState([1, 1]);
  return (
    <div className={styles.conversionComponent}>
      <ConversionBlock currency={props.currency} />
      <ConversionBlock currency={props.currency} />
    </div>
  );
};

export default ConversionComponent;
