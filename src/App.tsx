import "./App.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConversionComponent from "./components/ConversionComponent/ConversionComponent";
import Header from "./components/Header/Header";
import {
  InitialStateType,
  setCurrencyTC,
  setListOfCurrenciesOpenAC,
} from "./store/currency-reducer";
import { AppRootStateType } from "./store/store";
import Preloader from "./components/Auxiliary components/Preloader/Preloader";
import ErrorHandler from "./components/Auxiliary components/ErrorHandler/ErrorHandler";

function App() {
  const dispatch = useDispatch();
  const { appLoaded } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  useEffect(() => {
    const thunk = setCurrencyTC();
    thunk(dispatch);
  }, []);

  //event functions
  const closeСurrencySelectionList = () => {
    dispatch(setListOfCurrenciesOpenAC({ index: null, value: false }));
  };
  if (!appLoaded) {
    return <Preloader />;
  }
  return (
    <div className='App' onClick={closeСurrencySelectionList}>
      <Header />
      <ConversionComponent />
      <ErrorHandler />
    </div>
  );
}

export default App;
