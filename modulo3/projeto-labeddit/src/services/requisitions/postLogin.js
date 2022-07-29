import axios from "axios";
import { BASE_URL } from '../../assets/url'

const postLogin = (body, setLoading, goToFeedPage, navigate) => {
    console.log("entrou em fazer login")
    setLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
    .then(res => {
        setLoading(false)
        console.log(res)
            localStorage.setItem("token", res.data.token)
            goToFeedPage(navigate)
        })
        .catch(err => {
            setLoading(false)
            // alert("Erro post login",err.response.data)
            
            alert("Erro post login")
            alert("Erro em fazer login tente novamente.")
        })
}

export default postLogin