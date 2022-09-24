import styled from "styled-components";

const StyledTimesTables = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #1e293b;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const TimesTablesTitle = styled.div`
  font-size: 3em;
`;

const TimesTablesSmallTitle = styled.span`
  font-size: 1.3em;
  margin: 1em 0;
`;

const TimesTablestext = styled.div`
  font-size: 1.5em;
  font-weight: 300;
  margin-bottom: 0.5em;
`;

const TimesTablesLives = styled.div`
  font-size: 3.3em;
  position: absolute;
  top: 5%;
  right: 10%;
  @media screen and (max-width: 40em) {
    font-size: 2.8em;
  }
`;

const TimesTablesBtn = styled.button`
  font-size: 1em;
  margin-top: 1.3em;
`;

const AlarmContainer = styled.span`
  position: relative;
  position: absolute;
  right: 36%;
  top: 25%;

  @media screen and (max-width: 65em) {
    right: 12%;
  }
`;

const TimesTablesAlarm = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.5em;
  font-weight: 700;
  transform: translate(-50%, -50%);
`;

export {
  StyledTimesTables,
  TimesTablesTitle,
  TimesTablestext,
  TimesTablesSmallTitle,
  TimesTablesLives,
  TimesTablesBtn,
  TimesTablesAlarm,
  AlarmContainer,
};
