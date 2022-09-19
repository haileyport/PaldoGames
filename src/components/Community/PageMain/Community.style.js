import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  color: rgb(75 85 99);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 80vh;
`;

const Footer = styled.footer`
  position: relative;
`;

export { Section, Main, Footer };
