import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
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
  .previewImg img {
    height: 300px;
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
  const [selectedImage, setSelectedImage] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };
  useEffect(() => {}, [name, price]);
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
                <input
                  type={"file"}
                  accept="image/*"
                  onChange={imageChange}
                />{" "}
                <br />
                <p className="p1">Name</p>
                <input
                  border={"1px #d6d6d6 solid"}
                  onChange={(e) => setName(e.target.value)}
                />
                <p className="p1">Price</p>
                <input
                  type={"number"}
                  border={"1px #d6d6d6 solid"}
                  onChange={(e) => setPrice(e.target.value)}
                />{" "}
                <br />
                <Button>Create</Button>
              </Col>
              <Col md={{ span: 4, offset: 1 }}>
                {selectedImage && (
                  <div className="previewImg">
                    <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
                    <button onClick={removeSelectedImage}>
                      Remove This Image
                    </button>
                  </div>
                )}
                <h3>{name}</h3>
                <h4>Price: {price}</h4>
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
