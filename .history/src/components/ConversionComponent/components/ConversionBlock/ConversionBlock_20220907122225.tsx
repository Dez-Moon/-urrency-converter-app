import React from "react";

const ConversionBlock = () => {
  return (
    <div className={styles.conversionBlock}>
      <div className={styles.selectedCurrency} onClick={handleClickToCurrency}>
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
  );
};

export default ConversionBlock;
