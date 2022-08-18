import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/Button";

// import { useTranslation } from 'react-i18next';

// eslint-disable-next-line arrow-body-style
const PageNotFound = () => {
  // const { t } = useTranslation();
  const StyledPageNotFound = styled.div`
    .PageNotFound {
      text-align: center;
      align-items: center;
      justify-content: left;
      display: flex;
      height: 100vh;
      background-image: url("404page.jpg");

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .content {
      padding: 4rem;
    }
  `;
  return (
    <StyledPageNotFound>
      <div className="PageNotFound">
        <div className="text">
          <div className="content">
            <span>Ooops...</span>
            <br />
            page not found
            <p>
              Let&apos;s go
              <NavLink to="/">Home</NavLink>
              and try from there
            </p>
            <Button>
              <NavLink to="/">Home</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </StyledPageNotFound>
  );
};

export default PageNotFound;
