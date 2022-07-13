import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export const DivAdimHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const AdminHomePage = () => {
    const navigate = useNavigate()

    const gotoHomePage = () => {
        navigate("/")
    }

    const gotoCreateTripPage = () => {
        navigate("/createTrip")
    }
    return (
        <DivAdimHome>
            <h1>Painel Administrativo</h1>
            <header>
                <button onClick={gotoHomePage} >Voltar</button>
                <button onClick={gotoCreateTripPage} >Criar Viagem</button>
                <button>Logout</button>
            </header>
        </DivAdimHome>
    )
}