import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteErrorAC, InitialStateType } from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import "./styles.scss";
import { CSSTransition } from "react-transition-group";
import Error from "./Error";

type ErrorType = { index: string; error: string };
const ErrorHandler = () => {
  const { errors } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  const [errorsArray, setErrorsArray] = useState([]) as any;
  useEffect(() => {
    type ErrorType = { index: string; error: string };
    const array: Array<> = [];
    errors.forEach((error, index) => {
      array.push({ index, error });
    });
    setErrorsArray(array);
  }, []);
  return (
    <CSSTransition
      in={errors.size !== 0}
      unmountOnExit
      timeout={200}
      classNames='errorHandler'
    >
      <div className={"errorHandler"}>
        <div className='errors'>
          {errorsArray.map((error: {}, index: number) => {
            const style = {
              bottom: `${index * 30 - 100}px`,
            };
            return <Error error={error} style={style} />;
          })}
        </div>
      </div>
    </CSSTransition>
  );
};

export default ErrorHandler;
