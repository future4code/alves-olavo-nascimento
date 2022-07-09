import React, { useEffect, useState } from "react";
import axios from "axios";
import Perfil from "../perfil/Perfil";
import Match from "../match/Match";
import * as S from './styled'
import { url_base } from "../../components/url";

export default function Home() {

  const [telaAtual, setTelaAtual] = useState("telaPerfil")
  const [perfil, setPerfil] = useState({})
  const [curtidos, setCurtidos] = useState([])


  const onclickTelaPerfil = () => {
    setTelaAtual("telaPerfil")
  }

  const onclickTelaMatch = () => {
    setTelaAtual("telaMatch")
  }

  const mudaTela = () => {
    switch (telaAtual) {
      case "telaPerfil":
        return (
          <Perfil
            telaMatch={onclickTelaMatch}
            perfil={perfil}
            clickListaCurtidos={clickListaCurtidos}
            clickListaDesCurtidos={clickListaDesCurtidos}
            PegaCurtidos={PegaCurtidos}
          />
        )
      case "telaMatch":
        return (
          <Match
            telaPerfil={onclickTelaPerfil}
            curtidos={curtidos}
            clickListaDesCurtidos={clickListaDesCurtidos}
            resetMatch={resetMatch}
          />
        )
      default:
        return <p>Página não encontrada.  :(</p>;
    }
  }

  useEffect(() => {
    console.log("useEffect")
    PegaPerfis()
    // PegaCurtidos()
  }, [])

  const PegaPerfis = () => {
    axios.get(`${url_base}/person`)
      .then((res) => {
        // console.log(res.data.profile)
        setPerfil(res.data.profile)
      })
      .catch((erro) => {
        // console.log("entrou no erro")
        console.log(erro)
      })
  }

  const PegaCurtidos = () => {
    axios.get(`${url_base}/matches`)
      .then((res) => {
        console.log(res.data.matches)
        setCurtidos(res.data.matches)
        setTelaAtual("telaMatch")
      })
      .catch((erro) => {
        console.log("entrou no erro")
        console.log(erro)
      })
  }

  const DeuMatch = () => {
    axios.post(`${url_base}/choose-person `,
      {
        "id": perfil.id,
        "choice": true
      }
    ).then((res) => {
      console.log(res.data)
    }).catch((erro) => {
      console.log(erro)

    })
  }

  const resetMatch = () => {
    axios.put(`${url_base}/clear`)
      .then((res) => {
        alert("Os Perfis Foram resetados")
        onclickTelaPerfil()
      }).catch((erro) => {
        console.log(erro)
      })
  }

  const clickListaCurtidos = () => {
    console.log("entro no clickListaCurtidos")
    DeuMatch()
    PegaPerfis()
  };

  const clickListaDesCurtidos = () => {
    console.log("Entrou clickListaDesCurtidos")
    PegaPerfis()
  }

  return (
    <S.DivPerfil>
      <h2>Astro Match</h2>
      {mudaTela()}
      <button onClick={resetMatch}>reset</button>
    </S.DivPerfil>
  );
}




