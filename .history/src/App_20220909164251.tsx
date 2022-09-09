import "./App.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ConversionComponent from "./components/ConversionComponent/ConversionComponent";
import ErrorHandler from "./components/ErrorHandler/ErrorHandler";
import Header from "./components/Header/Header";
import {
  setCurrencyTC,
  setListOfCurrenciesOpenAC,
} from "./store/currency-reducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const thunk = setCurrencyTC();
    thunk(dispatch);
  }, []);
  return (
    <div
      className='App'
      onClick={(e: any) => {
        dispatch(setListOfCurrenciesOpenAC({ index: null, value: false }));
      }}
    >
      <Header />
      <ConversionComponent />
      <ErrorHandler />
    </div>
  );
}

export default App;
