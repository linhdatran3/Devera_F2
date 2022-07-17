import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Navbar.css";
const Navbar = () => {
  return (
    <React.Fragment>
      <Router>
        <div className="navbar container">
          <div className="logo">
            {/* logo */}
            <h2>
              <Link to="/">Devestore</Link>
            </h2>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/a">Explore</Link>
              </li>
              <li>
                <Link to="/b">Marketplace</Link>
              </li>
              <li>
                <Link to="/c">Artist</Link>
              </li>
              <li>
                <Link to="/d">Collection</Link>
              </li>
            </ul>
          </div>
          <div className="search">
            <Input type="text" placeholder="search" />
          </div>
          <div className="btn-connect">
            <Button
              bgColor="linear-gradient(90deg, #E12D2D 0%, #1254FE 100%);"
              txtColor="#fff"
            >
              Connect
            </Button>
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
};
export default Navbar;
