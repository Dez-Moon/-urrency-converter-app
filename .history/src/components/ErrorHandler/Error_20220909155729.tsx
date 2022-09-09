import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteErrorAC } from "../../store/currency-reducer";
import "./styles.scss";

type PropsType = {
  error: { error: string; index: string };
  style: { top: string };
};
const Error = (props: PropsType) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(deleteErrorAC({ index: props.error.index }));
    }, 2000);
  });
  return (
    <div className='error' style={props.style}>
      <div>{props.error.error}</div>
      <button
        onClick={() => {
          dispatch(deleteErrorAC({ index: props.error.index }));
        }}
      >
        ок
      </button>
    </div>
  );
};

export default Error;
