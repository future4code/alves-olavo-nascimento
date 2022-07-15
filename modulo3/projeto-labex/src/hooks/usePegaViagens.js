import { useEffect, useState } from "react"
import axios from "axios"
export const usePegaViagens = () => {
    const [listaViagens, setListaViagens] = useState([])
    
        useEffect(()=>{
            axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/olavo-marques-alves/trips")
                .then((res) => {
                    setListaViagens(res.data.trips)
                }).catch((err) => {
                    console.log(err.response)
                })
        }, [])

    return { listaViagens }
}