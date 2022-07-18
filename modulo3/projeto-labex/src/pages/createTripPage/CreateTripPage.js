import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"
import { goToAdminHomePage } from "../../routes/cordinator"
import * as S from './styled-CreatTrips'
import { URL_BASE } from "../../constants/Url"


export const CreateTripPage = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [data, setData] = useState("")
    const [nome, setNome] = useState("")
    const [planeta, setPlaneta] = useState("")
    const [descriçao, setDescriçao] = useState("")
    const [duracaoDias, setDuracaoDias] = useState("")

    const onChangeNome = (e) => {
        setNome(e.target.value)
    }
    const onChangePlaneta = (e) => {
        setPlaneta(e.target.value)
    }
    const onChangeDescriçao = (e) => {
        setDescriçao(e.target.value)
    }
    const onChangeDuracaoDias = (e) => {
        setDuracaoDias(e.target.value)
    }
    const onChangeData = (e) => {
        setData(e.target.value)
    }
    const criarViagem = () => {
        const url = `${URL_BASE}/trips`
        const body = {
            name: nome,
            planet: planeta,
            date: data,
            description: descriçao,
            durationInDays: duracaoDias
        }
        axios.post(url, body, {
            headers: {
                auth: token
            }
        }).then((res) => {
            alert("Viagem Criada com Sucesso.")
        }).catch((err) => {
            err && alert("Verifique os campos e tente novamente.")
        })

        setData(""),
            setNome(""),
            setPlaneta(""),
            setDescriçao(""),
            setDuracaoDias("")
    }

    return (
        <S.DivCreateTrip>

            <Header />

            <S.DivMain>
                <h2>Criar Viagem</h2>

                <input
                    placeholder="Nome"
                    onChange={onChangeNome}
                    value={nome}
                />

                <select onChange={onChangePlaneta} value={planeta} >
                    <option>Escolha um Planeta</option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Jupiter">Jupiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Netuno">Netuno</option>
                    <option value="Plutão">Plutão</option>
                </select>

                <input
                    onChange={onChangeData}
                    value={data}
                    type="date"
                />

                <input
                    placeholder="Descrição"
                    onChange={onChangeDescriçao}
                    value={descriçao}
                />

                <input
                    placeholder="Duração em dias"
                    onChange={onChangeDuracaoDias}
                    value={duracaoDias}
                    type="Number"
                />

                <section>
                    <S.Botoes onClick={() => goToAdminHomePage(navigate)} >Voltar</S.Botoes>
                    <S.Botoes onClick={criarViagem} >Criar</S.Botoes>
                </section>

            </S.DivMain>

            <Footer />

        </S.DivCreateTrip>
    )
}