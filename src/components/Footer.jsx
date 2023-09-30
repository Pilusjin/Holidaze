import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  background: gray;
  color: #fff;
  width: 100%;
  padding: 30px 0px;
  display: flex;
  justify-content: center;

  p {
    margin: 0 5rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <>
        <p>Holidaze</p>
        <FooterLinks>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </FooterLinks>
        <p>Copyright 2023</p>
      </>
    </StyledFooter>
  );
}
