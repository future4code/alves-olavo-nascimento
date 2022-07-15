import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { usePegaViagens, } from "../../hooks/usePegaViagens"
import { goToHomePage, goToTripDetailsPage, goToCreateTripPage, fazLogout } from "../../routes/cordinator"

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
export const Botões = styled.section`
display: flex;
flex-direction: column;
`
export const AdminHomePage = () => {
    const navigate = useNavigate()
    const { listaViagens } = usePegaViagens()
    const token = localStorage.getItem('token')
    const [apagado, setApagado] = useState(false)

    const excluiViagem = (id) => {
        console.log(id)
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/olavo-marques-alves/trips/${id}`
        axios.delete(url, {
            headers: {
                auth: token
            }
        }).then((res) => {
            console.log(res.data.success)
            setApagado(res.data.success)
            alert("Viagem Excluida Com Scesso")
        })
            .cath((err) => {
                console.log(err)
            })
    }
    useEffect(() => {

    }, [apagado])


    const listaAtualizada = listaViagens.map((viagem) => {
        return (
            <InfoViagens key={viagem.id} >
                {viagem.name}
                <section>
                    <button onClick={() => goToTripDetailsPage(navigate, viagem.id)} >Detalhes Da Viagem</button>
                    <button onClick={() => excluiViagem(viagem.id)} >Excluir Viagem</button>
                </section>
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