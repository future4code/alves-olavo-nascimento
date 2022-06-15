import React from "react";
 


class Remetente extends React.Component {

    state = {
        mensagem: [
            {
                remetentes: "",
            }
        ],

        valorImputRemetente: "",
    }

    adicionaPessoa = () => {
        const novaPessoa = {
            remetente: this.state.valorImputRemetente,
        }

        const novoPessoa = [...this.state.mensagem, novaPessoa]

        this.setState({
            mensagem: novoPessoa,
            valorImputRemetente: "",
        })
    }

    onChangeImputRemetente = (event) => {
        this.setState({ valorImputRemetente: event.target.value })
    }


    render() {
        const listaDeComponentes = this.state.mensagem.map((remetente) => {
            return (
                <p>
                    {remetente.remetentes}
                </p>
            )
        })

        return (
            <div>
                <div>
                    <input
                        value={this.state.valorImputRemetente}
                        onChange={this.onChangeImputRemetente}
                        placeholder={"Remetente"}
                    />
                    <button onClick={this.adicionaPessoa}>Enviar</button>
                </div>
            </div>


        )
    }
}

export default Remetente