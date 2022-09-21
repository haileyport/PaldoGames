/* eslint-disable react/display-name */
import { forwardRef } from "react";

export const Input = forwardRef((props, forwardRef) => {
  const { type, onKeyPressEvent, ...rest } = props;

  return <input type={type} ref={forwardRef} onKeyPress={onKeyPressEvent} {...rest}></input>;
});
