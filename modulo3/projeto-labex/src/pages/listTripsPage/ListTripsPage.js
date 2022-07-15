import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
import { usePegaViagens } from "../../hooks/usePegaViagens"
import { goToApplicationFormPage, goToHomePage } from "../../routes/cordinator"

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
    const { listaViagens } = usePegaViagens()

    const listaAtualizada = listaViagens.map((viagem) => {
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
                <button onClick={() => goToHomePage(navigate)} >Voltar</button>
                <button onClick={() => goToApplicationFormPage(navigate)} >Inscrever-se</button>
            </div>
            <h1>Lista de Viagens</h1>
            {listaAtualizada}
        </DivList>
    )
}