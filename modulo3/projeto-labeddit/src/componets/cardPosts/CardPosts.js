import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from './styled-CardPost'
import { goToPostPage } from "../../routes/cordinator";
import axios from "axios";
import { BASE_URL } from '../../assets/url'
import styled from "styled-components";
import useForm from "../../hooks/useForm";

export const CompoPost = styled.div`
    display: none;
`

const CardPosts = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [listPost, setListPost] = useState([])
    const [loading2, setLoading2] = useState()
    const [postVote, setPostVote] = useState(false)
    const { form, onChange, cleanFields } = useForm({
        direction: 1
    })

    // console.log(params)

    useEffect(() => {
        getPosts()
    }, [postVote])

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
                // console.log(res.data)
                // localStorage.setItem(JSON.stringify("listPost", res.data))
                localStorage.setItem("listPost", JSON.stringify(res.data));

            })
            .catch(err => {
                setLoading2(false)
                console.log(err.response.data.message)
                alert(err.response.data.message)
            })
    }


    const CreatePostVote = (id) => {
        console.log(id)
        console.log(form)
        console.log("entrou em CreatePostVote pagina CardPost")
        // setLoading2(true)
        axios
            .post(`${BASE_URL}/posts/${id}/votes`, form,
                {
                    headers: {
                        Authorization: token
                    }
                })
            .then(res => {
                // setLoading2(false)
                console.log(res)
                // setPostVote(res)
                res.status === 201 && setPostVote(true)
                res.status === 201 && alert("Voto registrado, obrigado.")
            })
            .catch(err => {
                // setLoading2(false)
                console.log(err)
                alert("Ocorreu um erro ao votar, tente novamente.")
                // alert(err)
            })
    }

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
                            <S.IconsSection>
                                <div onClick={() => CreatePostVote(post.id)}>⬆️</div> <p>{post.userVote === null ? 0 : post.userVote}</p> <p>⬇️</p>
                                <p>💬</p>  <p>{post.commentCount === null ? 0 : post.commentCount}</p>
                            </S.IconsSection>
                        </S.CardPosts>

                    )
                })
            }
        </div >
    )
}

export default CardPosts
