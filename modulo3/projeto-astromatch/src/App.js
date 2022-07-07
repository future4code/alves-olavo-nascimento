import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components'

export const DivPerfil = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default function App() {

  const [perfil, setPerfil] = useState({})
  // const [telaAtual, setTelaAtual] = useState("")


  const PegaPerfis = () => {
    console.log("entrou PegaPerfis")

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/olavo-marques-alves/person"
    axios.get(url)
      .then((res) => {
        console.log(res.data.profile)
        setPerfil(res.data.profile)
      })
      .catch((erro) => {
        console.log("entrou no erro")
        console.log(erro.response)
      })
  }

  const PegaMatch = () => {
    console.log("entrou PegaMatch")

    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/olavo-marques-alves/matches`
    axios.get(url)
      .then((res) => {
        // console.log(res)
        // setPerfil(res)
      })
      .catch((erro) => {
        console.log("entrou no erro")
        console.log(erro.response)
      })
  }

  useEffect(() => {
    console.log("useEffect")
    PegaPerfis()
    PegaMatch()
  }, [])

  return (
    <DivPerfil>
      <h3>Astro Match</h3>
      <h4>Perfis</h4>
      <p>Nome: {perfil.name}</p>
      <p>Idade:{perfil.age}</p>
      <p>{perfil.bio}</p>
      <img src={perfil.photo} alt={perfil.photo_alt}></img>
    </DivPerfil>
  );
}




