import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { goToFeedPage, goToLoginPage } from '../../routes/cordinator'
import { useState } from "react"
import FeedPage from "../../pages/FeedPage/FeedPage"
import LoginPage from "../../pages/LoginPage/LoginPage"

export const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    /* border: solid 1px red; */
    align-items: center;
    background-color: #F9B24E;
`
export const TextoLogo = styled.h1`
    cursor: pointer;
    margin: 8px;
    color: #45525B;
`

const Header = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [logoutButton, setLogoutButton] = useState(token ? "Logout" : "Login")
    // const [logoutButton, setLogoutButton] = useState()
    // console.log(logoutButton)

    const toDoLogout = () => {
        console.log("entrou em pagina header toDoLogout")
        localStorage.removeItem("token")
        goToLoginPage(navigate)
    }

    const lookToken = () => {
        if (token) {
            toDoLogout()
            setLogoutButton("Login")
            goToLoginPage(navigate)
        } else {
            goToLoginPage(navigate)
        }
    }

    return (
        <DivHeader>
            <TextoLogo onClick={() => goToFeedPage(navigate)} >LaBeddit</TextoLogo>
            <TextoLogo onClick={lookToken} >{logoutButton}</TextoLogo>
        </DivHeader>
    )
}

export default Header