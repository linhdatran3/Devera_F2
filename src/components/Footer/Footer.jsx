import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
const StyledFooter = styled.div`
  .footer {
    background-color: #d5fbdc;
    padding-top: 2rem;
    padding-bottom: 1rem;
    margin: 1rem 0.5rem;
    border-radius: 20px;
  }

  .footer__col1 {
    margin: 0 1.5rem;
  }

  .footer .footer_icon-social {
    display: flex;
  }
  .footer .footer_icon-social .twitter,
  .instagram,
  .facebook {
    color: rgb(64, 170, 84);
    background-color: #fff;
    margin: 1rem 0.5rem 0 0.5rem;
  }
  .footer_content {
    padding-top: 1rem;
  }
  .footer_content p {
    line-height: 25px;
  }

  .footer .footer_content .location,
  .phone,
  .mail {
    display: flex;
  }
  .copyright {
    text-align: center;
  }
`;
export const Footer = () => {
  return (
    <StyledFooter>
      <React.Fragment>
        <div className="footer">
          <div className="container">
            <Row className="row">
              <Col sm={4} className="footer__col1">
                <div className="footer_logo">
                  <img src="F2Store512.png" alt="" height={"70px"} />
                </div>
                <br />
                <div className="footer_content">
                  <span className="p2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor quod facilis nostrum non quibusdam, quia magnam porro
                    esse culpa nobis odio debitis rerum blanditiis optio est
                    ullam delectus dolore sit!
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
              <Col>
                <div className="title">
                  <h3>Feature</h3>
                </div>
                <div className="footer_content">
                  <Link to={"/"}>
                    <p className="p1">Feature</p>
                  </Link>
                  <Link to={"/"}>
                    <p className="p1">Feature</p>
                  </Link>
                  <Link to={"/"}>
                    <p className="p1">Feature</p>
                  </Link>
                  <Link to={"/"}>
                    <p className="p1">Feature</p>
                  </Link>
                </div>
              </Col>
              <Col>
                <div className="title">
                  <h3>Solution</h3>
                </div>
                <div className="footer_content">
                  <Link to={"/"}>
                    <p className="p1">Feature</p>
                  </Link>
                  <Link to={"/"}>
                    <p className="p1">Feature</p>
                  </Link>
                  <Link to={"/"}>
                    <p className="p1">Feature</p>
                  </Link>
                  <Link to={"/"}>
                    <p className="p1">Feature</p>
                  </Link>
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
        </div>
        <p className="copyright p2">
          &copy; 2022 Linhdadev.xyz. All right reserved.
        </p>
      </React.Fragment>
    </StyledFooter>
  );
};
