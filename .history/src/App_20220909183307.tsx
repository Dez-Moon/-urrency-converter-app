import "./App.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConversionComponent from "./components/ConversionComponent/ConversionComponent";
import ErrorHandler from "./components/ErrorHandler/ErrorHandler";
import Header from "./components/Header/Header";
import {
  InitialStateType,
  setCurrencyTC,
  setListOfCurrenciesOpenAC,
} from "./store/currency-reducer";
import { AppRootStateType } from "./store/store";

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
      {globalError && <(
        <div className='globalError'>
          <div className='errorWindow'>
            <div>{globalError}</div>
            <button>Конечно</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
