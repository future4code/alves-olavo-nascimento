import styled from "styled-components";

export const FormPost = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vh;
    height: 30vh;
    border-bottom: 1px solid;
    margin-bottom: 5vh;
`
export const InputPost = styled.textarea`
    width: 50vh;
    height: 15vh;
    display:flex;
    padding-bottom: 50px;
    padding: 10px;
    font-family: sans-serif;
    font-size: 18px;
    border-radius: 12px;
    /* border: solid 1px red; */
`
export const DivPost = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    margin-top: 10vh;
    /* border: solid 1px red; */
`

export const CardPosts = styled.div`
    width: 50vh;
    height: 20vh;
    padding: 10px;
    font-family: sans-serif;
    font-size: 18px;
    margin: 10px 20px;
    padding: 0;
    border: solid 2px #FE7E02;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    /* border: 1px solid green; */
`

export const EnviadoPor = styled.h6`
    color: green;
    display: flex;
    justify-content: space-between;
    /* margin-bottom: 10px; */
    flex-basis: 10%;
    /* border: 1px solid blue; */
`
export const MainCard = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 90%;
    /* border: 1px solid violet; */
    /* width: 48vh; */
    /* height: 100%; */
    max-width: 100%;
`
export const IconsSection = styled.section`
    display: flex;
    /* border: 1px solid green; */
    align-items: center;
`
export const CorpoClicavel = styled.p`
    display: flex;
    /* border: 1px solid black; */
    align-items: flex-start;
    /* width: 48vh; */
    width: 100%;
    /* height: 15vh; */
    height: 100%;
    font-family: sans-serif;
    font-size: 18px;
    cursor: pointer;
    flex-direction: column;
    /* overflow: hidden;  */
    /* max-block-size: writing-mode; */
    word-break: break-word;
`






