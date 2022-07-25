import * as S from './styled-header'
import { goToHomePage } from '../../routes/cordinator'
import { useNavigate } from "react-router-dom"

export const Header = () => {
    const navigate = useNavigate()
    return (
        <S.DivCabecalho>
            <S.Logo onClick={() => goToHomePage(navigate)}>LabeX</S.Logo>
        </S.DivCabecalho>
    )
}