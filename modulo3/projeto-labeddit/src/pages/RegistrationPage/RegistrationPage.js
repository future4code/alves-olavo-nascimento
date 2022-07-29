import React from "react";
import * as S from './styled-Registration'
import Header from "../../componets/header/Header";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from '../../assets/url'
import { goToLoginPage } from "../../routes/cordinator";

const RegistrationPage = () => {
    const navigate = useNavigate()
    const { form, onChange, cleanFields } = useForm({
        username: "",
        email: "",
        password: ""
    })

    const onSubmit = (event) => {
        event.preventDefault()
        console.log("Entrou em onSubmit", form)
        postSignup()
        cleanFields()
    }

    const postSignup = () => {
        console.log("entrou em postSignup")
        axios.post(`${BASE_URL}/users/signup`, form)
            .then(res => {
                console.log(res)
                alert("Usuaário cadastrado com sucesso!")
                goToLoginPage(navigate)
            })
            .catch(err => {
                console.log(err.response.data)
                alert("Ocorreu um erro tente novamente")

            })
    }

    return (
        <div>
            <Header />
            <S.DivLogin>
                <h2>Olá, boas vindas ao LabEddit ;)</h2>
                <h2>Registrar-se</h2>
                <S.FormRegistration onSubmit={onSubmit} >
                    <input
                        placeholder="Nome de usuário"
                        type='text'
                        required
                        value={form.username}
                        name={"username"}
                        onChange={onChange}
                        pattern={"^.{6,}"}
                        title={"Mínimo seis caracteres"}
                    />
                    <input
                        placeholder="E-mail"
                        type='email'
                        required
                        value={form.email}
                        name={"email"}
                        onChange={onChange}
                    />
                    <input
                        placeholder="Senha"
                        type='password'
                        required
                        value={form.password}
                        name={"password"}
                        onChange={onChange}
                        pattern={"^.{8,}"}
                        title={"Mínimo oito caracteres"}
                    />
                    <S.TextContract> Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade.</S.TextContract>
                    <S.ConteinerAgree>
                        <S.InputAgree type="checkbox" required />
                        <S.TextContract>Eu concordo em receber emails sobre coisas legais no Labeddit</S.TextContract>
                    </S.ConteinerAgree>
                    <S.Botons >Criar conta</S.Botons>
                </S.FormRegistration>

            </S.DivLogin>
        </div>
    )
}

export default RegistrationPage

