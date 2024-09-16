import IMG_LOGO from '../../assets/the-movie.png'
import styled from "styled-components"

export const ContainerBody = styled.div`
background-color: #032541;
width: 100%;
background:
linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
background-color: #131313;
background-size: 20px 20px;
`
export const ImgLogo = styled.img`
cursor: pointer;
border-bottom-right-radius: 20px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 60vw;
height: 50px;

}

`
const Header = () => {
    return (
        <ContainerBody>
            <ImgLogo src={IMG_LOGO} />
        </ContainerBody>
    )
}

export default Header