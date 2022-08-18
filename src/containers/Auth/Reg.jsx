import React from "react";
import styled from "styled-components";
import { Input } from "../../components/Input";
const StyledReg = styled.div``;
const Reg = () => {
  return (
    <React.Fragment>
      <StyledReg>
        <Input placeholder={"username"} />
        <br />
        <Input placeholder={"password"} />
        <br />
        <Input placeholder={"email"} />
        <br />
      </StyledReg>
    </React.Fragment>
  );
};
export default Reg;
