import React, { Component } from "react";

import ReactSCSS from "react-scss-style-module";
import styles from "./loading-component.module.scss";

function LoadingComponent(props) {
  const variant = ReactSCSS.bind(styles, {classes: "lds-ellipsis show"});

  return (
    <div style={{paddingTop: "2rem", textAlign: "center"}}>
      <div className={variant}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default LoadingComponent;
