import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.background};
`;

const Balls = ({ ...props }) => {
  return <StyledDiv {...props}></StyledDiv>;
};

export default Balls;
