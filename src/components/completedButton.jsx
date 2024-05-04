import styled from "styled-components";

// Definir estilos básicos del botón
export const CompleteButton = styled.button`
  padding: 6px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  ${props => props.completed && `
    background-color: #add8e6; 
     cursor: not-allowed; 
  `}
`;
