import React from "react";

const GlobalError = () => {
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
