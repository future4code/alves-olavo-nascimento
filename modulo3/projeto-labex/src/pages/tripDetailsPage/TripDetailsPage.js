import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { goToAdminHomePage } from "../../routes/cordinator"
import * as S from './styled-Details'
import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"
import { URL_BASE } from "../../constants/Url"

export const TripDetailsPage = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const params = useParams()
    const [detalhe, setDetalhe] = useState({})

    useEffect(() => {
        pegaDetalhesViagens()
    }, [])

    const pegaDetalhesViagens = () => {
        const url = `${URL_BASE}/trip/${params.id}`
        axios.get(url, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                setDetalhe(res.data.trip)
            })
            .catch((err) => {
                console.log(err)
                alert("Ocorreu um erro tente novamente.")
            })
    }

    console.log(detalhe)
    return (
        <S.DivDetalhes>
            
            <Header />

            <S.DivMain>
                <h2>Detalhes da viagem</h2>
                <section>
                    <S.DetalhesViagem>Nome: {detalhe.name}</S.DetalhesViagem>
                    <S.DetalhesViagem>Planeta: {detalhe.planet}</S.DetalhesViagem>
                    <S.DetalhesViagem>Descrição: {detalhe.description}</S.DetalhesViagem>
                    <S.DetalhesViagem>Data: {detalhe.date}</S.DetalhesViagem>
                    <S.DetalhesViagem>Dyuração em dias {detalhe.durationInDays}</S.DetalhesViagem>
                </section>
                <S.BotaoVoltar onClick={() => goToAdminHomePage(navigate)} >Voltar</S.BotaoVoltar>
            </S.DivMain>

            <Footer />

        </S.DivDetalhes>
    )
}