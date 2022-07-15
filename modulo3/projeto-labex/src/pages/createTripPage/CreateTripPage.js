import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { goToAdminHomePage } from "../../routes/cordinator"

export const DivCreateTrip = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 30vh;
`
export const InfoViagens = styled.section`
width: 500px;
border: solid 1px black;
margin-top: 20px;
padding: 20px;
`
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
        console.log("entrou em criarViagem")
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/olavo-marques-alves/trips"
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
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <DivCreateTrip>
            <h1>Criar Viagem</h1>

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
                <button onClick={()=>goToAdminHomePage(navigate)} >Voltar</button>
                <button onClick={criarViagem} >Criar</button>
            </section>

        </DivCreateTrip>
    )
}