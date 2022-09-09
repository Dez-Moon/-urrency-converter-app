import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  InitialStateType,
  setGlobalErrorAC,
} from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import style from "./style.module.scss";

const GlobalError = () => {
  const dispatch = useDispatch();
  const { globalError } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;

  return (
    <div className='globalError'>
      <div className='errorWindow'>
        <div>{globalError}</div>
        <button onClick={() => dispatch(setGlobalErrorAC({ error: "" }))}>
          Конечно
        </button>
      </div>
    </div>
  );
};

export default GlobalError;
