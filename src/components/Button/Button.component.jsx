import React from "react";
import "./Button.style.scss";
const Button = ({ children, isGoogleButton, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleButton ? "google-sign-in" : "custom-button"}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
