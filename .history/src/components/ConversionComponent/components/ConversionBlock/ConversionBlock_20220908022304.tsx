import React, { useEffect, useState } from "react";
import { CurrencyType, WindowsWithCurrencyType } from "../../../../types/types";
import arrowBottomImg from "../../../../assets/icons/arrow-bottom.png";
import arrowTopImg from "../../../../assets/icons/arrow-top.png";
import deleteImg from "../../../../assets/icons/delete.png";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../../../store/store";
import {
  deleteWindowsWithCurrencyAC,
  InitialStateType,
} from "../../../../store/currency-reducer";

type PropsType = {
  index: number;
};
const ConversionBlock = (props: PropsType) => {
  const dispatch = useDispatch();
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
          <img
            src={
              currency[windowsWithCurrency[props.index].selectedCurrency.index]
                .flag
            }
          />
          <div>
            {
              currency[windowsWithCurrency[props.index].selectedCurrency.index]
                .currency
            }
          </div>
        </div>
        <div>
          {
            currency[windowsWithCurrency[props.index].selectedCurrency.index]
              .name
          }
        </div>
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
        value={windowsWithCurrency[props.index].value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.value) {
            const newArray = windowsWithCurrency.slice();
            newArray[props.index].value = e.target.value;
            newArray.forEach((el, index) => {
              if (index !== props.index) {
                const ratio =
                  windowsWithCurrency[props.index].ratio /
                  windowsWithCurrency[index].ratio;
                debugger;
                newArray[index].value = String(
                  (Number(e.target.value) * ratio).toFixed(2)
                );
              }
            });
            // props.setValues(newArray);
          } else {
            windowsWithCurrency.forEach((el, index) => {
              const newArray = windowsWithCurrency.slice();
              newArray[index].value = "";
              //   props.setValues(newArray);
            });
          }
        }}
      />
      {windowsWithCurrency.length > 2 && (
        <img
          src={deleteImg}
          className='deleteBtn'
          onClick={() => {
            dispatch(deleteWindowsWithCurrencyAC({ index: props.index }));
          }}
        />
      )}
    </div>
  );
};

export default ConversionBlock;