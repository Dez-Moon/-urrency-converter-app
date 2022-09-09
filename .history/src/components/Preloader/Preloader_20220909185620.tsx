import React from "react";
import PreloaderSVG from "../../assets/preloader/preloader.svg";
import styles from "./styles.module.scss";

const Preloader = () => {
  return (
    <div>
      <img src={PreloaderSVG} />
    </div>
  );
};

export default Preloader;
