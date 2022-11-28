import { KEY, URL_BASE, URL_BASE_PHOTO } from "../../constants/Constrants"
import { goToDetailPage } from "../../router/Cordinator"
import Header from "../../components/header/Header"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import * as S from "./styled-FeedPage"
import axios from "axios"

const FeedPage = () => {
   const currentPage = localStorage.getItem("currentPage")
   const lastPage = localStorage.getItem("numberPage")
   const [movie, setMovie] = useState([])
   const [page, setPage] = useState(1)
   const navigate = useNavigate()

   const getMovies = () => {
      axios.get(`${URL_BASE}/movie/popular?api_key=${KEY}&language=pt-BR&page=${page}`)
         .then((res) => {
            // console.log(res.data.results)
            setMovie(res.data.results)
         })
         .catch((error) => {
            alert('Ocorreu um erro no servidor.')
         })
   }

   useEffect(() => {
      getMovies()

      if (!currentPage === null) {
         return setPage(1)
      }

      if (lastPage > 0) {
         setPage(lastPage)
         localStorage.removeItem("numberPage")
      }
   }, [page])

   const nextPage = (page) => {
      setPage(Number(page) + 1)
      localStorage.setItem("currentPage", page)
   }
   const nextTenPage = (page) => {
      setPage(Number(page) + 10)
      localStorage.setItem("currentPage", page)
   }

   const previousPage = () => {
      if (page === 1) return setPage(1)
      setPage(Number(page) - 1)
      localStorage.setItem("currentPage", page)
   }

   const previousTenPage = () => {
      if (page <= 10) return setPage(1)
      setPage(Number(page) - 10)
      localStorage.setItem("currentPage", page)
   }

   const rememberPage = (movieId) => {
      localStorage.setItem("numberPage", page)
      goToDetailPage(navigate, movieId)
   }

   return (
      <S.Body>
         <S.ContainerHeader>
            <Header />
         </S.ContainerHeader>

         <S.ContainerCard>
            {
               movie.map((movie) => {
                  return (
                     <S.CardMovies key={movie.id} onClick={() => rememberPage(movie.id)}>
                        <S.ImagesPoster>
                           <S.PosterPath src={`${URL_BASE_PHOTO}${movie.poster_path}`} />
                        </S.ImagesPoster>

                        <S.Title>{movie.title}</S.Title>
                     </S.CardMovies>
                  )
               })
            }
         </S.ContainerCard>

         <S.ContainerPagination>
            <S.ButtonLessTen onClick={() => previousTenPage(page)}>◀◀</S.ButtonLessTen>
            <S.ButtonLessOne onClick={() => previousPage(page)}>◀</S.ButtonLessOne>

            <S.CurrentPage>{page}</S.CurrentPage>

            <S.ButtonMoreOne onClick={() => nextPage(page)}>▶</S.ButtonMoreOne>
            <S.ButtonMoreTen onClick={() => nextTenPage(page)}>▶▶</S.ButtonMoreTen>
         </S.ContainerPagination>
      </S.Body>
   )
}

export default FeedPage    