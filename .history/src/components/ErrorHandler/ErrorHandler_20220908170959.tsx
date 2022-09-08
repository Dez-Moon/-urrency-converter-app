import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteErrorAC, InitialStateType } from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import "./styles.scss";
import { CSSTransition } from "react-transition-group";
import Error from "./Error";

const ErrorHandler = () => {
  const { errors } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;

  return (
    <CSSTransition
      in={errors.length !== 0}
      unmountOnExit
      timeout={200}
      classNames='errorHandler'
    >
      <div className={"errorHandler"}>
        <div className='errors'>
          {errors.map((error, index: any) => {
            const style = {
              marginRight: `${index * 40}px`,
            };
            return <Error error={error} index={index} style={style} />;
          })}
        </div>
      </div>
    </CSSTransition>
  );
};

export default ErrorHandler;
