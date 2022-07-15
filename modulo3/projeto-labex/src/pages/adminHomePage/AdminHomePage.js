import React from "react"
import { isCompositeComponent } from "react-dom/test-utils"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { usePegaViagens, } from "../../hooks/usePegaViagens"
import { goToHomePage, goToTripDetailsPage, goToCreateTripPage, fazLogout } from "../../routes/cordinator"
// import { goToTripDetailsPage } from "../../routes/cordinator"
// import { goToCreateTripPage } from "../../routes/cordinator"
// import { fazLogout } from "../../routes/cordinator"

export const DivAdimHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const InfoViagens = styled.section`
display: flex;
justify-content: space-between;
width: 400px;
border: solid 2px black;
margin-top: 10px;
padding: 20px;
`
export const AdminHomePage = () => {
    const navigate = useNavigate()
    const { listaViagens } = usePegaViagens()

    const listaAtualizada = listaViagens.map((viagem) => {
        return (
            <InfoViagens key={viagem.id} onClick={() => goToTripDetailsPage(navigate, viagem.id)} >
                {viagem.name}
                <button>Excluir Viagem</button>
            </InfoViagens>
        )
    })

    return (
        <DivAdimHome>

            <h1>Painel Administrativo</h1>

            <header>
                <button onClick={() => goToHomePage(navigate)} >Voltar</button>
                <button onClick={() => goToCreateTripPage(navigate)} >Criar Viagem</button>
                <button onClick={() => fazLogout(navigate)} >Logout</button>
                {listaAtualizada}
            </header>

        </DivAdimHome>
    )
}