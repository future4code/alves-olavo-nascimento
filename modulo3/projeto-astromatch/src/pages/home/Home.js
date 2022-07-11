import React, { useEffect, useState } from "react";
import axios from "axios";
import Perfil from "../perfil/Perfil";
import Match from "../match/Match";
import * as S from './styled'
import { url_base } from "../../components/endereço-urls/url";
import Img_reset from './../../imagens/reset.png'

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
    PegaPerfis()
  }, [])

  const PegaPerfis = () => {
    axios.get(`${url_base}/person`)
      .then((res) => {
        setPerfil(res.data.profile)
      })
      .catch((erro) => {
        console.log(erro)
        erro.message === "Network Error" && resetMatch()

        // setTelaAtual("telaPerfil")
      })
  }

  const PegaCurtidos = () => {
    axios.get(`${url_base}/matches`)
      .then((res) => {
        setCurtidos(res.data.matches)
        setTelaAtual("telaMatch")
      })
      .catch((erro) => {
        console.log(erro)
        alert("Aconteceu um erro, tente novamente")
      })
  }

  const DeuMatch = () => {
    axios.post(`${url_base}/choose-person `,
      {
        "id": perfil.id,
        "choice": true
      }
    ).then((res) => {
      console.log(res.data.isMatch)
      res.data.isMatch === true && alert("Prepara o xaveco que deu match!")
    }).catch((erro) => {
      console.log(erro)
      alert("Aconteceu um erro, tente novamente")

    })
  }

  const resetMatch = () => {
    axios.put(`${url_base}/clear`)
      .then((res) => {
        alert("Os Perfis Foram resetados")
        onclickTelaPerfil()
      }).catch((erro) => {
        console.log(erro)
        alert("Aconteceu um erro, tente novamente")

      })
  }

  const clickListaCurtidos = () => {
    DeuMatch()
    PegaPerfis()
  };

  const clickListaDesCurtidos = () => {
    PegaPerfis()
  }

  return (
    <S.DivPerfil>
      {mudaTela()}
      <S.ImgReset src={Img_reset} onClick={resetMatch} />
    </S.DivPerfil>
  );
}




