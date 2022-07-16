import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
const Navbar = () => {
  return (
    <React.Fragment>
      <div>
        {/* <div className="logo"> */}
        {/* logo */}
        {/* <h2>
            <Link to="/">Devestore</Link>
          </h2>
        </div> */}
        {/* <div className="menu">
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
        </div> */}
        <div className="search">
          <Input />
        </div>
        <div className="btn-connect">
          <Button></Button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Navbar;
