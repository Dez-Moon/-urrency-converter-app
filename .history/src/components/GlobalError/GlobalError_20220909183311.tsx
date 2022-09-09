import React from "react";
import style from "./style.module.scss";

const GlobalError = () => {
  const { globalError } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;

  return (
    <div className='globalError'>
      <div className='errorWindow'>
        <div>{globalError}</div>
        <button>Конечно</button>
      </div>
    </div>
  );
};

export default GlobalError;
