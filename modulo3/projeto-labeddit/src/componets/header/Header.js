import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { goToFeedPage, goToLoginPage } from '../../routes/cordinator'

export const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    border: solid 1px red;
    align-items: center;
    background-color: black;
`
export const TextoLogo = styled.h1`
    cursor: pointer;
    margin: 8px;
    color: red;
`

const Header = () => {
    const navigate = useNavigate()

    return (
        <DivHeader>
            <TextoLogo onClick={() => goToFeedPage(navigate)} >LaBeddit</TextoLogo>
            <button onClick={() => goToLoginPage(navigate)} >Login</button>
        </DivHeader>
    )
}

export default Header