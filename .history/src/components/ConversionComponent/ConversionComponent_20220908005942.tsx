import React, { useEffect, useState } from "react";
import { CurrencyType } from "../../types/types";
import styles from "./styles.module.scss";
import ConversionBlock from "./components/ConversionBlock/ConversionBlock";
import { setWindowsWithCurrencyTC } from "../../store/currency-reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../store/store";

type PropsType = {
  currency: Array<CurrencyType>;
};

const ConversionComponent = (props: PropsType) => {
  const dispatch = useDispatch();
  const state = useSelector<AppRootStateType>(
    (state) => state
  ) as AppRootStateType;
  useEffect(() => {
    const thunk = setWindowsWithCurrencyTC(state.currency.currency);
    thunk(dispatch, state);
  }, [state.currency.currency]);
  return (
    <div className={styles.conversionComponent}>
      {/* <div
        onClick={() => {
          if (values.length < props.currency.length) {
            const newArray = values.slice();
            newArray.push({ value: "", index: newArray.length, ratio: 0 });
            setValues(newArray);
          }
        }}
      >
        Добавить окно
      </div> */}
      {/* <div className={styles.conversionBlockContainer}>
        {values.map((el: any, index: number) => (
          <ConversionBlock
            currency={props.currency}
            values={values}
            index={index}
            setValues={setValues}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ConversionComponent;
