import React from "react";

class Etapa1 extends React.Component {
    state = {
        nome: "",
        idade: "",
        email: ""
    }

    

    render() {

        return (
            <div>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <div>
                    <h4>1. Qual o seu nome?</h4>
                    <input></input>
                    <h4>2. Qual o sua idade?</h4>
                    <input></input>
                    <h4>3. Qual o seu email?</h4>
                    <input></input>
                    <h4>4. Qual o sua escolaridade?</h4>
                    <select>
                        <option>Ensino médio incompleto</option>
                        <option>Ensino médio completo</option>
                        <option>Ensino superior incompleto</option>
                        <option>Ensino superior completo</option>
                    </select>
                </div>
                {/* <button>Próxima etapa</button> */}
            </div>
        );
    }
}
export default Etapa1;








