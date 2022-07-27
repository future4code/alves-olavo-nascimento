import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { goToFeedPage } from '../../routes/cordinator'

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

    return (
        <DivHeader>
            <TextoLogo onClick={() => goToFeedPage(navigate)} >LaBeddit</TextoLogo>
        </DivHeader>
    )
}

export default Header