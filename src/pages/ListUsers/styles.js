import SimpleBar from "simplebar-react";
import { styled } from "styled-components";

export const Container = styled.div`
 background-color: #181f36;
 height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-evenly;
 padding: 20px;
`;

export const SimpleUserBar = styled(SimpleBar)`
 max-height: 30rem;

  .simplebar-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 10px 0;
    width: max-content; 
   
    @media screen and (max-width: 750px) {
      grid-template-columns: 1fr;  
    }
 }

 .simplebar-content::before {
  content: none;
 }

 .simplebar-scrollbar::before {
    background-color: #8B3E43;
  }
`;

export const CardUsers = styled.div`
 background-color: #252d48;
 padding: 16px;
 border-radius: 32px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 gap: 10px;
 max-width: 400px;

 h3 {
  color: #fff;
  font-size: 24px;
  margin-bottom: 3px;
  text-transform: capitalize;
 }

 p {
  color: #fff;
  font-size: 12px;
  font-weight: 200;
 }
`;

export const AvatarUser = styled.img`
 height: 80px; 
`;

export const Icon = styled.img`
 cursor: pointer;
 padding-left: 3px;
 height: 1.4rem;

 &:hover {
  opacity: 0.8;
 }

 &:active {
  opacity: 0.5;
 }
`;

export const DivUpdate = styled.div`
 display: none;
   
 input {   
   width: 25rem;
   border-radius: 10px;
   border: 1px solid #d2dae2;
   background-color: #fff;
   margin: 6px 0;
   padding: 12px 20px;
   outline: none;
  }
  
  button {
    height: 2.5rem;
    padding-top: 0.65rem;
  }
`;
