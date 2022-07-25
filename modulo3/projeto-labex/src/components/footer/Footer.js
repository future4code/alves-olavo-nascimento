import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png';
import twitter from '../../assets/img/twitter.png';
import youtube from '../../assets/img/youtube.png';
import * as S from './styled-footer'


export const Footer = () => {
    return (
        <S.DivFooter>
            <p>© 2007 - 2022 LABEX, TODOS OS DIREITOS RESERVADOS.</p>
            <div>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><S.ImgSociais src={instagram} /></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><S.ImgSociais src={youtube} /></a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><S.ImgSociais src={twitter} /></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><S.ImgSociais src={facebook} /></a>
            </div>
        </S.DivFooter>
    )
}