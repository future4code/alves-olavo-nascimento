import { useEffect, useState } from "react"
import axios from "axios"
import { URL_BASE } from "../constants/Url"

export const usePegaViagens = () => {
    const [listaViagens, setListaViagens] = useState([])
    
        useEffect(()=>{
            axios.get(`${URL_BASE}/trips`)
                .then((res) => {
                    setListaViagens(res.data.trips)
                }).catch((err) => {
                    console.log(err.response)
                })
        }, [])

    return { listaViagens }
}