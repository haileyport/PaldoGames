import styled from "styled-components";

const Header = styled.header`
  position: relative;
  padding: 16px 64px 16px 16px;
  background-color: #f1f1f1;
  font-weight: 700;
  > button {
    border: none;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    color: #999;
    background-color: transparent;
    cursor: pointer;
  }
`;

const Main = styled.main`
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;

const Form = styled.form``;

const Input = styled.input`
  width: 80%;
  height: 30px;
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 300px;
  padding: 0.8em;
  border-radius: 0.5em;
  border: 2px solid lightblue;
  outline: none;
  resize: none;
`;

const Button = styled.button`
  width: 80%;
  height: 30px;
`;

const label = styled.label`
  padding: 0.8em;
  position: absolute;
  background-color: white;
`;

export { Main, Form, Input, TextArea, Button, label };
