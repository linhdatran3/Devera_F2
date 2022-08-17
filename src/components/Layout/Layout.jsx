import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Layout } from "antd";
import styled from "styled-components";

const LayoutStyled = styled(Layout)`
  background-color: #fff;
  padding: 1rem 0;
`;

export const PrimaryLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh", background: "#fff" }}>
      <Navbar />
      <LayoutStyled>{children}</LayoutStyled>
      <Footer />
    </Layout>
  );
};
