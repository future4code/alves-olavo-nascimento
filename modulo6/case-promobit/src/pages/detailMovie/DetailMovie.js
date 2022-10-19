import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { KEY, URL_BASE, URL_BASE_PHOTO } from "../../constants/Constrants"
import styled from "styled-components"

export const GenresName = styled.div`
margin: 0 5px 0 5px;
color: #FFF;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const Container = styled.div`
display: flex;
border: 1px solid red;
align-items: center;
/* width: 500px; */
`
export const ContainerBody = styled.div`
border: 1px solid black;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%; 
height: 100%; 
background-color: black;
/* background-image: ${props => `url('${props.URL_BASE_PHOTO}${props.poster_path}')`}; */
`

export const ContainerCard = styled.div`
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
/* width: 50vw;  */
/* height: 50vh;  */
`
export const allDetails = styled.div`
border: 3px solid yellow;
/* display: flex; */
/* align-items: center; */
border: 5px solid green;
background-color: blue;
/* width: 50vw; */
/* height:50vh; */
`
export const PosterBack = styled.img`
width: 500px;
height: 500px;
/* background-image: url({data.poster_path}); */
/* background-image: top; */

`

export const InfoMovie = styled.p`
color: #FFF;
font-size: 15px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const SinopseTitulo = styled.p`
color: #FFF;
font-size: 23px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const Sinopse = styled.p`
color: #FFF;
font-size: 18px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const DetailMovie = () => {
    const [detailMovie, setDetailMovie] = useState({})
    const [genres, setGenres] = useState([])
    // const [companiesProduction, setCompaniesProduction] = useState([])
    // const navigate = useNavigate()
    const params = useParams()

    const getDetailsMovies = () => {
        console.log("entrei getDetailsMovies")

        axios.get(`${URL_BASE}3/movie/${params.id}?api_key=${KEY}c&language=pt-US&page=1`)
            .then((res) => {
                console.log(res)
                setDetailMovie(res.data)
                setGenres(res.data.genres)
                // setCompaniesProduction(res.data.production_companies)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // const getTrailerMovies = () => {
    //     console.log("entrei getTrailerMovies")

    //     axios.get(`${URL_BASE}3/movie/${params.id}?api_key=${KEY}c&language=pt-US&page=1`)
    //         .then((res) => {
    //             console.log(res)
    //             setDetailMovie(res.data)
    //             setGenres(res.data.genres)
    //             setCompaniesProduction(res.data.production_companies)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

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
        <ContainerBody >
            <PosterBack src={`${URL_BASE_PHOTO}${data.poster_path}`} alt="Imagem Logo Empresa Produtora" />
            <ContainerCard>
                <allDetails>
                    <InfoMovie>Titulo: {data.title}</InfoMovie>
                    <InfoMovie>Titulo Original: {data.original_title}</InfoMovie>
                    <InfoMovie>Data Lançamento: {data.release_date}</InfoMovie>
                    {/* <InfoMovie>Tempo de execução: {data.revenue}</InfoMovie> */}
                    <InfoMovie>Slogan: {data.tagline}</InfoMovie>
                    <InfoMovie>Orçamento: {data.budget}</InfoMovie>
                    <InfoMovie>Arecadou: {data.revenue}</InfoMovie>
                    <SinopseTitulo>Sinopse</SinopseTitulo>
                    <Sinopse>{data.overview}</Sinopse>
                    <InfoMovie>Idioma Original: {data.original_language}</InfoMovie>
                    <Container>
                        <InfoMovie>Gênero:</InfoMovie>
                        {allGenders}
                    </Container>
                </allDetails>
            </ContainerCard>
        </ContainerBody>
    )
}

export default DetailMovie