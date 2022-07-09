import styled from 'styled-components'

export const DivPerfil = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 500px;
height: 600px;
border-radius: 3%;
background: linear-gradient(18deg, rgba(30,19,150,1) 57%, rgba(212,47,141,0.9855072463768116) 81%);
/* background: linear-gradient(27deg, rgba(213,68,126) 0%, rgba(213,68,126) 35%, rgba(242,122,66) 100%); */
`
export const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: 30vw;
`
export const Botoes = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 200px;
margin-top: 15px;
`
export const Imagem = styled.img`
width: 200px;
height: 300px;
object-fit: contain;
margin: 0;
`
export const InforPerfil = styled.p`
color: wheat;
margin: 0;
width: 190px;
`
export const NomeProjeto = styled.h3`
margin: 0;
`
export const ImgGosteiNaoGostei = styled.img`
width: 60px;
color: red;
`