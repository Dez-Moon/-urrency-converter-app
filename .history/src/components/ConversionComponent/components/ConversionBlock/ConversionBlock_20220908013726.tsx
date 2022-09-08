import React, { useEffect, useState } from "react";
import { CurrencyType } from "../../../../types/types";
import arrowBottomImg from "../../../../assets/icons/arrow-bottom.png";
import arrowTopImg from "../../../../assets/icons/arrow-top.png";
import deleteImg from "../../../../assets/icons/delete.png";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import "./styles.scss";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../../../store/store";
import { InitialStateType } from "../../../../store/currency-reducer";

type PropsType = {
  index: number;
};
const ConversionBlock = (props: PropsType) => {
  const { currency, windowsWithCurrency } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  const [selectOpen, setSelectOpen] = useState(false);
  const handleClickToCurrency = () => {
    if (!selectOpen) setSelectOpen(true);
    else setSelectOpen(false);
  };

  return (
    <div className='conversionBlock'>
      <div className='selectedCurrency' onClick={handleClickToCurrency}>
        <div className='flagAndAbbreviation'>
          <img src={currency[windowWithCurrency.selectedCurrency].flag} />
          <div>{currency[windowWithCurrency.selectedCurrency].currency}</div>
        </div>
        <div>{currency[windowWithCurrency.selectedCurrency].name}</div>
        {!selectOpen ? (
          <img src={arrowBottomImg} className='arrowImg' />
        ) : (
          <img src={arrowTopImg} className='arrowImg' />
        )}
        <CurrencySelect currency={currency} selectOpen={selectOpen} />
      </div>
      <input
        type='number'
        min='0'
        value={windowWithCurrency[props.index].value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.value) {
            const newArray = windowWithCurrency.slice();
            newArray[props.index].value = e.target.value;
            newArray.forEach((el, index) => {
              if (index !== props.index) {
                const ratio =
                  props.values[props.index].ratio / props.values[index].ratio;
                debugger;
                newArray[index].value = String(
                  (Number(e.target.value) * ratio).toFixed(2)
                );
              }
            });
            props.setValues(newArray);
          } else {
            props.values.forEach((el, index) => {
              const newArray = props.values.slice();
              newArray[index].value = "";
              props.setValues(newArray);
            });
          }
        }}
      />
      {props.values.length > 2 && (
        <img
          src={deleteImg}
          className='deleteBtn'
          onClick={() => {
            const newArray = props.values.slice();
            newArray.splice(props.index, 1);
            console.log(newArray);
            props.setValues(newArray);
          }}
        />
      )}
    </div>
  );
};

export default ConversionBlock;
