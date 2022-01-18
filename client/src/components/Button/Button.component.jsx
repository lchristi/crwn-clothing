import React from "react";
import { CustomButtonContainer } from "./Button.styles";
const Button = ({ children,...props }) => {
  return (    
    <CustomButtonContainer {...props}>      
      {children}
    </CustomButtonContainer>
  );
};

export default Button;
