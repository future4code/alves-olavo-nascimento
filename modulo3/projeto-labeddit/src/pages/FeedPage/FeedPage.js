import React, { useEffect, useState } from "react";
import * as S from './styled-Feed'
import Header from "../../componets/header/Header";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from '../../assets/url'
import { goToPostPage } from "../../routes/cordinator";
import CardPosts from "../../componets/cardPosts/CardPosts";
// import useProtectedPage from "../../hooks/useProtectedPage";


const FeedPage = () => {
    // useProtectedPage()
    const [loading, setLoading] = useState()
    // const [loading2, setLoading2] = useState()
    const [postVote, setPostVote] = useState()
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const { form, onChange, cleanFields } = useForm({
        title: "",
        body: ""
    })

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
                console.log("entrou em res createPost pagina feePage",res)
                setLoading(false)
                alert(res.data)
            })
            .catch(err => {
                console.log()
                setLoading(true)
                // alert('erro de createPost', err.response.data)
                alert("erro na requisição createPost")
            })
    }

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

