import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteErrorAC } from "../../store/currency-reducer";
import "./styles.scss";

type PropsType = {
  error: string;
  index: number;
};
const Error = (props: PropsType) => {
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     setTimeout(() => {
  //       dispatch(deleteErrorAC({ index: props.index }));
  //     }, 5000);
  //   });
  debugger;
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

export default Error;
