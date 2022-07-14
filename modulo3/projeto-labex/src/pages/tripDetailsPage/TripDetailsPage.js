import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export const TripDetailsPage = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(() => {
        pegaDetalhesViagens()
    }, [])

    const pegaDetalhesViagens = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/olavo-marques-alves/trip/MrdTsY4DkW4jBPkVF7x2"
        axios.get(url, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log("Deu err", err.response)
            })
    }

    const goToAdminHomePage = () => {
        navigate(-1)
    }

    // tripDetails

    return (
        <div>
            TripDetailsPage
            <button onClick={goToAdminHomePage} >Voltar</button>
        </div>
    )
}