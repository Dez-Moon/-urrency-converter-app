import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteErrorAC, InitialStateType } from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import "./styles.scss";
import { CSSTransition } from "react-transition-group";
import Error from "./Error";

type ArrayType = Array<{ index: string; error: string }>;
const ErrorHandler = () => {
  const { errors } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  const [errorsArray, setErrorsArray] = useState([]) as 
    ArrayType,
    Dispatch<SetStateAction<ArrayType>>
  useEffect(() => {
    const array: ArrayType = [];
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
          {errorsArray.map((error, index: any) => {
            const style = {
              bottom: `${index * 30 - 100}px`,
            };
            return <Error error={error} index={index} style={style} />;
          })}
        </div>
      </div>
    </CSSTransition>
  );
};

export default ErrorHandler;
