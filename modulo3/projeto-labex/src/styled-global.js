import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
    background-color: #58237C;
    border: none;
    border-radius: 5px;
    color: white;
  }

  input {
    width: 400px;
    height: 30px;
    border-radius: 5px;
    margin: 5px;
    @media screen and (max-device-width : 480px){
    width: 90vw;
    }
  }
  select {
    width: 400px;
    height: 30px;
    border-radius: 5px;
    margin: 5px;
    @media screen and (max-device-width : 480px){
    width: 90vw;
    }
  }

`