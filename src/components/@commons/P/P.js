/* eslint-disable react/display-name */
import { forwardRef } from "react";
import styled from "styled-components";

const StyledP = styled.p`
  .ellipsis {
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media screen and (min-width: 400px) {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const P = forwardRef((props, forwardRef) => {
  const { className, style, content, ...rest } = props;

  return (
    <StyledP className={className} style={style} ref={forwardRef} {...rest}>
      {content}
    </StyledP>
  );
});
