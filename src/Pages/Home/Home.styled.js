import styled from "styled-components";
import Hero from '../../Images/hero.webp';

export const HomeStyledContainer = styled.div`
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${Hero});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
`
export const Title = styled.h1 `
        position: absolute;
        top: 10%;
        left: 10%;
        font-size: 4rem;
        font-weight: 700;
        color: black;
        text-align: center;
        margin: 0;
        padding: 0;
        `

export const LinkContainer = styled.div `
        position: absolute;
        top: 50%;
        left: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        width: 200px;
        margin: 0;
        padding: 0;
`

export const LinkButton = styled.button `
        display: flex;
        width: 200px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        padding: 12px 12px;
        border-radius: 12px;
        background-color: #3470FF;
        transition: background-color 0.3s ease;
    &:hover {
        background-color: #0B44CD;
    }
`
