import React from "react";
import { ImputMensagem, ImputRemetente, DivPai } from "./styled"

class Mensagem extends React.Component {

    state = {
        mensagem: [
            {
                remetentes: "",
                conteudo: ""
            }
        ],

        valorImputRemetente: "",
        valorImputConteudo: ""
    }

    adicionaPessoa = () => {
        const novaPessoa = {
            remetente: this.state.valorImputRemetente,
            conteudo: this.state.valorImputConteudo
        }

        const novoPessoa = [...this.state.mensagem, novaPessoa]

        this.setState({
            mensagem: novoPessoa,
            valorImputRemetente: "",
            valorImputConteudo: ""
        })
    }

    onChangeImputRemetente = (event) => {
        this.setState({ valorImputRemetente: event.target.value })
    }

    onChangeImputConteudo = (event) => {
        this.setState({ valorImputConteudo: event.target.value })
    }

    render() {
        const listaDeComponentes = this.state.mensagem.map((remetente) => {
            return (
                <p>
                    {remetente.remetentes} - {remetente.conteudo}
                </p>
            )
        })

        return (
            <DivPai>

                <div>
                    <ImputRemetente
                        value={this.state.valorImputRemetente}
                        onChange={this.onChangeImputRemetente}
                        placeholder={"Remetente"}
                    />
                </div>
                <div>
                    <ImputMensagem
                        value={this.state.valorImputConteudo}
                        onChange={this.onChangeImputConteudo}
                        placeholder={"Mensagem"}
                    />
                </div>

                <button onClick={this.adicionaPessoa}>Enviar</button>

            </DivPai>


        )
    }
}

export default Mensagem