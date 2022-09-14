import "./styles.scss";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Error from "./Error";
import { InitialStateType } from "../../../store/currency-reducer";
import { AppRootStateType } from "../../../store/store";

const ErrorHandler = () => {
  const { errors } = useSelector<AppRootStateType>(
    (state) => state.currency
  ) as InitialStateType;
  const screenWidth = window.screen.width;
  return (
    <CSSTransition
      in={errors.length !== 0}
      unmountOnExit
      timeout={200}
      classNames='errorHandler'
    >
      <div className={"errorHandler"}>
        <div className='errors'>
          {errors.map((error, index) => {
            const style =
              screenWidth > 480
                ? {
                    bottom: `${index * 35}px`,
                  }
                : {
                    top: `${index * 35}px`,
                  };
            return <Error error={error} style={style} />;
          })}
        </div>
      </div>
    </CSSTransition>
  );
};

export default ErrorHandler;
