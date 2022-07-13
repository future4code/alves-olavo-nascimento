import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export const DivCreateTrip = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 30vh;
`
export const CreateTripPage = () => {
    const navigate = useNavigate()

    const gotToAdminHomePage = () => {
        navigate("/adminHome")
    }


    return (
        <DivCreateTrip>
            <h1>Criar Viagem</h1>
            <input placeholder="Nome" type="text" />
            <select>
                <option>Escolha um planeta</option>
            </select>
            <input type="date" />
            <input placeholder="Descrição" type="text" />
            <input placeholder="Duração em dias" type="Number" />
            <section>
                <button onClick={gotToAdminHomePage} >Voltar</button>
                <button>Criar</button>
            </section>
        </DivCreateTrip>
    )
}