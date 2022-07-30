import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from './styled-CardPost'
import { goToPostPage } from "../../routes/cordinator";
import axios from "axios";
import { BASE_URL } from '../../assets/url'
import styled from "styled-components";
import Button_Baloon from '../../assets/imagens/baloon.png'
import Button_Up from '../../assets/imagens/up.png'
import Button_Down from '../../assets/imagens/down.png'
import Button_Up_black from '../../assets/imagens/up2.png'
import Button_Down_black from '../../assets/imagens/down2.png'

export const CompoPost = styled.div`
    display: none;
`

const CardPosts = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [listPost, setListPost] = useState([])
    const [loading2, setLoading2] = useState()
    const [voteSumState, setVoteSumState] = useState()
    const [liked, setLiked ] = useState()

    const getPosts = () => {
        setLoading2(true)
        axios
            .get(`${BASE_URL}/posts`,
                {
                    headers: {
                        Authorization: token
                    }
                })
            .then(res => {
                setLoading2(false)
                setListPost(res.data)
                console.log(res.data)
                localStorage.setItem("listPost", JSON.stringify(res.data));

            })
            .catch(err => {
                setLoading2(false)
                console.log("entrou no erro getPosts na pagina CardPost", err)
                alert(err.response.data)
            })
    }

    const createPostVote = (id, voteSum) => {
        console.log(voteSum)
        console.log("entrou em createPostVote +1 pagina CardPost")
        // setVoteSum(voteSum)
        const body = {
            direction: 1
        }
        axios
            .post(`${BASE_URL}/posts/${id}/votes`, body,
                {
                    headers: {
                        Authorization: token
                    }
                })
            .then(res => { 
                setLiked(true)
                console.log(res)
                res.status === 201 && setVoteSumState(voteSum)
                res.status === 201 && alert("Voto registrado, obrigado.")
            })
            .catch(err => {
                // setLoading2(false)
                console.log(err)
                alert("Ocorreu um erro ao curtir, tente novamente.")
                // alert(err)
            })

    }

    const changePostVote = (id, voteSum) => {
        console.log("entrou em changePostVote -1 pagina CardPost")
        console.log(voteSumState)
        const body = {
            direction: -1
        }
        axios
            .put(`${BASE_URL}/posts/${id}/votes`, body,
                {
                    headers: {
                        Authorization: token
                    }
                })
            .then(res => {
                // setLoading2(false)
                console.log(res)
                // setPostVote(res)
                res.status === 200 && setVoteSumState(voteSum) 
                res.status === 200 && alert("Voto -1 registrado, obrigado.")
            })
            .catch(err => {
                // setLoading2(false)
                console.log(err)
                alert("Ocorreu um erro ao votar, tente novamente.")
                // alert(err)
            })
    }

    const deletePostVote = (id) => {
        console.log("entrou em deletePostVote pagina CardPost")
        console.log(voteSumState)
        axios
            .put(`${BASE_URL}/posts/${id}/votes`,
                {
                    headers: {
                        Authorization: token
                    }
                })
            .then(res => {
                // setLoading2(false)
                console.log("Deu certo", res)
                // setPostVote(res)
            })
            .catch(err => {
                // setLoading2(false)
                console.log(err)
                alert("Ocorreu um erro ao deletar curtida, tente novamente.")
                // alert(err)
            })
    }

    useEffect(() => {
        getPosts()
    }, [voteSumState])

    return (
        <div>
            {loading2 ? (<p>Carregando posts, aguarde...</p>) :
                listPost.map((post) => {
                    return (
                        <S.CardPosts key={post.id}>
                            <S.CorpoClicavel onClick={() => goToPostPage(navigate, post.id)}>
                                <S.EnviadoPor>
                                    <p>Enviado por: {post.username}</p>
                                    <p>Postado em: {post.createdAt.split('T')[0]}</p>
                                </S.EnviadoPor>
                                <S.MainCard>
                                    <p>Título: {post.title}</p>
                                    <span>Corpo:{post.body}</span>
                                </S.MainCard>
                            </S.CorpoClicavel>
                            <S.ConteinerIcons>
                                <S.IconsUpDownBaloon
                                    src={Button_Up} alt='ícone gostei'
                                    onClick={() => createPostVote(post.id, post.voteSum)}
                                />

                                <p>{post.voteSum === null ? 0 : post.voteSum}</p>

                                <S.IconsUpDownBaloon
                                    src={Button_Down} alt='ícone não gostei'
                                    onClick={() => changePostVote(post.id, post.voteSum)}
                                />
                                <S.IconsUpDownBaloon
                                    src={Button_Baloon} alt='ícone comentarios'
                                />

                                <p>{post.commentCount === null ? 0 : post.commentCount}</p>

                            </S.ConteinerIcons>
                        </S.CardPosts>
                    )
                })
            }
        </div >
    )
}

export default CardPosts
