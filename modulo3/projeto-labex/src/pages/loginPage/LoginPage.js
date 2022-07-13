import React from "react"
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

export const DivLogin = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 30vh;
`


export const LoginPage = () => {
    const navigate = useNavigate()

    const gotoHomePage = () => {
        navigate(-1)
    }

    return (
        <DivLogin>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Email"
            />
            <input
                type="password"
                placeholder="Senha"
            />
            <section>
                <button onClick={gotoHomePage} >Voltar</button>
                <button>Entrar</button>
            </section>
        </DivLogin>
    )
}