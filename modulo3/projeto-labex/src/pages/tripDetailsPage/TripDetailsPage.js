import React from "react"
import { useNavigate } from "react-router-dom"


export const TripDetailsPage = () => {
    const navigate = useNavigate()

    const goToAdminHomePage = () => {
        navigate(-1)
    }

    return (
        <div>
            TripDetailsPage
            <button onClick={goToAdminHomePage} >Voltar</button>
        </div>
    )
}