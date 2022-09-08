import { useSelector } from "react-redux";
import { AppRootStateType } from "../../store/store";
import { CurrencyType } from "../../types/types";
import styles from "./styles.module.scss";



const ConversionComponent = () => {
    const currency = useSelector<AppRootStateType>(state => state.currency.currency)
  return (
    <div className={styles.conversionComponent}>
      <div
        onClick={() => {
          if (values.length < props.currency.length) {
            const newArray = values.slice();
            newArray.push({ value: "", index: newArray.length, ratio: 0 });
            setValues(newArray);
          }
        }}
      >
        Добавить окно
      </div> */}
      {/* <div className={styles.conversionBlockContainer}>
        {values.map((el: any, index: number) => (
          <ConversionBlock
            currency={props.currency}
            values={values}
            index={index}
            setValues={setValues}
          />
        ))}
      </div>
    </div>
  );
};

export default ConversionComponent;
