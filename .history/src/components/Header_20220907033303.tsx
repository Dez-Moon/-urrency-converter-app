import axios from "axios";
import React, { useEffect } from "react";
import currencyCodes from "currency-codes";

const Header = () => {
  useEffect(() => {
    axios.get("https://api.monobank.ua/bank/currency").then((res) => {
      res.data.forEach((currency: {currencyCodeA: 840
        currencyCodeB: 980
        date: 1662498608
        rateBuy: 36.65
        rateSell: 37.4995}) =>)
      currencyCodes.code(res.)
      debugger;
    });
  });

  return <div>Header</div>;
};

export default Header;
