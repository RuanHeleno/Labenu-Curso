import styled from "styled-components"

export const ContainerMusicas = styled.article`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
    font-family: 'Raleway', sans-serif;    
    border: 6px double black;
    width: 65vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0;
    margin: 16px 0;
    min-width: fit-content;
`
export const Musica = styled.section`
    display: flex;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
    flex-wrap:wrap;
`
export const ContainerInputs = styled.div`
    width: 100% ;
    display: flex;
    margin-top: 16px;
    justify-content: center;
`
export const InputMusica = styled.input`
    width: 15vw;
`

export const Botao = styled.button`
    width: 10vw;
`

export const Delete = styled.button`
    margin-top: 2rem;
    background-color: orangered;
    color: white;
    padding: .5rem 1rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`