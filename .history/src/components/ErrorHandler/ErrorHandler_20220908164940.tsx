import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteErrorAC, InitialStateType } from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import "./styles.scss";
import { CSSTransition } from "react-transition-group";

const ErrorHandler = () => {
  const dispatch = useDispatch();
  const { errors } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;

  return (
    <CSSTransition
      in={errors.length !== 0}
      unmountOnExit
      timeout={200}
      classNames='error'
    >
      <div className={"errors"}>
        {errors.map((error, index: any) => (
          <Error error={error} index={index} />
        ))}
      </div>
    </CSSTransition>
  );
};
type PropsType = {
  error: string;
  index: number;
};
const Error = (props: PropsType) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {}, 5000);
  });
  return (
    <div className='error'>
      <div>{props.error}</div>
      <button
        onClick={() => {
          dispatch(deleteErrorAC({ index: props.index }));
        }}
      >
        ок
      </button>
    </div>
  );
};

export default ErrorHandler;
