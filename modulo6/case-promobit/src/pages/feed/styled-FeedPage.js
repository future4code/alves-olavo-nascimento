import styled from "styled-components";

export const Body = styled.div`
display: flex;
flex-direction: column;
height:100%;
width: 100%;
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
export const ContainerHeader = styled.div`
display: flex;
flex-basis: 15%;
`
export const ContainerCard = styled.div`
display: flex;
flex-basis: 70%;
flex-wrap: wrap;
column-gap: 30px;
row-gap: 30px;
justify-content:center;
/* border: 2px solid red; */
margin-top: 5vh;
`
export const ContainerPagination = styled.div`
display: flex;
flex-basis: 15%;
/* width: 100%; */
height: 200px;
justify-content: center;
/* border: 2px solid red; */
padding-bottom: 40px;
padding-top: 40px;
`
export const Buttons = styled.button`
display: flex;
/* flex-basis: 5%; */
width: 60px;
height: 50px;
justify-content: center;
/* border: 2px solid red; */
align-items:center;
`
export const CardMovies = styled.div`
/* border: 2px solid red; */
/* width: 300px; */
/* height: 50vh; */
padding: 5px;
display: flex;
flex-direction: column;
align-items:center;
border-radius: 5px;
&:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`
export const PosterPath = styled.img`
width: 300px;
height: 300px;
border-radius: 10px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 100px;
height: 150px;
}
`
export const ImagesPoster = styled.div`
/* border: 2px solid violet; */
/* height: 300px;  */
display: flex;
justify-content: center;
`
export const Title = styled.p`
color: #FFFFFF;
font-family:'Arial Narrow Bold', sans-serif;
text-align:center;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
font-size: 12px;
width: 120px;
}
`
export const CurrentPage = styled.button`
/* cursor: pointer; */
width: 50px;
height: 50px;
border-radius: 50%;
`
export const ButtonMoreOne = styled.button`
cursor: pointer;
width: 50px;
height: 50px;
border-radius: 50%;
&:hover{
   background-color: #05FF05;
}
`
export const ButtonMoreTen = styled.button`
cursor: pointer;
width: 50px;
height: 50px;
border-radius: 50%;
&:hover{
   background-color: #038B03;
}
`
export const ButtonLessOne = styled.button`
cursor: pointer;
width: 50px;
height: 50px;
border-radius: 50%;
&:hover{
   background-color: #FF2929;
}
`
export const ButtonLessTen = styled.button`
cursor: pointer;
width: 50px;
height: 50px;
border-radius: 50%;
&:hover{
   background-color: #AA0202;
}
`