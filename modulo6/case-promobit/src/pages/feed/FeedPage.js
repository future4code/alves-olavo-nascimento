import { KEY, URL_BASE, URL_BASE_PHOTO } from "../../constants/Constrants"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { goToDetailPage } from "../../router/Cordinator"


export const Body = styled.div`
/* border: 2px solid green;
box-sizing: border-box;
/* width: 100%; */
display: flex;
flex-basis: 80%;
flex-wrap: wrap;
justify-content:center;
background-color: #FFF;
`
export const CardMovies = styled.div`
border: 2px solid red;
width: 300px;
margin: 10px;
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
/* border: 2px solid violet; */
width: 300px;
height: 300px;
`
export const ImagesPoster = styled.div`
height: 300px; 
display: flex;
justify-content: center;
`
export const Title = styled.p`
/* color: #FFFFFF; */
font-family:'Arial Narrow Bold', sans-serif;
`
export const ContainerHeader = styled.div`
display: flex;
flex-basis: 20%;
height: 20vh;
`

const FeedPage = () => {
   const [movie, setMovie] = useState([])
   const navigate = useNavigate()

   const getMovies = () => {
      console.log("entrei getMovies")

      axios.get(`${URL_BASE}3/movie/popular?api_key=${KEY}c&language=pt-US&page=1`)
         .then((res) => {
            console.log(res)
            setMovie(res.data.results)
         })
         .catch((error) => {
            console.log(error)
         })
   }

   useEffect(() => {
      getMovies()
   }, [])

   return (
      <div>
         <ContainerHeader>

         </ContainerHeader>
         <Body>
            {
               movie.map((movie) => {
                  return (
                     <CardMovies onClick={() => goToDetailPage(navigate, movie.id)}>
                        <ImagesPoster>
                           <PosterPath src={`${URL_BASE_PHOTO}${movie.poster_path}`} />
                        </ImagesPoster>

                        <Title>{movie.title}</Title>
                     </CardMovies>
                  )

               })
            }
         </Body>
      </div>
   )
}

export default FeedPage  