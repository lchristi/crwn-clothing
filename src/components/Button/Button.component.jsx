import React from "react";
import "./Button.style.scss";
const Button = ({ children, isGoogleButton, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleButton ? "google-sign-in" : "custom-button"
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
