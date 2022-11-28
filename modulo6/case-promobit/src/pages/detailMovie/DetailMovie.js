import { KEY, URL_BASE, URL_BASE_PHOTO, URL_IFRAME } from "../../constants/Constrants"
import { useNavigate, useParams } from "react-router-dom"
import { goToDetailPage, goToFeedPage } from "../../router/Cordinator"
import { useEffect, useState } from "react"
import * as S from "./styled-DetailMovie"
import axios from "axios"

const DetailMovie = () => {
    const [detailMovie, setDetailMovie] = useState({})
    const [genres, setGenres] = useState([])
    const [trailer, setTrailer] = useState([])
    const [cast, setCast] = useState([])
    const [similar, setSimilar] = useState([])
    const [newMovie, setNewMovie] = useState(0)
    const [person, setPerson] = useState({})
    const [personConditinal, setPersonConditinal] = useState(false)
    const params = useParams()
    const navigate = useNavigate()

    const getDetailsMovies = () => {

        axios.get(`${URL_BASE}/movie/${params.id}?api_key=${KEY}&language=pt-BR`)
            .then((res) => {
                setDetailMovie(res.data)
                setGenres(res.data.genres)
            })
            .catch((error) => {
                alert('Ocorreu um erro no servidor.')
            })
    }

    const getTrailerMovies = () => {

        axios.get(`${URL_BASE}/movie/${params.id}/videos?api_key=${KEY}&language=pt-BR`)
            .then((res) => {
                setTrailer(res.data.results)
            })
            .catch((error) => {
                alert("Ocorreu um erro no servidor.")
            })
    }
    const getCast = () => {

        axios.get(`${URL_BASE}/movie/${params.id}/credits?api_key=${KEY}&language=pt-BR`)
            .then((res) => {
                setCast(res.data.cast)
            })
            .catch((error) => {
                alert("Ocorreu um erro no servidor.")
            })
    }
    const getSimilarMovie = () => {

        axios.get(`${URL_BASE}/movie/${params.id}/similar?api_key=${KEY}&language=pt-BR`)
            .then((res) => {
                // console.log(res.data.results)
                setSimilar(res.data.results)
            })
            .catch((error) => {
                alert("Ocorreu um erro no servidor.")
            })
    }
    const getDetailsPerson = (presonId) => {

        axios.get(`${URL_BASE}/person/${presonId}?api_key=${KEY}&language=pt-BR`)
            .then((res) => {
                console.log(res.data)
                setPerson(res.data)
            })
            .catch((error) => {
                alert("Ocorreu um erro no servidor.")
            })
    }

    const detailsPerson = (personId) => {
        getDetailsPerson(personId)

        console.log("person.biography", !person.biography)
        if (person.biography == "" ||person.biography == undefined ||person.biography == "") {
            setPersonConditinal(true)
        }
    }

    const showActors = () => {
        setPersonConditinal(false)
    }

    const infoNotFound = () => {
        setPersonConditinal(false)
        alert("Não foram encontradas informações deste ator.")
    }

    useEffect(() => {
        getDetailsMovies()
        getTrailerMovies()
        getCast()
        getSimilarMovie()
    }, [newMovie])

    const data = detailMovie

    const allGenders = genres.map((genre) => {
        return <S.GenresName key={genre.name}>{genre.name}</S.GenresName>
    })

    const dateLocal = new Date(data.release_date).toLocaleDateString().split("/").join("-")

    let newDate = 0
    if (person.birthday) {
        newDate = person.birthday.split("-")
    }

    const birthday = `${newDate[2]}/${newDate[1]}/${newDate[0]}`

    const trailerFilter = trailer.map((traile) => traile.key)

    const trailerKey = trailerFilter[0]

    const castExist = cast.filter((cas) => cas.profile_path !== null)

    const goToNewMovie = (movieId) => {
        setNewMovie(newMovie + 1)
        goToDetailPage(navigate, movieId)
    }

    return (
        <S.ContainerBody>
            <S.ButtonBack onClick={() => goToFeedPage(navigate)}>Voltar</S.ButtonBack>

            <S.ContainerCard>
                <S.PosterFront src={`${URL_BASE_PHOTO}${data.poster_path}`} alt={`Capa filme ${data.title}`} />

                <S.ContainerMovie>

                    <S.AllDetails>
                        <S.ContainerInfo>
                            <S.InfoMovie>Titulo:</S.InfoMovie>
                            <S.ValueInfo>{data.title}</S.ValueInfo>
                        </S.ContainerInfo>
                        <S.ContainerInfo>
                            <S.InfoMovie>Data Lançamento:</S.InfoMovie>
                            <S.ValueInfo>{dateLocal}</S.ValueInfo>
                        </S.ContainerInfo>
                        <S.ContainerInfo>
                            <S.InfoMovie>Gênero:</S.InfoMovie>
                            <S.ContainerGenres>{allGenders}</S.ContainerGenres>
                        </S.ContainerInfo>
                    </S.AllDetails>

                    <S.ContainerSinopse>
                        <S.SinopseTitulo>Sinopse</S.SinopseTitulo>
                        <S.Sinopse>{data.overview}</S.Sinopse>
                    </S.ContainerSinopse>
                </S.ContainerMovie>
                {
                    trailer.length > 0 && <S.Iframe src={`${URL_IFRAME}/${trailerKey}?autoplay=1&mute=1`} title="Trailer de filmes" />
                }
                {
                    personConditinal === false ?
                        (
                            <S.ContainerCast>
                                <S.TitleContainer>Elenco</S.TitleContainer>
                                <S.ContainerActor>
                                    {
                                        castExist.map((cas) => {
                                            return (
                                                <S.Teste key={cas.id}>
                                                    {
                                                        cas.profile_path &&
                                                            (
                                                                <S.CardActor>
                                                                    <S.ImageActor onClick={() => detailsPerson(cas.id)} src={`${URL_BASE_PHOTO}${cas.profile_path}`} alt={`Imagem de ${cas.name}`} />

                                                                    <S.InfoActor>
                                                                        <S.NamePersonActor>{`${cas.name} Personagem: ${cas.character}`}</S.NamePersonActor>
                                                                    </S.InfoActor>
                                                                </S.CardActor>
                                                            )
                                                    }
                                                </S.Teste>
                                            )
                                        })
                                    }
                                </S.ContainerActor>
                            </S.ContainerCast>
                        )
                        :
                        (
                            <S.ContainerInfoPerson>
                                <S.TitleContainer>Sobre Ator</S.TitleContainer>
                                <section>
                                    {
                                        person.biography !== "" ?
                                            (
                                                <S.ContainerInfoActor>
                                                    <S.ImageActor src={`${URL_BASE_PHOTO}${person.profile_path}`} alt={`Imagem de ${person.name}`} />
                                                    <S.ValueInfo>{person.name}</S.ValueInfo>
                                                    <S.InfoMovie>Nasceu em:</S.InfoMovie>
                                                    <S.ValueInfo>{person.birthday !== null ? birthday : <p></p>}</S.ValueInfo>
                                                    <S.InfoMovie>Naturalidade:</S.InfoMovie>
                                                    <S.ValueInfo>{person.place_of_birth}</S.ValueInfo>
                                                    <S.InfoMovie>Biografia:</S.InfoMovie>
                                                    <S.TextBiografia>{person.biography}</S.TextBiografia>
                                                </S.ContainerInfoActor>
                                            )
                                            :
                                            (
                                                infoNotFound()
                                            )
                                    }

                                </section>
                                <S.ButtonMoreActor onClick={showActors}>Mais Atores</S.ButtonMoreActor>
                            </S.ContainerInfoPerson>
                        )
                }
                <S.TitleContainer>Filmes Similares</S.TitleContainer>1
                <S.ContainerMovieSimilar>
                    {
                        similar.map((simila) => {
                            return (
                                <S.CardMovieSimilar key={simila.id} onClick={() => goToNewMovie(simila.id)}>
                                    <S.ImageMovieSimilar src={`${URL_BASE_PHOTO}${simila.poster_path}`} alt={`Imagem de ${simila.title}`} />
                                    <S.TitleMovieSimilar>{simila.title}</S.TitleMovieSimilar>
                                </S.CardMovieSimilar>
                            )
                        })
                    }
                </S.ContainerMovieSimilar>
            </S.ContainerCard>
        </S.ContainerBody>
    )
}

export default DetailMovie