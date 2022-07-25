import React from "react"
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage, goToLoginPage } from "../../routes/cordinator"
import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"
import * as S from './styled-homePage'

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <S.DivHome>

            <Header />

            <S.DivButtons>
                <S.Butons onClick={() => goToListTripsPage(navigate)} >Ver Viagens</S.Butons>
                <S.Butons onClick={() => goToLoginPage(navigate)} >Área de Admin</S.Butons>
            </S.DivButtons>

            <Footer />

        </S.DivHome>
    )
}