import React from "react";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;

`



export default class AddMusica extends React.Component {
    state = {
        musica: "",
        cantor: "",
        linkUrl: "",
        idPlay: []
    }

    
    onChangeMusica = (event) => {
        console.log("entrou musica")
        this.setState({ musica: event.target.value })
    }

    onChangeCantor = (event) => {
        console.log("entrou cantor")
        this.setState({ cantor: event.target.value })
    }

    onChangeLinkUrl = (event) => {
        console.log("entrou musica")
        this.setState({ linkUrl: event.target.value })
    }

    componentDidMount() {
        this.playLists()
    }

    playLists = () => {
        console.log("entrou em pesquisa play")
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: { Authorization: "olavo-marques-alves" }
        })
            .then((resposta) => {
                // console.log(resposta.data.result.list)
                this.setState({ idPlay: resposta.data.result.list })
            })
            .catch((erro) => {
                console.log(erro)
            })

    }


    onClickAdicionaMusica = (id) => {
        console.log("entrou em onclic")
        const urll = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.nome,
            artist: this.state.musica,
            url: this.state.linkUrl
        }
        const idAtuali = {
            id: this.state.idPlay
        }
        axios.post(urll, body, idAtuali, {
            headers: { Authorization: "olavo-marques-alves" }
        })
            .then((resposta) => {
                // console.log(resposta)
                // resposta.status === 200 && alert("Playlist adicicona!")
            })
            .catch((erro) => {
                // console.log(erro)
                // erro && alert("Ocorreu um erro, tente")


            })

        this.setState({ musica: "", cantor: "", linkUrl: "" })

    }

    render() {
        const playListsAtualizada = this.state.idPlay.map((lista) => {
            return (
                <div key={lista.id}>
                    {lista.name}
                </div>
            )
        })

        return (
            <Div>
                <input
                    onChange={this.onChangeMusica}
                    value={this.state.musica}
                    placeholder="Nome da música"
                />
                <input
                    onChange={this.onChangeCantor}
                    value={this.state.cantor}
                    placeholder="Nome cantor"
                />
                <input
                    type="link"
                    onChange={this.onChangeLinkUrl}
                    value={this.state.linkUrl}
                    placeholder="Endereço url"
                />
                <button onClick={this.onClickAdicionaMusica}>Adicionar Música</button>
                {playListsAtualizada}
            </Div>
        )
    }
}