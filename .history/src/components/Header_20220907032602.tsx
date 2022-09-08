import axios from "axios";
import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    axios.get("https://api.monobank.ua/bank/currency").then((res) => {
      debugger;
    });
  });

  return <div>Header</div>;
};

export default Header;
