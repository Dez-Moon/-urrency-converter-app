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
import GlobalError from "./components/GlobalError/GlobalError";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const dispatch = useDispatch();
  const { globalError } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
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
      <Preloader />
      {globalError && <GlobalError />}
    </div>
  );
}

export default App;
