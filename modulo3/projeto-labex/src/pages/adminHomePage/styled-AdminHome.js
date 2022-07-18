import styled from "styled-components";


export const DivAdimHome = styled.div`
display: grid;
grid-template-rows: 80px 1fr 80px;
width: 100vw;
height: 100vh;
@media screen and (max-device-width : 480px){
    width: 300px;
    height: 100vh;
    
    }
`

export const DivMain = styled.main`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10vh;
`
export const InfoViagens = styled.section`
display: flex;
justify-content: space-between;
width: 400px;
border: solid 1px black;
margin-top: 10px;
padding: 20px;
flex-direction: column;
border-radius: 5px;
margin: 10px;
@media screen and (max-device-width : 480px){
    width: 300px;
    }
`
export const Section = styled.section`
display: flex;
justify-content: space-between;
` 
export const ButaoDetalhes = styled.button`
width: 200px;
margin: 10px;
height: 30px;
` 
export const Botoes = styled.button`
width: 100px;
margin: 10px;
padding: 5px;
`
export const BotaoExclui = styled.button`
width: 100px;
/* margin: 10px; */
padding: 3px;
background-color: #CF0000;
`
