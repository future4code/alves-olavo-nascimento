import React from 'react';
import {DivConteiner, Img, EstiloNome, EstiloDivMenor} from './styled'

function CardGrande(props) {
    return (
        <DivConteiner>
            <Img src={ props.imagem } />
            <EstiloDivMenor>
                <EstiloNome>{ props.nome }</EstiloNome>
                <p>{ props.descricao }</p>
            </EstiloDivMenor>
        </DivConteiner>
    )
}

export default CardGrande;