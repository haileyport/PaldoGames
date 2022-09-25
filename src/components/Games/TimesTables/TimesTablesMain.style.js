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

const TimesTablesTitle = styled.h1`
  font-size: 4rem;
`;

const TimesTablesSmallTitle = styled.span`
  font-size: 1.8em;
  margin: 1em 0;
`;

const TimesTablestext = styled.div`
  font-size: 2.5em;
  font-weight: 300;
  margin-bottom: 0.5em;
`;

const TimesTablesLives = styled.div`
  font-size: 3.3em;
  position: absolute;
  top: 5%;
  right: 10%;
  @media screen and (max-width: 65em) {
    font-size: 2.8em;
  }
`;

const TimesTablesBtn = styled.button`
  display: inline-flex;
  color: rgb(255 255 255);
  background-color: rgb(99 102 241);
  border-width: 0px;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:hover {
    background-color: rgb(79 70 229);
    cursor: pointer;
  }
`;

const AlarmContainer = styled.span`
  position: relative;
  position: absolute;
  right: 34%;
  top: 19%;

  @media screen and (max-width: 65em) {
    top: 18%;
    right: 10%;
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

const TimesTablesInput = styled.input`
  width: 100px;
  font-size: 1.5rem;
  padding: 6px 8px;
  background-color: none;
  outline: none;
  border-width: 1px;
  border-radius: 1rem;
  border-style: solid;
  margin-right: 10px;
  margin: 10px;
`;

const TimesTablesScore = styled.span`
  position: absolute;
  top: 13%;
  right: 9%;
  font-size: 2.8em;
  @media screen and (max-width: 65em) {
    font-size: 2em;
    right: 10.5%;
  }
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
  TimesTablesInput,
  TimesTablesScore,
};
