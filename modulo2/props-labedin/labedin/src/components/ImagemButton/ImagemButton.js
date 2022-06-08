import React from 'react';
import {Div, Img} from './styled'

function ImagemButton(props) {
    return (
        <Div>
            <Img src={ props.imagem }/>
            <p>{ 
            props.texto }</p>
        </Div>

    )
}

export default ImagemButton;