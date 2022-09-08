import axios from "axios";
import React, { useEffect } from "react";
var cc = require("currency-codes");

const Header = () => {
  useEffect(() => {
    // axios.get("https://api.monobank.ua/bank/currency").then((res) => {
    //   res.data.forEach(
    //     (currency: {
    //       currencyCodeA: number;
    //       currencyCodeB: number;
    //       date: number;
    //       rateBuy: number;
    //       rateSell: number;
    //     }) => {
    //       debugger;
    //     }
    //   );
    // });
  });
  const a = cc.code("980");

  return <div>Header</div>;
};

export default Header;
