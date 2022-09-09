import { useSelector } from "react-redux";
import { InitialStateType } from "../../store/currency-reducer";
import { AppRootStateType } from "../../store/store";
import "./styles.scss";
import { CSSTransition } from "react-transition-group";
import Error from "./Error";

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
            // const style = {
            //   bottom:
            //     screenWidth > 505
            //       ? `${index * 30 - 100}px`
            //       : `${-index * 30 - 110}px`,
            // };
            const style = {};
            return <Error error={error} style={style} />;
          })}
        </div>
      </div>
    </CSSTransition>
  );
};

export default ErrorHandler;
