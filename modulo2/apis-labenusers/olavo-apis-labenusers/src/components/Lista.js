import React from "react";
import axios from 'axios';
import styled from "styled-components";

const ListaNomes = styled.div`
    border: 1px solid black;
    margin:5px;
    width:200px;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    @media screen and (min-width: 350px) and (max-width: 500px) {
        display: flex;
        margin-right: 10px;
    }
`
const Corpo = styled.div`
    margin-top: 10vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    `
const ListaAtu = styled.div`
    @media screen and (min-width: 350px) and (max-width: 500px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    
    `
export default class Lista extends React.Component {

    state = {
        listaUsuarios: []
    }

    componentDidMount() {
        this.listaUsuarios()
    }


    listaUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"
        axios.get(url,
            {
                headers: { Authorization: "olavo-marques-alves" }
            }
        ).then((resposta) => {
            this.setState({ listaUsuarios: resposta.data })

        }).catch((erro) => {
            console.log(erro)
        })
    }

    apagarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url,
            {
                headers: {
                    Authorization: "olavo-marques-alves"
                }
            }).then((resposta) => {
                console.log(resposta)
                alert("Usuário deletado com sucesso")
                this.listaUsuarios()	
            }).catch((erro) => {
                console(erro.response.data)
                alert("Ocorreu um erro, tente novamente.")
            })
    }

    render() {
        const listaUsuAtualizada = this.state.listaUsuarios.map((user) => {
            return<ListaNomes key={user.id}>
                {user.name}
                <button onClick={()=>this.apagarUsuario(user.id)} >Apargar</button>
            </ListaNomes>
        })
        return (
            <Corpo>
                <button onClick={this.props.irParaCadastro}>Cadastro</button>
                <h3>Usuários Cadastrados:</h3>
               <ListaAtu>
                {listaUsuAtualizada}
               </ListaAtu> 
            </Corpo>
        )
    }
}
