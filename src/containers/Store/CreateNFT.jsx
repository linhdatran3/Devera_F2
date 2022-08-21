/* eslint-disable */
import React, { useState, useEffect } from "react";
// import { Button } from "../../components/Button";
// import { Input } from "../../components/Input";
import { PrimaryLayout } from "../../components/Layout";
import { PreviewStore } from "../../components/PreviewStore";
import styled from "styled-components";
//Toastify CSS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { ENDPOINT } from "../../utils/constant";
import axios from "axios";
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoggin = JSON.parse(localStorage.getItem("isLoggin"));
    const token = localStorage.getItem("jwt");
    const role = JSON.parse(localStorage.getItem("role"));
    const id = JSON.parse(localStorage.getItem("userId"));
    const headers = { Authorization: "Bearer " + token };
    let customerRole = 6;
    let vendorRole = 8;
    if (isLoggin === true) {
      console.log(isLoggin);
      console.log(role);
      if (role === customerRole) {
        // set role from customer to vendor
        axios.put(
          `${ENDPOINT}/users/${id}`,
          {
            role: vendorRole,
          },
          { headers: headers }
        );
      }
      const formData = new FormData();

      const data = {
        price: price,
        name: name,
        users_permissions_user: localStorage.getItem("userId"),
      };
      //console.log(e.target.image.files[0]);
      formData.append(`files.image`, e.target.image.files[0]);
      formData.append("data", JSON.stringify(data));
      axios
        .post(`${ENDPOINT}/products`, formData, { headers: headers })
        .then(() => {
          toast.success("Create product completed !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        })
        .catch((err) => {
          console.log(err);
          //set role to customer
          axios.put(`${ENDPOINT}/users/${id}`, {
            role: customerRole,
          });
        });
      // fetch(`${ENDPOINT}/products`, {
      //   method: "POST",
      //   headers: {
      //     Authorization: "Bearer " + token,
      //   },
      //   body: formData,
      // });
    } else {
      toast.warning("Please login account first !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  useEffect(() => {}, [name, price]);

  return (
    <React.Fragment>
      <PrimaryLayout>
        <StyledCreateNFT>
          <div>
            <ToastContainer />
            <section className="createNFT container">
              <h4>Create and Sell Your NFTs</h4>
              <Row>
                <Col md={5}>
                  <form
                    onSubmit={(e) => handleSubmit(e)}
                    method="post"
                    enctype="multipart/form-data"
                  >
                    <p className="p1">Upload:</p>
                    <input
                      name="image"
                      type={"file"}
                      accept="image/*"
                      onChange={imageChange}
                    />{" "}
                    <br />
                    <p className="p1">Name</p>
                    <input
                      name="name"
                      border={"1px #d6d6d6 solid"}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <p className="p1">Price</p>
                    <input
                      name="price"
                      type={"number"}
                      border={"1px #d6d6d6 solid"}
                      onChange={(e) => setPrice(e.target.value)}
                    />{" "}
                    <br />
                    <input type={"submit"} value={"create"} />
                  </form>
                </Col>

                <Col md={{ span: 4, offset: 1 }}>
                  {selectedImage && (
                    <div className="previewImg">
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Thumb"
                      />
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
                        name={store.name}
                        image={store.image}
                        wdget={store.widget}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </section>
          </div>
        </StyledCreateNFT>
      </PrimaryLayout>
    </React.Fragment>
  );
};
export default CreateNFT;
