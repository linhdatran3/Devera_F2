import React from "react";
import styled from "styled-components";
const styledButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  position: relative;
  ${({ bgColor, height, width }) => {
    return `
     background-color: ${bgColor};
     height: ${height}px;
      width: ${width}px;
    `;
  }};
`;
const Button = ({ children, bgColor, height, width }) => {
  return (
    <styledButton bgColor={bgColor} width={width} height={height}>
      {children}
    </styledButton>
  );
};
export default Button;
