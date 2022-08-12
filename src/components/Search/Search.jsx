import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
const StyledSearch = styled.div`
  input {
    padding: 0.2rem 1rem;
    border-radius: 5px;
    border: 1.5px solid #d6d6d6;
  }
`;

const Search = () => {
  const [term, setTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(term);
    //if(term === "") return alert("please return search term")
    //dispatch(fetchAsyncProduct(term))
    //setTerm("")
  };
  //debounce
  return (
    <React.Fragment>
      <StyledSearch>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search"
            onChange={(e) => setTerm(e.target.value)}
          />
          <Button
            type="submit"
            padding={"0.3rem 1rem"}
            borderRadius={"5px"}
            bgColor={"#d6d6d6"}
          >
            Search
          </Button>
        </form>
      </StyledSearch>
    </React.Fragment>
  );
};
export default Search;
