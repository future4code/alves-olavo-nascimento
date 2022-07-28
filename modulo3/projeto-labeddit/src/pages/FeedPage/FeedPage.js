import React, { useEffect, useState } from "react";
import * as S from './styled-Feed'
import Header from "../../componets/header/Header";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from '../../assets/url'
import { goToPostPage } from "../../routes/cordinator";
import CardPosts from "../../componets/cardPosts/CardPosts";
< CardPosts /> 

const FeedPage = () => {
    const [loading, setLoading] = useState()
    // const [loading2, setLoading2] = useState()
    const [listPost, setListPost] = useState([])
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const { form, onChange, cleanFields } = useForm({
        title: "",
        body: ""
    })

    // useEffect(() => {
    //     getPosts()
    // }, [])

    // useEffect(() => {

    // }, [listPost])

    const onSubmit = (event) => {
        console.log("Entrou em onSubmit")
        event.preventDefault()
        // console.log("Entrou em onSubmit", form)
        cleanFields()
        createPost()
        // getPosts()
    }

    const createPost = () => {
        console.log("entrou em createPost")
        setLoading(true)
        axios
            .post(`${BASE_URL}/posts`, form,
                {
                    headers: {
                        Authorization: token
                    }
                })
            .then(res => {
                console.log(res.data)
                setLoading(false)
                alert(res.data)
            })
            .catch(err => {
                console.log()
                setLoading(true)
                alert('erro de createPost', err.response.data)
            })
    }

    // const getPosts = () => {
    //     console.log("entrou em getPosts")
    //     setLoading2(true)
    //     axios
    //         .get(`${BASE_URL}/posts`,
    //             {
    //                 headers: {
    //                     Authorization: token
    //                 }
    //             })
    //         .then(res => {
    //             setLoading2(false)
    //             console.log(res.data)
    //             setListPost(res.data)
    //         })
    //         .catch(err => {
    //             setLoading2(false)
    //             alert('erro de getPosts', err.response.data)
    //         })
    // }

    // const updatedListPosts = listPost.map((post) => {
    //     return (
    //         <S.CardPosts key={post.id} onClick={() => goToPostPage(navigate, post.id)} >
    //             <S.EnviadoPor>
    //                 <p>Enviado por: {post.username}</p>
    //                 <p>Postado em: {post.createdAt.split('T')[0]}</p>
    //             </S.EnviadoPor>

    //             <p>Título: {post.title}</p>
    //             <span>Corpo:{post.body}</span>

    //         </S.CardPosts>
    //     )
    // })

    return (
        <div>
            <Header />
            <S.DivFeed>
                {loading ? (<p>Aguarde, processando...</p>) :
                    (
                        <S.FormFeed onSubmit={onSubmit} >
                            <S.InputTitulo
                                placeholder="Título"
                                type='text'
                                required
                                value={form.title}
                                name={"title"}
                                onChange={onChange}
                                maxLength={100}
                            />
                            <S.InputPost
                                placeholder="Escreva seu post..."
                                type='text'
                                required
                                value={form.body}
                                name={"body"}
                                onChange={onChange}
                            />
                            <S.Botons>Postar</S.Botons>
                        </S.FormFeed>
                    )
                }

                {/* {loading2 ? (<p>Carregando posts, aguarde...</p>) :
                    // updatedListPosts
                    
                } */}
                
                < CardPosts /> 

            </S.DivFeed>
        </div>
    )
}

export default FeedPage

