import React, { useState } from "react";
import { CurrencyType } from "../../types/types";
import styles from "./styles.module.scss";
import arrowBottomImg from "../../assets/icons/arrow-bottom.png";
import arrowTopImg from "../../assets/icons/arrow-top.png";
import CurrencySelect from "./components/CurrencySelect/CurrencySelect";

type PropsType = {
  currency: Array<CurrencyType>;
};

const ConversionComponent = (props: PropsType) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [value1, setValue1] = useState("");
  const [selectedValue1, setSelectedValue1] = useState(0);
  const [value2, setValue2] = useState("");
  const handleClickToCurrency = () => {
    if (!selectOpen) setSelectOpen(true);
    else setSelectOpen(false);
  };
  if (!props.currency) {
    return <div></div>;
  }
  return (
    <div className={styles.conversionComponent}>
      <div className={styles.conversionBlock}>
        <div
          className={styles.selectedCurrency}
          onClick={handleClickToCurrency}
        >
          <img src={props.currency[selectedValue1].flag} />
          <div>{props.currency[selectedValue1].currency}</div>
          {!selectOpen ? (
            <img src={arrowBottomImg} className={styles.arrowImg} />
          ) : (
            <img src={arrowTopImg} className={styles.arrowImg} />
          )}
          <CurrencySelect currency={props.currency} selectOpen={selectOpen} />
        </div>
        <input
          value={value1}
          onChange={(e: any) => {
            setValue1(e.target.value);
            setValue2(e.target.value);
          }}
        />
      </div>
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
