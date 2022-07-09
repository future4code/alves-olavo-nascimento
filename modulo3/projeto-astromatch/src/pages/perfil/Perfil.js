import React from 'react'
import * as S from './styled'
import  naoGostei  from './../../imagens/nao-gostei.png'
import gostei  from './../../imagens/gostei.png'
export default function Perfil(props) {

    return (
        <S.DivPerfil>
            <header>
                <button onClick={props.PegaCurtidos} >Ir para Matchs</button>
            </header>
            <S.Main>
                <h3>Perfis</h3>
                <S.Imagem src={props.perfil.photo} alt={props.perfil.photo_alt}></S.Imagem>
                <S.InforPerfil>{props.perfil.name}, {props.perfil.age}</S.InforPerfil>
                <S.InforPerfil>{props.perfil.bio}</S.InforPerfil>
            </S.Main>
            <S.Botoes>
                {/* <button onClick={props.clickListaDesCurtidos} ><strong>X</strong></button> */}
                {/* <button onClick={props.clickListaCurtidos} >❤️</button> */}
                <S.ImgGosteiNaoGostei src={naoGostei} onClick={props.clickListaCurtidos}/>
                <S.ImgGosteiNaoGostei src={gostei} onClick={props.clickListaCurtidos}/>
            </S.Botoes>
        </S.DivPerfil>
    )
} 