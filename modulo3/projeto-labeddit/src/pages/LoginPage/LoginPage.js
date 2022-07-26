import React from "react";
import * as S from './styled-Login'
import Header from "../../componets/header/Header";
import useForm from "../../hooks/useForm";



const LoginPage = () => {
    const { form, onChange, cleanFields } = useForm({
        email: "",
        password: ""
    })

    const onSubmit = (event) => {
        event.preventDefault()
        console.log("Entrou em onSubmit", form)
        cleanFields()
    }

    return (
        <div>
            <Header />
            <S.DivLogin>
                <S.FormLogin onSubmit={onSubmit} >
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
                    <S.Botons>Enviar</S.Botons>
                </S.FormLogin>
                <S.Botons
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                 >Criar sua conta</S.Botons>
            </S.DivLogin>
        </div>
    )
}

export default LoginPage