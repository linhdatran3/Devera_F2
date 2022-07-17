import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  position: relative;
  padding: 0.8rem 1.8rem;
  border-radius: 5px;
  font-weight: 720;
  ${({ bgColor, txtColor, height, width }) => {
    return `
     background: ${bgColor};
     color:${txtColor};
     height: ${height} px;
      width: ${width} px;
    `;
  }};
`;
const Button = ({ txtColor, children, bgColor, height, width }) => {
  return (
    <StyledButton
      txtColor={txtColor}
      bgColor={bgColor}
      width={width}
      height={height}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
