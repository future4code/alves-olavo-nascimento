import React from "react";
import axios from "axios";
import styled from "styled-components";

const ListaPlay = styled.div`
display: flex ;
justify-content: space-between;
width: 200px;
margin: 5px;
`

const Div = styled.div`
display: flex ;
align-items: center;
margin: 5px;
flex-direction: column;
`

export default class TodasPlaylists extends React.Component {
    
    state = {
        playlists: []
    }

    playLists = () => {
        console.log("entrou em pesquisa play")
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: { Authorization: "olavo-marques-alves" }
        })
            .then((resposta) => {
                console.log(resposta)
                this.setState({ playlists: resposta.data.result.list })
            })
            .catch((erro) => {
                console.log(erro)
            })

    }

    componentDidMount() {
        this.playLists()
    }

    apagarPlayList = (id) => {
        console.log("entrou em pesquisa play")
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: { Authorization: "olavo-marques-alves" }
        })
            .then((resposta) => {
                console.log(resposta)
                alert("Usuário deletado com sucesso")
                this.playLists()
            })
            .catch((erro) => {
                console.log(erro.response.data)
                alert("Ocorreu um erro, tente")
            })
    }

    render() {
        const playListsAtualizada = this.state.playlists.map((lista) => {
            return (
                <ListaPlay key={lista.id}>
                    {lista.name}
                    <button onClick={() => this.apagarPlayList(lista.id)}>Remover</button>
                </ListaPlay>
            )
        })
        return (
            <Div>
                <h3>Playlists</h3>
                {playListsAtualizada}
            </Div>
        )
    }
}