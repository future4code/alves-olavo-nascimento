import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export const DivList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20vh;
`
export const InfoViagens = styled.section`
width: 500px;
border: solid 1px black;
margin-top: 20px;
padding: 20px;
`


export const ListTripsPage = () => {
    const navigate = useNavigate()
    const [listaViagens, setListaViagens] = useState([])

    const goToHomePage = () => {
        navigate(-1)
    }

    const goToApplicationFormPage = () => {
        navigate("/applicationForm")
    }

    const PegaListViagens = () => {
        console.log("entrou no PegaListViagens")
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/olavo-marques-alves/trips")
            .then((res) => {
                setListaViagens(res.data.trips)
            }).catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        PegaListViagens()
    }, [])

    const listaViagensAtualizada = listaViagens.map((viagem) => {
        return (
            <InfoViagens key={viagem.id}>
                <p>Nome: {viagem.name}</p>
                <p>Planeta: {viagem.planet}</p>
                <p>Quantidade em Dias: {viagem.durationInDays}</p>
                <p>Descrição: {viagem.description}</p>
                <p>Dia da Viagem: {viagem.date}</p>
                <p>Id: {viagem.id}</p>
            </InfoViagens>
        )
    })

    return (
        <DivList>
            <div>
                <button onClick={goToHomePage} >Voltar</button>
                <button onClick={goToApplicationFormPage} >Inscrever-se</button>
            </div>
            <h1>Lista de Viagens</h1>
            {listaViagensAtualizada}
        </DivList>
    )
}