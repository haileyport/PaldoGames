import styled from "styled-components";

export const Header = styled.header``;

export const P = styled.p`
  margin-top: 25px;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  width: 40%;
  border-radius: 10px;
  text-align: center;
  padding-top: 10px;
  letter-spacing: 5px;
  background-color: rgb(99 102 241);
  height: 40px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  color: rgb(75 85 99);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Main = styled.main`
  margin-top: -100px;
  height: 100%;
  min-height: 670px;
  margin-bottom: 20px;
  padding-top: 90px;
`;

export const SearchContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  z-index: 68;
`;

export const SearchInput = styled.input`
  background: #e6e6e6;
  width: 350px;
  height: 40px;
  border: none;
  font-size: 16px;
  border-radius: 50px;
  text-align: center;
  padding-right: 10px;
  padding-top: 4px;
  color: black;

  z-index: 66;
`;

export const Empty = styled.p`
  font-family: "Jua", sans-serif;
  color: white;
  font-size: 200px;
  text-align: center;

  :hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

export const NameSpan = styled.span`
  margin-left: 5;
  color: white;

  @media screen and (max-width: 700px) {
    display: none;
  }
  @media screen and (max-width: 800px) {
    white-space: ${(props) => (props.length > 8 ? "nowrap" : "")};
  }
`;

export const Title = styled.p`
  position: relative;
  font-size: 17;
  font-weight: 300;
  width: 70%;
  margin-left: 20;
  color: white;
  cursor: pointer;
  left: 20px;

  @media screen and (max-width: 450px) {
    font-size: 16px;
    max-width: 280px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
`;

export const Button = styled.button`
  font-size: 15px;
  width: 100px;
  color: rgb(255 255 255);
  background-color: rgb(99 102 241);
  border-width: 0px;
  border-radius: 0.25rem;
  padding: 3px;
  line-height: 1.75rem;
  margin-left: 10px;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:hover {
    background-color: rgb(79 70 229);
    cursor: pointer;
  }
`;
