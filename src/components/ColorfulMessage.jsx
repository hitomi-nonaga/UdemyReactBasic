import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;

  // console.log("カラフル");
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
