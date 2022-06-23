import React from 'react';
import Cadastro from './components/Cadastro';
import Lista from './components/Lista';
import styled from 'styled-components';

const Corpo = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-left: 50px;
 @media screen and (min-width: 350px) and (max-width: 500px) {
        display: flex;
        margin-right: 40px;
    }
`

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "lista":
        return <Lista irParaCadastro={this.irParaCadastro} />
      case "cadastro":
        return <Cadastro irParaLista={this.irParaLista} />
      default:
        return <div>Erro! Pagina não encontrada 😭</div>

    }
  }

  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro" })
  }

  irParaLista = () => {
    this.setState({ telaAtual: "lista" })
  }



  render() {
    return (
      <Corpo>
        <h2>Projeto Labenusers-Olavo</h2>
        <div>
          {this.escolheTela()}
        </div>
      </Corpo>
    );
  }
}









