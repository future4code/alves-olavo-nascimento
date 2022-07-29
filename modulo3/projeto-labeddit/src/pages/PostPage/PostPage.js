import axios from "axios";
import * as S from './style-Post'
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from '../../assets/url'
import useForm from "../../hooks/useForm";
// import useProtectedPage from "../../hooks/useProtectedPage";

const PostPage = () => {
    // useProtectedPage()
    // const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [loading2, setLoading2] = useState()
    const [loading3, setLoading3] = useState()
    const [comments, setComments] = useState(0)
    const [numberComments, setNumberComments] = useState()
    const params = useParams()
    const listPost = localStorage.getItem("listPost")
    const listPostConvertida = JSON.parse(listPost);
    const { form, onChange, cleanFields } = useForm({
        body: ""
    })
    console.log(listPostConvertida)

    const listPostConverted = listPostConvertida.filter((list) => {
        return list.id === params.id
    }).map((list) => {
        console.log(list)
        return (
            <S.CardPosts key={list.id}>
                <S.EnviadoPor>
                    <p>Enviado por: {list.username}</p>
                    <p>Postado em: {list.createdAt.split('T')[0]}</p>
                </S.EnviadoPor>
                <S.MainCard>
                    <p>Título: {list.title}</p>
                    <span>Corpo:{list.body}</span>
                </S.MainCard>
                <S.IconsSection>
                    <p>⬆️</p><p>{list.voteSum === 0 ? 0 : list.voteSum}</p><p>⬇️</p>
                    <p>💬</p>  <p>{list.commentCount === 0 ? 0 : list.commentCount}</p>
                </S.IconsSection>
            </S.CardPosts>
        )
    })

    const onSubmit = (event) => {
        event.preventDefault()
        cleanFields()
        postComment()
    }

    useEffect(() => {
        getComment()
    }, [])

    const postComment = (id) => {
        console.log("entrou em postComment Pagina postPage")
        setLoading2(true)
        axios.post(`${BASE_URL}/posts/${params.id}/comments`, form,
            {
                headers: {
                    Authorization: token
                }
            })
            .then(res => {
                setLoading2(false)
                alert(res.data)
                document.location.reload(true)

            })
            .catch(err => {
                setLoading2(false)
                alert(err.response.data.message)
            })
    }

    const getComment = () => {
        console.log("entrou em getComment Pagina postPage")
        setLoading3(true)
        axios.get(`${BASE_URL}/posts/${params.id}/comments`,
            {
                headers: {
                    Authorization: token
                }
            })
            .then(res => {
                setLoading3(false)
                setComments(res.data)
                setNumberComments(res.data.length)
            })
            .catch(err => {
                setLoading3(false)
                alert(err.response.data)
                alert(err.response)
            })
    }

    return (
        <S.DivPost>
            {listPostConverted}
            {loading2 ? (<p>Enviando comentário...</p>) :
                <S.FormPost onSubmit={onSubmit} >
                    <S.InputPost
                        placeholder="Escreva seu comntário..."
                        type='text'
                        required
                        value={form.body}
                        name={"body"}
                        onChange={onChange}
                    />
                    <S.Botons>Comentar</S.Botons>
                </S.FormPost>
            }

            <h3>Conmentários</h3>
            <></>
            {numberComments === 0 ? (<p>Ainda não existe nenhum comentário neste post, seja o primeiro a comentar.</p>) :
                <div>
                    {loading3 ? (<p> Carregando comentários, aguarde...</p>) :
                        comments && comments.map((comme) => {
                            return (
                                <S.CardPosts key={comme.id}>

                                    <S.EnviadoPor>
                                        <p>Enviado por: {comme.username}</p>
                                        <p>Postado em: {comme.createdAt.split('T')[0]}</p>
                                    </S.EnviadoPor>

                                    <p>Corpo:  {comme.body}</p>

                                </S.CardPosts>
                            )
                        })
                    }
                </div>
            }

        </S.DivPost >
    )
}

export default PostPage
