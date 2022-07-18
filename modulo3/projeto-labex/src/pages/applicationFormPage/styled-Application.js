import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
@media screen and (max-device-width : 480px){
    
    }
`
export const DivApplication = styled.div`
display: grid;
grid-template-rows: 80px 1fr 80px;
height: 100vh;
width: 100vw;

`
export const Botoes = styled.button`
width: 100px;
margin: 10px;
padding: 5px;
`
