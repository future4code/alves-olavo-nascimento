import React from "react"
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

export const DivHome = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 30vh;
`
export const DivButtons = styled.div`
display: flex;
justify-content: center;
`
export const Butons = styled.button`
width: 300px;
height: 100px;
margin: 30px;
background-color: roxo;
`
export const HomePage = () => {
    const navigate = useNavigate()

    const goToListTripsPage = () => {
        navigate("/listTrips")
    }
    const goToLoginPage = () => {
        navigate("/login")
    }

    return (
        <DivHome>
            <h1>Labex</h1>
            <DivButtons>
                <Butons onClick={goToListTripsPage} >Ver Viagens</Butons>
                <Butons onClick={goToLoginPage} >Área de Admin</Butons>
            </DivButtons>

        </DivHome>
    )
}