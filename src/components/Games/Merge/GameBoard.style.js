import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: #9d8ba5;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  @media (max-width: 650px) {
    display: none;
  }
`;

export const Alert = styled.div`
  border: 3px solid white;
  border-radius: 2rem;
  margin: 2rem;
  padding: 2rem;
  font-size: 2rem;
  font-weight: bold;
  font-display: center;
  color: white;
`;
