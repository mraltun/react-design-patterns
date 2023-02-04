import React from "react";

export const printProps = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};
