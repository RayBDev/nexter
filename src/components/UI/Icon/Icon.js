import React from "react";
import "../../../assets/img/icons.svg";

const Icon = props => (
  <svg className={`${props.clName}`}>
    <use xlinkHref={`#icons_icon-${props.icName}`} />
  </svg>
);

export default Icon;
