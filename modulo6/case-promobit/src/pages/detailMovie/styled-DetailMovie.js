import styled from "styled-components";

export const ContainerBody = styled.div`
border: 1px solid black;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background:
linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
background-color: #131313;
background-size: 20px 20px;
`
// =================== Container sobre as informações do filme ===================
export const ButtonBack = styled.button`
width: 200px;
height: 40px;
margin-top: 20px;
margin-bottom: 20px;
border-radius: 40px;
cursor: pointer;
border: none;
color: #FFF;
background-color: black;
fon
&:hover{
    background-color: #FFF;
}
`
export const ContainerCard = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
export const Iframe = styled.iframe`
width: 60vw;
height: 40vh;
border-radius: 5px;
border: none;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 98vw;
height: 250px;
}

`
export const ContainerMovie = styled.div`
display: flex;
padding-bottom: 10px;
margin-top: 20px;
/* border: 1px solid red; */
flex-direction: column;
/* @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
} */
/* border: 1px solid greenyellow;   */
`
export const PosterFront = styled.img`
width: 400px;
height: 500px;
border-radius: 5px;
margin-left: 10px;
object-fit: fill;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 100vw;
height: 400px;
margin-left: 0px;
}

`
export const AllDetails = styled.div`
width: 30vw;
/* height: 400px; */
margin-left: 10px;
/* border-left: 1px solid #FFF; */
padding-left: 10px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
margin-left: 0px;
border-left: 0px solid #FFF;
}

`
export const ContainerInfo = styled.div`
display: flex;
/* align-items: center; */
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
 /* border: 1px solid #AAAAAA; */
 width: 90vw;
}

`
export const InfoMovie = styled.p`
color: #FFF;
font-size: 15px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 800;
/* border: solid 1px yellow; */
`
export const ValueInfo = styled.p`
color: #9B9B9B;
font-size: 16px;
margin-left: 5px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
/* @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
font-size: 14px;
} */
/* border: solid 1px red; */
`
export const ContainerGenres = styled.p`
color: #9B9B9B;
display: flex;
align-items: center;
flex-wrap: wrap;
/* border: solid 1px green; */
`
export const GenresName = styled.div`
margin: 0 5px 0 5px;
color: #FFF;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const ContainerSinopse = styled.div`
/* width: 50%; */
/* margin-left: 10px; */
/* height: 400; */
/* border-left: 1px solid #FFF; */
/* border: 1px solid white; */
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    /* border-left: 0px solid #FFF; */
    /* width: 50%; */
    /* height: 100%; */
}
/* border: 1px solid blue; */

`
export const SinopseTitulo = styled.p`
color: #FFF;
margin-left: 10px;
font-size: 23px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const Sinopse = styled.p`
width: 90vw;
margin-left: 10px;
color: #9B9B9B;
font-size: 18px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const TitleContainer = styled.h2`
color: #FFF;
padding: 20px;
background-color: #032541;
border-radius: 10px;
width: 50%;
text-align: center;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
padding: 10px;
font-size: 16px;
}

`
// =================== Container Sobre Elenco ===================

export const ContainerCast = styled.section`
display: flex;
align-items: center;
flex-direction: column;
`
export const ContainerActor = styled.section`
margin-top: 20px;
display: flex;
column-gap: 20px;
overflow-x: auto;
width: 98vw;
::-webkit-scrollbar{
    background-color: #1D1D1D;
    border-radius: 5px;
}
::-webkit-scrollbar-thumb{
    background-color: black;
    border-radius: 5px;
}
`
export const ButtonMoreActor = styled.button`
width: 200px;
height: 40px;
margin-top: 20px;
margin-bottom: 20px;
border-radius: 40px;
cursor: pointer;
border: none;
&:hover{
    background-color: #032541;
    color: #FFF;
}
`
export const ContainerInfoPerson = styled.section`
margin-top: 20px;
display: flex;
align-items: center;
flex-direction: column;
`
export const ContainerInfoActor = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
`
export const TextBiografia = styled.p`
text-align: justify;
width: 80%;
color: #FFF;
font-family: sans-serif;
`
export const Teste = styled.div`
display: flex;
justify-content: center;
`
export const CardActor = styled.section`
display: flex;
align-items: center;
flex-direction: column;
`
export const ImageActor = styled.img`
max-width: 100px;
cursor: pointer;
`
export const InfoActor = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100px
`
export const NamePersonActor = styled.p`
color: #FFF;
font-size: 12px;
font-family:  sans-serif;
`
// =================== Container de filmes similares ===================

export const ContainerMovieSimilar = styled.section`
margin-top: 20px;
display: flex;
column-gap: 30px;
row-gap: 30px;
overflow-x: auto;
width: 98vw;
::-webkit-scrollbar{
    background-color: #1D1D1D;
    border-radius: 5px;
}
::-webkit-scrollbar-thumb{
    background-color: black;
    border-radius: 5px;
}
`
export const CardMovieSimilar = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 200px;
cursor: pointer;
`
export const TitleMovieSimilar = styled.p`
color: #FFF;
font-size: 12px;
font-family:  sans-serif;
`
export const ImageMovieSimilar = styled.img`
width: 200px;
height: 100%;
/* box-shadow: 5px px 5px 5px #FFF; */
`