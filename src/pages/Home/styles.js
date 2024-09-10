import styled from "styled-components"
import frontend from '../../assets/background.svg'

export const Container = styled.div`
    background: url("${frontend}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
    overflow: hidden;
`
export const Image = styled.img`
    margin-top: 30px;
`
export const Form = styled.form`
     background: linear-gradient(
        157.44deg, 
        rgba(255, 255, 255, 0.6) 0.84%,
        rgba(255, 255, 255, 0.6) 0.85%, 
        rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 40px 30px;
    width: 42rem;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    /* ${(props) => props.isBlur && `
        backdrop-filter: blur(45px)
        min-height: calc(100vh - 170px)
    `} */
`

export const ContainerInput = styled.div`
    display: flex;
    column-gap: 1rem;
`

export const InputLabel = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin-left: 25px;
    color: #EEEEEE;
`
export const Input = styled.input`
    height: 58px;
    width: 100%;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none; 
    margin-bottom: 34px;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    padding-left: 25px;
    color: #FFFFFF;

`