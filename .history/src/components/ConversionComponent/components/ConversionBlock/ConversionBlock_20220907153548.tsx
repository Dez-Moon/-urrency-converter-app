import React, { useEffect, useState } from "react";
import { CurrencyType } from "../../../../types/types";
import arrowBottomImg from "../../../../assets/icons/arrow-bottom.png";
import arrowTopImg from "../../../../assets/icons/arrow-top.png";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import "./styles.scss";
import { ValuesType } from "../../ConversionComponent";

type PropsType = {
  currency: Array<CurrencyType>;
  index: number;
  values: ValuesType;
  setValues: React.Dispatch<React.SetStateAction<ValuesType>>;
};
const ConversionBlock = React.memo((props: PropsType) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(props.index);
  const getDefaultValue = (values: ValuesType, currency: CurrencyType) => {
    values.forEach((el) => {
      let selectedValue = 0;
      if (el.currency === props.currency[props.index].currency) {
        selectedValue = props.index + 1;
      }
      return selectedValue;
    });
  };
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
