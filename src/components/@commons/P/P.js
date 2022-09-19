/* eslint-disable react/display-name */
import { forwardRef } from "react";

export const P = forwardRef((props, forwardRef) => {
  const { className, style, content, ...rest } = props;

  return (
    <p className={className} style={style} ref={forwardRef} {...rest}>
      {content}
    </p>
  );
});
