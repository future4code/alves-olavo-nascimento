import axios from "axios";
import { BASE_URL } from '../../assets/url'

const postLogin = (body, setLoading, goToFeedPage, navigate) => {
    setLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
        .then(res => {
            setLoading(false)
            localStorage.setItem("token", res.data.token)
            goToFeedPage(navigate)
        })
        .catch(err => {
            setLoading(false)
            alert(err.response.data)
        })
}

export default postLogin