import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { KEY, URL_BASE } from "../../constants/Constrants"
import styled from "styled-components"

export const GenresName = styled.div`
margin: 0 5px 0 5px;
`
export const Container = styled.div`
display: flex;
border: 1px solid red;
align-items: center;
margin: 0;
padding: 0;
`
export const allDetails = styled.div`
display: flex;
border: 5px solid red;
background-color: azure;
align-items: center;
width: 500px; 
`

const DetailMovie = () => {
    const [detailMovie, setDetailMovie] = useState({})
    const [genres, setGenres] = useState([])
    // const navigate = useNavigate()
    const params = useParams()

    const getDetailsMovies = () => {
        console.log("entrei getDetailsMovies")

        axios.get(`${URL_BASE}3/movie/${params.id}?api_key=${KEY}c&language=en-US&page=1`)
            .then((res) => {
                console.log(res)
                setDetailMovie(res.data)
                setGenres(res.data.genres)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getDetailsMovies()
    }, [])

    const data = detailMovie
    console.log("data", data)
    console.log("data.title", data.title)

    const allGenders = genres.map((genre) => {
        return <GenresName>{genre.name}</GenresName>
    })

    return (
        <allDetails>
            <p>Titulo: {data.title}</p>
            <p>Orçamento: {data.budget}</p>
            <p>Receita: {data.revenue}</p>
            <Container>
                <p>Genero:</p>
                {allGenders}
            </Container>
        </allDetails>
    )
}

export default DetailMovie