import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { goToHomePage } from "../../routes/cordinator"
import * as S from './style-Login'
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { URL_BASE } from "../../constants/Url"

export const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangeSenha = (e) => {
        setSenha(e.target.value)
    }

    const fazerLogin = () => {
            const url = `${URL_BASE}/login`
        const body = {
            email: email,
            password: senha
        }
        axios.post(url, body)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                navigate("/adminHome")
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    return (
        <S.DivLogin>

            <Header />

            <S.DivMain>
                <h2>Login</h2>
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
                    <S.Botoes onClick={() => goToHomePage(navigate)} >Voltar</S.Botoes>
                    <S.Botoes onClick={fazerLogin} >Entrar</S.Botoes>
                </section>
            </S.DivMain>

            <Footer />

        </S.DivLogin>
    )
}