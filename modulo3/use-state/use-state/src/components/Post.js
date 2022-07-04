import React, { useState } from 'react';
import * as C from './styled'

function Post(props) {
    const [inputValue, setInputValue] = useState("");
    const [comentarios, setComentarios] = useState([]);
    const [numeroComentarios, setNumeroComentarios] = useState(0);
    const [comentando, setComentando] = useState(false);
    const [numeroCurtidas, setNumeroCurtidas] = useState(0);
    const [curtido, setCurtido] = useState(false);

    const onClickCurtida = () => {
        if (curtido) {
            setCurtido(!curtido)
            setNumeroCurtidas(numeroCurtidas - 1)
        } else {
            setCurtido(!curtido)
            setNumeroCurtidas(numeroCurtidas + 1)
        };
    };

    const onClickComentario = () => {
        setComentando(!comentando)
    };

    const onChangeComentario = (event) => {
        setInputValue(event.target.value)
    };

    const enviarComentario = (comentario) => {
        const listaDeComentarios = [...comentarios, comentario]
        setComentarios(listaDeComentarios)
        setComentando(false)
        setNumeroComentarios(numeroComentarios + 1)
        setInputValue("")
    };

    const caixaDeComentario = comentando ? (
        <>
            <label htmlFor={"comentario"} >Comente: </label>
            <input
                id={"comentario"}
                value={inputValue}
                onChange={onChangeComentario}
            />
            <button onClick={() => { enviarComentario(inputValue) }}>Enviar</button>
        </>
    ) : (
        comentarios.map((comentario, index) => {
            return (
                <div key={index}>
                    <p>{comentario}</p>
                </div>
            )
        })
    );

    return (
        <C.Main>
            <header>
                <C.FotoUser>
                    <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
                    <C.NomeUser>{props.nomeUsuario}</C.NomeUser>
                </C.FotoUser>
            </header>
            <hr />
            <main>
                <C.ConteinerPost>
                    <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
                    <C.FotoPost src={props.fotoPost} alt={'Imagem do post'} />
                </C.ConteinerPost>
            </main>
            <hr />
            <C.Footer>
                <C.CurtidasCome>
                    <span>Número de curtidas: {numeroCurtidas}</span>
                    <button onClick={onClickCurtida} >
                        {numeroCurtidas === 1 ? "Like" : "Dislike"}
                    </button >
                </C.CurtidasCome>
                <C.CurtidasCome>
                    <span>Número de comentários: {numeroComentarios}</span>
                    <button onClick={onClickComentario} >
                        {comentando === false ? "Fechar comentário" : "Adicionar comentário"}
                    </button>
                    <span>
                        <h4>Comentários</h4>
                        {caixaDeComentario}
                    </span>

                </C.CurtidasCome>
            </C.Footer>
        </C.Main>
    );
};

export default Post;