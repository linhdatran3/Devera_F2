import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Products.css";
const Products = () => {
  return (
    <React.Fragment>
      <div>
        <header>
          <div className="products__head">
            <Navbar />
          </div>
        </header>

        <section className="products"></section>

        <footer>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  );
};
export default Products;
