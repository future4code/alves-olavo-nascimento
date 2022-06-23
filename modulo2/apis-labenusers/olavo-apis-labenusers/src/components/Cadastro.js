import React from "react";
import axios from 'axios';
import styled from "styled-components";

const Corpo = styled.div`
    margin-top: 10vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (min-device-width : 350px) and (max-device-width : 500px) {
        display: flex;
        margin-bottom: 3px;
        border: 1px solid black;

    
    }
    
`
const Frase = styled.h3`
    @media screen and (min-width: 350px) and (max-width: 500px) {
    border:1px solid black;
    width: 330px;
    font-size: 18px;
        
    }
`
    

export default class Cadastro extends React.Component {

    state = {
        nome: "",
        emailUsuario: ""
    }

    onChangeNome = (event) => {
        console.log("entrou nome")
        this.setState({ nome: event.target.value });
    };

    onChangeEmail = (event) => {
        console.log("entrou emailUsuario")
        this.setState({ emailUsuario: event.target.value });
    };

    adicionaPessoa = () => {
        console.log("Clicou adicinar pessoa")
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.emailUsuario
        }
        axios.post(url, body,
            {
                headers: {
                    Authorization: "olavo-marques-alves"
                }
            }
        ).then((resposta) => {
            console.log("entrou no then")
            console.log(resposta)
            resposta.status === 201 && alert("Seu Usúario foi Adicionado")

        })
            .catch((erro) => {
                console.log("entrou no erro")
                console.log(erro.response.data.message)
                erro.response.data.message === "User information are missing. Name and email are required." && alert("Faltam informações do usuário. Nome e e-mail são obrigatórios.")
                erro.response.data.message === "There is an user with this name or this email" && alert("Existe um usuário com este nome ou este e-mail.")
            })

        this.setState({ nome: "", emailUsuario: "" })

    }

    render() {
        return (
            <Corpo>
                <button onClick={this.props.irParaLista}>Cadastro</button>


                <Frase>Insira um nome e email para se cadastrar.</Frase>
                <input
                    onChange={this.onChangeNome}
                    value={this.state.nome}
                    placeholder='Nome'
                />
                <input
                    onChange={this.onChangeEmail}
                    value={this.state.emailUsuario}
                    placeholder='Email'
                />
                <hr />
                <button onClick={this.adicionaPessoa} > Novo Usuário 🤠</button>
            </Corpo>
        )
    }
}
