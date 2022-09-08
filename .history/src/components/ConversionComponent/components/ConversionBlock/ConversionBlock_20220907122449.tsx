import React from "react";
import { CurrencyType } from "../../../../types/types";
import arrowBottomImg from "../../../assets/icons/arrow-bottom.png";
import arrowTopImg from "../../../assets/icons/arrow-top.png";
import CurrencySelect from "../CurrencySelect/CurrencySelect";

type PropsType = {
  currency: Array<CurrencyType>;
};
const ConversionBlock = (props: PropsType) => {
  return (
    <div className='conversionBlock'>
      <div className='selectedCurrency' onClick={handleClickToCurrency}>
        <img src={props.currency[selectedValue1].flag} />
        <div>{props.currency[selectedValue1].currency}</div>
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
