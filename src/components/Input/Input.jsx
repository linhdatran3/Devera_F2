import React from "react";
import styled from "styled-components";
const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: none;
`;
const Input = (type, placeholder, onChange, value) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <React.Fragment>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      ></StyledInput>
    </React.Fragment>
  );
};
export default Input;
