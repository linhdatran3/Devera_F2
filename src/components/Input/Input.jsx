import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  ${({ border }) => {
    return `border: ${border}`;
  }}
`;
export const Input = ({
  type,
  placeholder,
  onChange,
  value,
  border,
  disabled,
  name,
}) => {
  return (
    <React.Fragment>
      <StyledInput
        type={type || "text"}
        placeholder={placeholder || ""}
        value={value}
        onChange={onChange}
        border={border}
        disabled={disabled}
        name={name}
      ></StyledInput>
    </React.Fragment>
  );
};
//propTypes
//defaultProps
Input.propTypes = {
  type: PropTypes.string,
};
Input.defaultProps = {
  placeholder: "",
  type: "text",
  border: "none",
};
