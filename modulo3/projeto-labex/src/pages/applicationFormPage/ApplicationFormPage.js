import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { SelectPais } from "./selectPais/SelectPais"
import { usePegaViagens } from "../../hooks/usePegaViagens"
import { goToListTripsPage } from "../../routes/cordinator"
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import *as S from './styled-Application'
import axios from "axios"
import { URL_BASE } from "../../constants/Url"

export const ApplicationFormPage = () => {
    const navigate = useNavigate()
    const [viagem, setViagem] = useState("")
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [texto, setTexto] = useState("")
    const [profissao, setProfissao] = useState("")
    const [pais, setPais] = useState("")
    const { listaViagens } = usePegaViagens()

    const inscrevaseViagem = (id) => {
        const url = `${URL_BASE}/trips/${id}/apply`
        const body = {
            name: nome,
            age: idade,
            applicationText: texto,
            profession: profissao,
            country: pais
        }
        axios.post(url, body)
            .then((res) => {
                res.data.message === "Application registered successfully" && alert("Cadidatura registrado com sucesso!")
            }).catch((err) => {
                alert("Ocorreu um erro, tente novamente.")
            })

            setViagem(""),
            setNome(""),
            setIdade(""),
            setTexto(""),
            setProfissao(""),
            setPais("")

    }


    const onChangeViagem = (e) => {
        setViagem(e.target.value)
    }

    const onChangeNome = (e) => {
        setNome(e.target.value)
    }

    const onChangeIdade = (e) => {
        setIdade(e.target.value)
    }

    const onChangeTexto = (e) => {
        setTexto(e.target.value)
    }

    const onChangeProfissao = (e) => {
        setProfissao(e.target.value)
    }

    const onChangePais = (e) => {
        setPais(e.target.value)
    }

    const listaAtualizada = listaViagens.map((viagem) => {
        return (
            <option key={viagem.id} value={viagem.name}>{viagem.name}</option>
        )
    })

    return (
        <S.DivApplication>

            <Header />

            <S.Main>
                <h2>Inscreva-se para uma viagem</h2>
                <select onChange={onChangeViagem} value={viagem} >
                    <option>Escolha uma Viagem</option>
                    {listaAtualizada}
                </select>

                <input
                    placeholder="Nome"
                    type="text"
                    onChange={onChangeNome}
                    value={nome}
                />
                <input
                    placeholder="Idade"
                    type="Number"
                    onChange={onChangeIdade}
                    value={idade}
                />
                <input
                    placeholder="Texto de Candidadtura"
                    type="text"
                    onChange={onChangeTexto}
                    value={texto}
                />
                <input
                    placeholder="profissão"
                    type="text"
                    onChange={onChangeProfissao}
                    value={profissao}
                />

                <SelectPais onChangePais={onChangePais} pais={pais} />

                <section>
                    <S.Botoes onClick={() => goToListTripsPage(navigate)} >Voltar</S.Botoes>
                    <S.Botoes onClick={inscrevaseViagem} >Enviar</S.Botoes>
                </section>
            </S.Main>

            <Footer />

        </S.DivApplication>
    )
}
