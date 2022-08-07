import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import PreviewItem from "../../components/PreviewItem/PreviewItem";
import PreviewStore from "../../components/PreviewStore/PreviewStore";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

const StyledCreateNFT = styled.div`
  .top-creators {
    border-top: 1px solid #f4f4f4;
  }
  .top-creators h4 {
    padding: 1rem 0;
  }
`;
const ListStore = [
  {
    name: "store of LADA",
    image:
      "https://i.pinimg.com/564x/b8/f6/ba/b8f6ba6acde25a9f670c4d61bc03680b.jpg",
    widget: "140.526.260",
  },
  {
    name: "store of Devera",
    image:
      "https://i.pinimg.com/564x/f6/20/7a/f6207a3edf39cf37bf20adfc90e9246c.jpg",
    widget: "140.526.260",
  },
  {
    name: "store of Devera",
    image:
      "https://i.pinimg.com/736x/a7/57/83/a75783cef33a4e7b074d501ef1a1698f.jpg",
    widget: "140.526.260",
  },
  {
    name: "store of Devera",
    image:
      "https://i.pinimg.com/564x/1d/bb/29/1dbb2993045a550374d48c6ca7a29af2.jpg",
    widget: "140.526.260",
  },
  {
    name: "store of Devera",
    image:
      "https://i.pinimg.com/236x/0b/a1/9c/0ba19c7c34fc0947ad75aebc800c842f.jpg",
    widget: "140.526.260",
  },
  {
    name: "store of Devera",
    image:
      "https://i.pinimg.com/236x/85/52/84/855284ab948b5a797961f29380d26981.jpg",
    widget: "140.526.260",
  },
];
const CreateNFT = () => {
  return (
    <React.Fragment>
      <StyledCreateNFT>
        <div>
          <Navbar />
          <section className="createNFT container">
            <h4>Create and Sell Your NFTs</h4>
            <Row>
              <Col md={5}>
                <p className="p1">Upload:</p>
                <Input type={"file"} /> <br />
                <p className="p1">Name</p>
                <Input border={"1px #d6d6d6 solid"} />
                <p className="p1">Price</p>
                <Input type={"number"} border={"1px #d6d6d6 solid"} /> <br />
                <Button>Create</Button>
              </Col>
              <Col md={{ span: 4, offset: 1 }}>
                <PreviewItem
                  Image={
                    "https://i.pinimg.com/564x/5d/ef/87/5def874cf1625d3b55ab0ebda14175fd.jpg"
                  }
                />
              </Col>
            </Row>
          </section>
          <section className="top-creators">
            <h4 className="container">Top creators of the week</h4>
            <div className="container">
              <Row>
                {ListStore?.map((store) => (
                  <Col md={4}>
                    <PreviewStore
                      Name={store.name}
                      Image={store.image}
                      Widget={store.widget}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </section>
          <footer>
            <Footer />
          </footer>
        </div>
      </StyledCreateNFT>
    </React.Fragment>
  );
};
export default CreateNFT;
