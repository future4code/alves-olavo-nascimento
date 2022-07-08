import React, { useEffect, useState } from "react";
import axios from "axios";
import Perfil from "../perfil/Perfil";
import Match from "../match/Match";
import * as S from './styled'

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
            resetMatch={resetMatch}
          />
        )
      case "telaMatch":
        return (
          <Match
            telaPerfil={onclickTelaPerfil}
            curtidos={curtidos}
            clickListaDesCurtidos={clickListaDesCurtidos}
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
    console.log("entrou PegaPerfis")

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/olavo-marques-alves/person"
    axios.get(url)
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
    console.log("entrou PegaMatch")
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/olavo-marques-alves/matches"
    axios.get(url)
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
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/olavo-marques-alves/choose-person"
    axios.post(url,
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
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/olavo-marques-alves/clear"
    axios.put(url)
      .then((res) => {
        alert("Os Perfis Foram resetados")
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
    </S.DivPerfil>
  );
}




