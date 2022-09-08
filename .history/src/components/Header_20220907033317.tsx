import axios from "axios";
import React, { useEffect } from "react";
import currencyCodes from "currency-codes";

const Header = () => {
  useEffect(() => {
    axios.get("https://api.monobank.ua/bank/currency").then((res) => {
      res.data.forEach((currency: {currencyCodeA: number
        currencyCodeB: number
        date: number
        rateBuy: number
        rateSell: number}) =>)
      currencyCodes.code(res.)
      debugger;
    });
  });

  return <div>Header</div>;
};

export default Header;
