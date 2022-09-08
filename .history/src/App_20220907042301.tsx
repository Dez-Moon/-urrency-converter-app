import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [currentExchangeRate, setCurrentExchangeRate] = useState(null);
  const [];
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
  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
