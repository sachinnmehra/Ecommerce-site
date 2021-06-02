import React from "react";
import "./Button.css";

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <div
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Button;
