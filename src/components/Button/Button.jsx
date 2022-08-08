import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  position: relative;
  padding: 0.8rem 1.8rem;
  border-radius: 10px;
  font-weight: 720;
  background: #40aa54;
  color: #fff;
  ${({ bgColor, txtColor, height, width, borderRadius, border, padding }) => {
    return `
     background: ${bgColor};
     color:${txtColor};
     height: ${height};
      width: ${width};
      border-radius:${borderRadius};
      border:${border};
      padding:${padding};
    `;
  }};
`;
const Button = ({
  txtColor,
  children,
  bgColor,
  height,
  width,
  borderRadius,
  type,
  border,
  onClick,
  padding,
}) => {
  return (
    <StyledButton
      txtColor={txtColor}
      bgColor={bgColor}
      width={width}
      height={height}
      borderRadius={borderRadius}
      type={type}
      border={border}
      onClick={onClick}
      padding={padding}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
