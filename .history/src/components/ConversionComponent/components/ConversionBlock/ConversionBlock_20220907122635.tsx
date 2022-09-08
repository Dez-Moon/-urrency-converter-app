import React, { useState } from "react";
import { CurrencyType } from "../../../../types/types";
import arrowBottomImg from "../../../assets/icons/arrow-bottom.png";
import arrowTopImg from "../../../assets/icons/arrow-top.png";
import CurrencySelect from "../CurrencySelect/CurrencySelect";

type PropsType = {
  currency: Array<CurrencyType>;
};
const ConversionBlock = (props: PropsType) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(0);

  const handleClickToCurrency = () => {
    if (!selectOpen) setSelectOpen(true);
    else setSelectOpen(false);
  };
  if (!props.currency) {
    return <div></div>;
  }
  return (
    <div className='conversionBlock'>
      <div className='selectedCurrency' onClick={handleClickToCurrency}>
        <img src={props.currency[selectedValue].flag} />
        <div>{props.currency[selectedValue].currency}</div>
        {!selectOpen ? (
          <img src={arrowBottomImg} className='arrowImg' />
        ) : (
          <img src={arrowTopImg} className='arrowImg' />
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
  );
};

export default ConversionBlock;
