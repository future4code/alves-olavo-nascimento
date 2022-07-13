import React, { useEffect } from "react"
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export const DivList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20vh;
`


export const ListTripsPage = () => {
    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate(-1)
    }

    const goToApplicationFormPage = () => {
        navigate("/applicationForm")
    }

    const PegaListViagens = () => {
        console.log("entrou no PegaListViagens")
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:olavo-marques-alves/trips")
            .then((res) => {
                console.log(res)
            }).catch((erro) => {
                console.log("entrou no erro")
                console.log(erro)

            })
    }

    useEffect(() => {
        PegaListViagens()
    }, [])


    return (
        <DivList>
            <div>
                <button onClick={goToHomePage} >Voltar</button>
                <button onClick={goToApplicationFormPage} >Inscrever-se</button>
            </div>
            <button>Lista de Viagens</button>
        </DivList>
    )
}