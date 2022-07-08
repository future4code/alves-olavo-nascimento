import * as S from './styled'
import React from 'react'

export default function Perfil(props) {

    return (
        <S.DivPerfil>
            <header>
                <button onClick={props.PegaCurtidos} >Ir para Matchs</button>
            </header>
            <S.Main>
                <h4>Perfis</h4>
                <S.InforPerfil>Nome: {props.perfil.name}</S.InforPerfil>
                <S.InforPerfil>Idade:{props.perfil.age}</S.InforPerfil>
                <S.InforPerfil>id:{props.perfil.id}</S.InforPerfil>
                <S.InforPerfil>{props.perfil.bio}</S.InforPerfil>
                <S.Imagem src={props.perfil.photo} alt={props.perfil.photo_alt}></S.Imagem>
            </S.Main>
            <S.Botoes>
                <button onClick={props.clickListaDesCurtidos} ><strong>X</strong></button>
                <button onClick={props.clickListaCurtidos} >❤️</button>
                <button onClick={props.resetMatch}>reset</button>
            </S.Botoes>
        </S.DivPerfil>
    )
} 