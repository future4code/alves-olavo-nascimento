import React, {useState} from "react"
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export const DivLogin = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 30vh;
`
export const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const onChangeEmail = (e) => {
        console.log("entrou onChangeEmail")
        setEmail(e.target.value)
    }

    const onChangeSenha = (e) => {
        console.log("entrou onChangeSenha")
        setSenha(e.target.value)
    }

    const gotoHomePage = () => {
        navigate(-1)
    }

    const fazerLogin = () => {
        console.log("entrou em fazerLogin")
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/olavo-marques-alves/login"
        const body = {
                email: email,
                password: senha
        }
        axios.post(url, body)
        .then((res)=>{
            localStorage.setItem('token', res.data.token)
            navigate("/adminHome")
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }

    return (
        <DivLogin>
            <h1>Login</h1>
            <input
                onChange={onChangeEmail}
                value={email}
                type="email"
                placeholder="Email"
            />
            <input
                onChange={onChangeSenha}
                value={senha}
                type="password"
                placeholder="Senha"
            />
            <section>
                <button onClick={gotoHomePage} >Voltar</button>
                <button onClick={fazerLogin} >Entrar</button>
            </section>
        </DivLogin>
    )
}