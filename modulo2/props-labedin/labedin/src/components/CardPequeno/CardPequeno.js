import React from 'react'
import {Img, Conteiner, Div, Descricao} from './styled'

function CardPequeno(props) {
    return (
        <Conteiner>
            <Img src={props.imagem} />
            <Div>
                <h3>{props.texto}</h3>
                <Descricao>{props.descricao}</Descricao>
            </Div>
        </Conteiner>
         )
}

export default CardPequeno