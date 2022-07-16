import React from "react";
import Item from "../../components/Item/Item";
import Button from "../../components/Button/Button";
import PreviewItem from "../../components/PreviewItem/PreviewItem";
import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";
const Home = () => {
  return (
    <React.Fragment>
      <div>
        <h1>HOME</h1>
        <Item />
        <Button />
        <PreviewItem />
        <Input />
        <Navbar />
      </div>
    </React.Fragment>
  );
};
export default Home;
