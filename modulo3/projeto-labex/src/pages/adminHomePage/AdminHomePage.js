import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { usePegaViagens, } from "../../hooks/usePegaViagens"
import { goToHomePage, goToTripDetailsPage, goToCreateTripPage, fazLogout } from "../../routes/cordinator"
import * as S from './styled-AdminHome'
import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"
import { URL_BASE } from "../../constants/Url"

export const AdminHomePage = () => {
    const navigate = useNavigate()
    const { listaViagens } = usePegaViagens()
    const token = localStorage.getItem('token')
    const [apagado, setApagado] = useState("false")

    const excluiViagem = (id) => {
        console.log(id)
        const url = `${URL_BASE}/trips/${id}`
        axios.delete(url, {
            headers: {
                auth: token
            }
        }).then((res) => {
            console.log(res.data.success)
            setApagado(res.data.success)
            document.location.reload(true)
            alert("Viagem Excluida Com Scesso")
        })
            .cath((err) => {
                alert("Ocorreu um erro, tente novamente.")
            })
    }
    useEffect(() => {

    }, [])


    const listaAtualizada = listaViagens.map((viagem) => {
        return (
            <S.InfoViagens key={viagem.id} >
                <S.Section>
                    {viagem.name}
                    <S.BotaoExclui onClick={() => excluiViagem(viagem.id)} >Excluir Viagem</S.BotaoExclui>
                </S.Section>
                <S.ButaoDetalhes onClick={() => goToTripDetailsPage(navigate, viagem.id)} >Ver Detalhes</S.ButaoDetalhes>
            </S.InfoViagens>
        )
    })

    return (
        <S.DivAdimHome>

            <Header />

            <S.DivMain>

                <h2>Painel Administrativo</h2>

                <header>
                    <S.Botoes onClick={() => goToHomePage(navigate)} >Voltar</S.Botoes>
                    <S.Botoes onClick={() => goToCreateTripPage(navigate)} >Criar Viagem</S.Botoes>
                    <S.Botoes onClick={() => fazLogout(navigate)} >Logout</S.Botoes>
                    {listaAtualizada}
                </header>

            </S.DivMain>

            <Footer />

        </S.DivAdimHome>
    )
}