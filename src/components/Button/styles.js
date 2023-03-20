import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 74px;
    background: ${props => props.isTransparent ? 'transparent' : ' rgba(0, 0, 0, 0.8);'};
    border: ${props => props.isTransparent ? '1px solid #FFFFFF' : 'none'};
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 90px;
    gap: 20px;
    cursor: pointer;
    &:hover{opacity:0.8;}
    &:active{opacity:0.4;}

    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;

    img{transform: ${props => props.isTransparent && 'rotateY(180deg)'}}
`