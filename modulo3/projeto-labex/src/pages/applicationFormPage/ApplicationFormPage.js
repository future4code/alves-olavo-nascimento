import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { SelectPais } from "./selectPais/SelectPais"
import axios from "axios"
import { usePegaViagens } from "../../hooks/usePegaViagens"
import { goToListTripsPage } from "../../routes/cordinator"

export const DivAppli = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin-top: 30vh;
`

export const ApplicationFormPage = () => {
    const navigate = useNavigate()
    const [viagem, setViagem] = useState("")
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [texto, setTexto] = useState("")
    const [profissao, setProfissao] = useState("")
    const [pais, setPais] = useState("")
    const { listaViagens } = usePegaViagens()

    const inscrevaseViagem = () => {

        console.log("entrou inscrevaseViagem")
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/olavo-marques-alves/trips/:id/apply"
        const body = {
            name: nome,
            age: idade,
            applicationText: texto,
            profession: profissao,
            country: pais
        }
        axios.post(url, body)
            .then((res) => {
                console.log(res)
                res.data.message === "Application registered successfully" && alert("Cadidatura registrado com sucesso!")
            }).catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {

    }, [])

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
            <option key={viagem.name} value={viagem.name} >{viagem.name}</option>
        )
    })

    return (
        <DivAppli>

            <h1>Inscreva-se para uma viagem</h1>
            <select>
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
                <button onClick={() => goToListTripsPage(navigate)} >Voltar</button>
                <button onClick={inscrevaseViagem} >Enviar</button>
            </section>

        </DivAppli>
    )
}
