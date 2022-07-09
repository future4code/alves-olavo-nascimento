import React from 'react'
import * as S from './styled'

export default function Match(props) {

    const listaDetalhada = props.curtidos.map((curtido) => {
        return (
            <S.DivMatch>
                <S.Img src={curtido.photo} />
                <p>{curtido.name}</p>
            </S.DivMatch>
        )
    })

    return (
        <S.DivPerfil>
            <button onClick={props.telaPerfil}>Ir para Perfil</button>
            <h3>Matchs</h3>
            {listaDetalhada}
        </S.DivPerfil >
    )

} 