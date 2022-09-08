import React from "react";
import { CurrencyType } from "../../../../types/types";
import { CSSTransition } from "react-transition-group";

type PropsType = {
  currency: Array<CurrencyType>;
  selectOpen: boolean;
};
const CurrencySelect = (props: PropsType) => {
  return (
    <CSSTransition
      in={props.selectOpen}
      unmountOnExit
      timeout={200}
      classNames={"navigationOverlay"}
    >
      <div></div>
    </CSSTransition>
  );
};

export default CurrencySelect;
