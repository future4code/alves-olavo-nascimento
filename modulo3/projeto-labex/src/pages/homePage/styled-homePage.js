import styled from "styled-components";

export const DivHome = styled.div`
display: grid;
grid-template-rows: 80px 1fr 80px;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
box-sizing: border-box;
`
export const DivButtons = styled.div`
display: flex;
justify-content: center;
`
export const Butons = styled.button`
width: 300px;
height: 100px;
margin: 30px;
border-radius: 5px;
background-color: #58237C;
border: none;
@media screen and (max-device-width : 480px){
    width: 150px;
    height: 70px;
    margin: 10px;
    }
`