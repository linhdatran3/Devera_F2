import React from "react";
import "./Footer.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <Row className="row">
          <Col sm={3}>
            <div className="footer_logo">
              <img src="logo1.png" alt="" height={"70px"} />
            </div>
            <br />
            <div className="footer_content">
              <span className="p2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                quod facilis nostrum non quibusdam, quia magnam porro esse culpa
                nobis odio debitis rerum blanditiis optio est ullam delectus
                dolore sit!
              </span>
            </div>
            <div className="footer_icon-social">
              <div className="twitter circleClasses">
                <TwitterOutlined className="circleItemCenter" />
              </div>
              <div className="instagram circleClasses">
                <InstagramOutlined className="circleItemCenter" />
              </div>
              <div className="facebook circleClasses">
                <FacebookOutlined className="circleItemCenter" />
              </div>
            </div>
          </Col>
          <Col sm={2}>
            <div className="title">
              <h3>Feature</h3>
            </div>
            <div className="footer_content">
              <span className="p1">Feature</span>
              <span className="p1">Feature</span>
              <span className="p1">Feature</span>
              <span className="p1">Feature</span>
            </div>{" "}
          </Col>
          <Col sm={2}>
            <div className="title">
              <h3>Solution</h3>
            </div>
            <div className="footer_content">
              <span className="p1">Feature</span>
              <span className="p1">Feature</span>
              <span className="p1">Feature</span>
              <span className="p1">Feature</span>
            </div>
          </Col>
          <Col sm={3}>
            <div className="title">
              <h3>Contact</h3>
            </div>
            <div className="footer_content">
              <div className="location">
                <div className="location-icon circleClasses">
                  <EnvironmentOutlined className="circleItemCenter" />
                </div>
                <div className="location-info">
                  <span className="p1"> Linh Trung, Thu Duc</span>
                </div>
              </div>
              <div className="phone">
                <div className="phone-icon circleClasses">
                  <PhoneOutlined className="circleItemCenter" />
                </div>
                <div className="phone-info">
                  <span className="p1"> +84 0258682958</span>
                </div>
              </div>
              <div className="mail">
                <div className="mail-icon circleClasses">
                  <MailOutlined className="circleItemCenter" />
                </div>
                <div className="mail-info">
                  <span className="p1">linhdatran3@gmail.com</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <p className="copyright p2">
        &copy; 2022 Linhdadev.xyz. All right reserved.
      </p>
    </React.Fragment>
  );
};
export default Footer;
