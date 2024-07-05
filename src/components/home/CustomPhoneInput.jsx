import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const CustomPhoneInput = ({ readOnly, disabled, ...props }) => {
  // Render the PhoneInput component with the provided props
  return (
    <PhoneInput
      {...props}
      inputProps={{
        readOnly: readOnly,
        disabled: disabled,
      }}
    />
  );
};

export default CustomPhoneInput;
