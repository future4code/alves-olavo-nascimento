import './App.css';
import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    listaPessoa: [],
    nome: "",
    emailUsuario: "",
    error:""
  }

  adicionaPessoa = () => {
    console.log("Clicou")
    const body = {
      name: this.state.nome,
      emailUsuario: this.state.emailUsuario
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, 
    {
      headers: {
        Authorization: "olavo-marques-alves"
      }
    
    }
    ).then((resposta) => {
        console.log(resposta)
        console.log("entrou no then")
        resposta.status === 201 ? alert("Seu Usúario foi Adicionado") : alert("Usário não Cadastrado.")
      })
      // .catch((erro) => {
      //   console.log("entrou no catch")
      //   alert(erro.response.data.message)
      // })



  }

  // listaDeNomes = () => {
  //   axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
  //   {
  //     headers: {
  //       Authorization:"olavo-marques-alves"
  //       }
  //   }).then((respostaLista) => {
  //     console.log(respostaLista)
  //     this.setState({listaPessoa: respostaLista.data})
  //   }).catch((erroLista)=>{
  //     this.setState({error: erroLista.response.data})
  //   })
  // }

  onChangeNome = (event) => {
    console.log("entrou nome")
    this.setState({ nome: event.target.value });
  };

  onChangeEmail = (event) => {
    console.log("entrou emailUsuario")
    this.setState({ emailUsuario: event.target.value });
  };

  // componentDidMount() {
  //   this.listaDeNomes()
  // }

  render() {
    return (
      <div>
        {/* <button>Troca de tela</button> */}
        <hr />
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
        <button onClick={this.adicionaPessoa} > Criar Usuário 🤠</button>
        {/* <button> Criar Usuário </button> */}
        <hr />
        {/* <Tela2 /> */}
      </div>
    );
  }
}








