import styled from "styled-components";

export const ImgSociais = styled.img`
width: 25px;
margin: 3px;
@media screen and (max-device-width : 480px){
    width: 15px;
    display: flex;
    flex-direction: column;
}
`
export const DivFooter = styled.div`
display:flex;
align-items: center;
justify-content: space-around;
height: 80px;
width: 100vw;
background-color: #58237C;
@media screen and (max-device-width : 480px){
    font-size: 10px;

}
`