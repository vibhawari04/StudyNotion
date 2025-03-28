import React from "react";

const blur = ({ height, width, color }) => {
  return (
    <div
      className={`${color}  ${width} ${height} rounded-[50%] opacity-[0.6] filter blur-3xl `}
    ></div>
  );
};

export default blur;
//
