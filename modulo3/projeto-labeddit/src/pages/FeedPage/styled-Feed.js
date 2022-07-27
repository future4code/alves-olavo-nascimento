import styled from "styled-components";

export const FormFeed = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vh;
    height: 30vh;
    border-bottom: 1px solid;
    margin-bottom: 5vh;
`
export const DivFeed = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    margin-top: 10vh;
    /* border: solid 1px red; */
`
export const Botons = styled.button`
    width: 50vh;
    height: 10vh;
    font-size: 18px;
    /* border: solid 1px red; */
`
export const InputTitulo = styled.textarea`
    width: 50vh;
    height: 10vh;
    display:flex;
    align-items: flex-start;
    padding-bottom: 50px;
    padding: 10px;
    font-family: sans-serif;
    font-size: 18px;
    border-radius: 12px;
    /* border: solid 1px red; */
`
export const InputPost = styled.textarea`
    width: 50vh;
    height: 35vh;
    display:flex;
    padding-bottom: 50px;
    padding: 10px;
    font-family: sans-serif;
    font-size: 18px;
    border-radius: 12px;
    /* border: solid 1px red; */
`
export const CardPosts = styled.div`
    width: 50vh;
    height: 20vh;
    padding: 10px;
    font-family: sans-serif;
    font-size: 18px;
    margin: 10px 20px;
    border: solid 2px #FE7E02;
    border-radius: 12px;
    cursor: pointer;
`
export const EnviadoPor = styled.h6`
    /* width: 50vh;
    height: 20vh;
    padding: 10px;
    font-family: sans-serif;
    font-size: 18px;
    margin: 10px 20px;
    border: solid 2px #FE7E02;
    border-radius: 12px; */
    color: green;
    display: flex;
    justify-content: space-between;
`
