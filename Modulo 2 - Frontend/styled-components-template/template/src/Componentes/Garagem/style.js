import styled from "styled-components";

export const MensagemBtn = styled.button`
    background-color: orange;
    bordeR: none;
    padding: 10px;
    transition: all 400ms ease-in-out;
    border-radius: 5px;
    cursor: pointer;
    :hover {
        background-color: yellowgreen;
    }
`

export const GaragemContainer = styled.main`
    background-color: lightgray;
`

export const Container = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
`

export const Estacionamento = styled.section`
    background-color: gray;
    padding: 1rem;
    width: 40vw;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    border: 1px solid black;
`