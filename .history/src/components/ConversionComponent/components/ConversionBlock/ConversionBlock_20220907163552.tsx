import React, { useEffect, useState } from "react";
import { CurrencyType } from "../../../../types/types";
import arrowBottomImg from "../../../../assets/icons/arrow-bottom.png";
import arrowTopImg from "../../../../assets/icons/arrow-top.png";
import deleteImg from "../../../../assets/icons/delete.png";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import "./styles.scss";
import { ValuesType } from "../../ConversionComponent";

type PropsType = {
  currency: Array<CurrencyType>;
  values: ValuesType;
  index: number;
  setValues: React.Dispatch<React.SetStateAction<ValuesType>>;
};
const getDefaultValue = (
  values: ValuesType,
  currency: Array<CurrencyType>,
  index: number
) => {
  let selectedValue = index;
  let concurrence = 0;
  const a = new Map();
  values.forEach((el) => {
    if (el.currency === currency[values.length - 1].currency) {
      concurrence++;
      debugger;
    } else {
      a.set(el.currency, el.currency);
    }
  });
  if (concurrence === 0) {
    return selectedValue;
  } else {
    for (let i = 0; i < currency.length; i++) {
      if (!a.has(currency[i].currency)) {
        return i;
      }
    }

    return selectedValue;
  }
};
const ConversionBlock = React.memo((props: PropsType) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    getDefaultValue(props.values, props.currency, props.index)
  ) as any;
  const handleClickToCurrency = () => {
    if (!selectOpen) setSelectOpen(true);
    else setSelectOpen(false);
  };
  useEffect(() => {
    const newArray = props.values.slice();
    newArray[props.index].currency = props.currency[selectedValue].currency;
    props.setValues(newArray);
  }, []);
  useEffect(() => {
    const newArray = props.values.slice();
    if (props.currency[selectedValue].rateBuy) {
      newArray[props.index].ratio = Number(
        props.currency[selectedValue].rateBuy
      );
    } else if (props.currency[selectedValue].rateCross) {
      newArray[props.index].ratio = Number(
        props.currency[selectedValue].rateCross
      );
    } else {
      newArray[props.index].ratio = 1;
    }
    const getRatio = (index: number) => {
      if (index === 0) {
        return {
          value: Number(props.values[index + 1].value),
          ratio: props.values[index].ratio / props.values[index + 1].ratio,
        };
      } else {
        return {
          value: Number(props.values[index - 1].value),
          ratio: props.values[index - 1].ratio / props.values[index].ratio,
        };
      }
    };
    const { value, ratio } = getRatio(props.index);

    newArray[props.index].value = String((value * ratio).toFixed(2));
    newArray[props.index].currency = props.currency[selectedValue].currency;

    props.setValues(newArray);
  }, [selectedValue]);
  if (!props.currency) {
    return <div></div>;
  }
  return (
    <div className='conversionBlock'>
      <div className='selectedCurrency' onClick={handleClickToCurrency}>
        <div className='flagAndAbbreviation'>
          <img src={props.currency[selectedValue].flag} />
          <div>{props.currency[selectedValue].currency}</div>
        </div>
        <div>{props.currency[selectedValue].name}</div>
        {!selectOpen ? (
          <img src={arrowBottomImg} className='arrowImg' />
        ) : (
          <img src={arrowTopImg} className='arrowImg' />
        )}
        <img src={deleteImg} className='deleteBtn' />
        <CurrencySelect
          currency={props.currency}
          selectOpen={selectOpen}
          setSelectedValue={setSelectedValue}
          values={props.values}
        />
      </div>
      <input
        type='number'
        min='0'
        value={props.values[props.index].value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const newArray = props.values.slice();
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
        }}
      />
    </div>
  );
});

export default ConversionBlock;
