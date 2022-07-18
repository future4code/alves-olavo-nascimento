import { useNavigate } from 'react-router-dom'
import { usePegaViagens } from "../../hooks/usePegaViagens"
import { goToApplicationFormPage, goToHomePage } from "../../routes/cordinator"
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import *as S from './styled-ListTrips'


export const ListTripsPage = () => {
    const navigate = useNavigate()
    const { listaViagens } = usePegaViagens()

    const listaAtualizada = listaViagens.map((viagem) => {
        return (
            <S.InfoViagens key={viagem.id}>
                <p>Nome: {viagem.name}</p>
                <p>Planeta: {viagem.planet}</p>
                <p>Quantidade em Dias: {viagem.durationInDays}</p>
                <p>Descrição: {viagem.description}</p>
                <p>Dia da Viagem: {viagem.date}</p>
            </S.InfoViagens>
        )
    })

    return (
        <S.DivListTrip>
                <Header />
            <S.DivList>

                <div>
                    <S.Botoes onClick={() => goToHomePage(navigate)} >Voltar</S.Botoes>
                    <S.Botoes onClick={() => goToApplicationFormPage(navigate)} >Inscreva-se</S.Botoes>
                </div>

                <h2>Lista de Viagens</h2>

                {listaAtualizada}

            </S.DivList>
            
                <Footer />

        </S.DivListTrip>
    )
}