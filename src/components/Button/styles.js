import { styled } from "styled-components";

export const DefaultButton = styled.button`
 border: ${(props) => (props.theme === "primary" ? "none" : "1px solid #fff")};
 background: ${(props) => (props.theme === "primary" ? "linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)" : "transparent")};
 font-size: 16px;
 color: #fff;
 padding: 16px 32px;
 width: fit-content;
 border-radius: 30px;
 cursor: pointer;

 &:hover {
  opacity: 0.8;
 }

 &:active {
  opacity: 0.5;
 }
`;
