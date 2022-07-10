import React from 'react'
import * as S from './styled'
import Foto_perfil from './../../imagens/perfil.png'
import Header from '../../components/header/Header'

export default function Match(props) {

    const listaDetalhada = props.curtidos.map((curtido) => {
        return (
            <S.DivMatch key={curtido.id}>
                <S.Img src={curtido.photo} />
                <p>{curtido.name}</p>
            </S.DivMatch>
        )
    })

    return (
        <S.Div>
            <S.Header>
                <S.DivCompHea><Header /></S.DivCompHea>
                <S.IrParaPerfil src={Foto_perfil} onClick={props.telaPerfil} />
            </S.Header>
            {listaDetalhada}
        </S.Div >
    )

} 