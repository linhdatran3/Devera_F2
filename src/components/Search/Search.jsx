import React, { useState } from "react";
import styled from "styled-components";
//import { Button } from "../Button";
import { Input } from "antd";
const StyledSearch = styled.div`
  input {
    padding: 0.2rem 1rem;
    border-radius: 5px;
    border: 1.5px solid #d6d6d6;
    width: 200px;
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
  }
  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
    ${({ translateX }) => {
      return `
      transform: translateX(${translateX});
      `;
    }}
  }
`;

export const Search = (props) => {
  const {
    txtColor,
    bgColor,
    height,
    width,
    borderRadius,
    border,
    onClick,
    padding,
    translateX,
  } = props;
  const [term, setTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(term);
    //if(term === "") return alert("please return search term")
    //dispatch(fetchAsyncProduct(term))
    //setTerm("")
  };
  const onSearch = (value) => console.log(value);
  //debounce
  return (
    <React.Fragment>
      <StyledSearch>
        <form onSubmit={submitHandler}>
          {/* <input
            type="text"
            value={term}
            placeholder="Search"
            onChange={(e) => setTerm(e.target.value)}
            txtColor={txtColor}
            bgColor={bgColor}
            width={width}
            height={height}
            borderRadius={borderRadius}
            border={border}
            onClick={onClick}
            padding={padding}
            {...props}
          /> */}
          <Input.Search
            placeholder="Search"
            onSearch={onSearch}
            onChange={(e) => setTerm(e.target.value)}
            txtColor={txtColor}
            bgColor={bgColor}
            width={width}
            height={height}
            borderRadius={borderRadius}
            border={border}
            onClick={onClick}
            padding={padding}
            translateX={translateX}
            {...props}
          />
          {/* <Button
            type="submit"
            padding={"0.3rem 1rem"}
            borderRadius={"5px"}
            bgColor={"#d6d6d6"}
          >
            Search
          </Button> */}
        </form>
      </StyledSearch>
    </React.Fragment>
  );
};
