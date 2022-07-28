import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from './styled-CardPost'
import { goToPostPage } from "../../routes/cordinator";
import axios from "axios";
import { BASE_URL } from '../../assets/url'
import styled from "styled-components";

export const CompoPost = styled.div`
    display: none;
`

const CardPosts = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [listPost, setListPost] = useState([])
    const [loading2, setLoading2] = useState()

    useEffect(() => {
        getPosts()
    }, [])

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
                // localStorage.setItem(JSON.stringify("listPost", res.data))
                localStorage.setItem("listPost", JSON.stringify(res.data));

            })
            .catch(err => {
                setLoading2(false)
                alert(err.response.data)
            })
    }

    return (
        <div>
            {loading2 ? (<p>Carregando posts, aguarde...</p>) :
                listPost.map((post) => {
                    return (
                        // <S.CardPosts key={post.id} onClick={() => goToPostPage(navigate, post.id)} >
                        //     <S.EnviadoPor>
                        //         <p>Enviado por: {post.username}</p>
                        //         <p>Postado em: {post.createdAt.split('T')[0]}</p>
                        //     </S.EnviadoPor>

                        //     <p>Título: {post.title}</p>
                        //     <span>Corpo:{post.body}</span>

                        // </S.CardPosts>
                        <S.CardPosts key={post.id} onClick={() => goToPostPage(navigate, post.id)}>
                            <S.EnviadoPor>
                                <p>Enviado por: {post.username}</p>
                                <p>Postado em: {post.createdAt.split('T')[0]}</p>
                            </S.EnviadoPor>
                            <S.MainCard>
                                <p>Título: {post.title}</p>
                                <span>Corpo:{post.body}</span>
                            </S.MainCard>
                            <S.IconsSection>
                                <p>⬆️</p> <p>{post.voteSum}</p> <p>⬇️</p>
                                <p>💬</p>  <p>{post.commentCount}</p>
                            </S.IconsSection>
                        </S.CardPosts>
                    )
                })
            }
        </div >
    )
}

export default CardPosts
