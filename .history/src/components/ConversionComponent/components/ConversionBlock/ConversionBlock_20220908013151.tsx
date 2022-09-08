import React, { useEffect, useState } from "react";
import { CurrencyType } from "../../../../types/types";
import arrowBottomImg from "../../../../assets/icons/arrow-bottom.png";
import arrowTopImg from "../../../../assets/icons/arrow-top.png";
import deleteImg from "../../../../assets/icons/delete.png";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import "./styles.scss";

const ConversionBlock = React.memo((props: PropsType) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(
    props.currency[1]
  ) as any;
  const handleClickToCurrency = () => {
    if (!selectOpen) setSelectOpen(true);
    else setSelectOpen(false);
  };
  //   useEffect(() => {
  //     const newArray = props.values.slice();
  //     newArray[props.index].currency = selectedCurrency;
  //     props.setValues(newArray);
  //   }, []);
  //   useEffect(() => {
  //     const newArray = props.values.slice();
  //     if (selectedCurrency.rateBuy) {
  //       newArray[props.index].ratio = Number(selectedCurrency.rateBuy);
  //     } else if (selectedCurrency.rateCross) {
  //       newArray[props.index].ratio = Number(selectedCurrency.rateCross);
  //     } else {
  //       newArray[props.index].ratio = 1;
  //     }
  //     const getRatio = (index: number) => {
  //       if (index === 0) {
  //         return {
  //           value: Number(props.values[index + 1].value),
  //           ratio: props.values[index].ratio / props.values[index + 1].ratio,
  //         };
  //       } else {
  //         return {
  //           value: Number(props.values[index - 1].value),
  //           ratio: props.values[index - 1].ratio / props.values[index].ratio,
  //         };
  //       }
  //     };
  //     const { value, ratio } = getRatio(props.index);

  //     newArray[props.index].value = String((value * ratio).toFixed(2));
  //     newArray[props.index].currency = selectedCurrency.currency;
  //     props.setValues(newArray);
  //   }, [selectedCurrency]);
  //   if (!props.currency) {
  //     return <div></div>;
  //   }
  return (
    <div className='conversionBlock'>
      {/* <div className='selectedCurrency' onClick={handleClickToCurrency}>
        <div className='flagAndAbbreviation'>
          <img src={selectedCurrency.flag} />
          <div>{selectedCurrency.currency}</div>
        </div>
        <div>{selectedCurrency.name}</div>
        {!selectOpen ? (
          <img src={arrowBottomImg} className='arrowImg' />
        ) : (
          <img src={arrowTopImg} className='arrowImg' />
        )}
        <CurrencySelect
          currency={props.currency}
          selectOpen={selectOpen}
          setSelectedCurrency={setSelectedCurrency}
        />
      </div>
      <input
        type='number'
        min='0'
        value={props.values[props.index].value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.value) {
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
      )} */}
    </div>
  );
});

export default ConversionBlock;
