import React, { useEffect } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { SelectPais } from "./selectPais/Select"

export const DivAppli = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin-top: 30vh;
`

export const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const goToListTripsPage = () => {
        navigate(-1)
    }

    return (
        <DivAppli>

            <h1>Inscreva-se para uma viagem</h1>
            <select>
                <option>Escolha Uma Viagem</option>
            </select>

            <input placeholder="Nome" type="text" />
            <input placeholder="Idade" type="Number" />
            <input placeholder="Texto de Candidadtura" type="text" />
            <input placeholder="profissão" type="text" />

            <SelectPais />

            <section>
                <button onClick={goToListTripsPage} >Voltar</button>
                <button>Enviar</button>
            </section>

        </DivAppli>
    )
}