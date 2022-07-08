import * as S from './styled'
import React from 'react'

export default function Match(props) {

    const listaDetalhada = props.curtidos.map((curtido) => {
        return (
            <p>{curtido.name}</p>
        )
    })
    return (
        <S.DivPerfil>
            <button onClick={props.telaPerfil}>Ir para Perfil</button>
            Matchs
            <li>{listaDetalhada}</li>
        </S.DivPerfil >
    )

} 