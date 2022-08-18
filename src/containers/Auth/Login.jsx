import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { ENDPOINT } from "../../utils/constant";
import { useDispatch, useSelector } from "../../hooks";
const StyledLogin = styled.div``;
const handleLogin = (e) => {
  e.preventDefault();
  // const request = new XMLHttpRequest();
  // request.onreadystatechange = function () {
  //   if (request.status === 200) {
  //     localStorage.setItem("isLoggin", true); // Another callback here
  //   }
  // };
  // request.open("POST", "http://localhost:1337/auth/local");
  // request.send(new FormData(e.target));

  fetch(`${ENDPOINT}/auth/local`, {
    method: "POST",
    body: new FormData(e.target),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("isLoggin", true);
      // Handle data
    })
    .catch((err) => {
      console.log(err.message);
    });
};
const Login = () => {
  useSelector(({ userModel }) => ({ user: userModel.user }));

  return (
    <React.Fragment>
      <StyledLogin>
        <form onSubmit={(e) => handleLogin(e)}>
          <Input placeholder={"username"} name={"identifier"} />
          <br />
          <Input placeholder={"password"} name={"password"} />
          <br />
          <Button type={"submit"} bgColor={"#eb4d4b"}>
            Login
          </Button>
        </form>
        <p>
          Not account? <Link to={"/auth/register"}>Register</Link>
        </p>
      </StyledLogin>
    </React.Fragment>
  );
};
export default Login;
