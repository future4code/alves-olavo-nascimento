import React from 'react'
import * as S from './styled'
import naoGostei from './../../imagens/nao-gostei.png'
import gostei from './../../imagens/gostei.png'
import Para_Matchs from './../../imagens/tinder.png'
import Header from '../../components/header/Header'

export default function Perfil(props) {

    return (
        <S.Div>
            <S.Header>
                    <S.DivCompHea><Header /></S.DivCompHea>
                <S.BotaoMatchs src={Para_Matchs} onClick={props.PegaCurtidos} />
            </S.Header>
            <S.Main>
                <S.Imagem src={props.perfil.photo} alt={props.perfil.photo_alt}></S.Imagem>
                <S.InforNome>{props.perfil.name}, {props.perfil.age}</S.InforNome>
                <S.InforPerfil>{props.perfil.bio}</S.InforPerfil>
            </S.Main>
            <S.Botoes>
                <S.ImgGosteiNaoGostei src={naoGostei} onClick={props.clickListaCurtidos} />
                <S.ImgGosteiNaoGostei src={gostei} onClick={props.clickListaCurtidos} />
            </S.Botoes>
        </S.Div>
    )
} 