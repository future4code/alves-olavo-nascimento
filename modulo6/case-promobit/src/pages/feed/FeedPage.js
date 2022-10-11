import { KEY, URL_BASE, URL_BASE_PHOTO } from "../../constants/Constrants"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { goToDetailPage } from "../../router/Cordinator"

export const CardMovies = styled.div`
/* border: 2px solid red; */
width: 300px;
margin: 10px;
padding: 5px;
display: flex;
flex-direction: column;
align-items:center;
/* justify-content:center; */
`
export const PosterPath = styled.img`
/* border: 2px solid violet; */
width: 300px;
height: 400px;
box-sizing: border-box;
&:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`
export const ImagesPoster = styled.div`
/* border: 2px solid black; */
box-sizing: border-box;
height: 400px; 
display: flex;
justify-content: center;
`
export const Body = styled.div`
/* border: 2px solid green; */
box-sizing: border-box;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content:center;
background-color: black;
`
export const Title = styled.p`
color: #FFFFFF;
font-family:'Arial Narrow Bold', sans-serif;
`

const FeedPage = () => {
   const [movie, setMovie] = useState([])
   const navigate = useNavigate()

   const getMovies = () => {
      console.log("entrei getMovies")

      axios.get(`${URL_BASE}3/movie/popular?api_key=${KEY}c&language=en-US&page=1`)
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
   )
}

export default FeedPage  