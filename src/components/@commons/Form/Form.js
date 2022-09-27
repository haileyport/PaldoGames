import { forwardRef } from 'react';
import { StyledForm } from './Form.style';

// eslint-disable-next-line react/display-name
export const Form = forwardRef((props, ref) => {
  return (
    <StyledForm ref={ref} {...props}>
      {props.children}
    </StyledForm>
  );
});
