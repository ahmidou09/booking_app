import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaDribbble,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const LogoImage = styled.img`
  height: 32px;
  margin-right: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 1rem;
  text-align: center;

  strong {
    margin-bottom: 0.5rem;
  }
  & a {
    margin-bottom: 0.5rem;
    color: #6b7280;
    text-decoration: none;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin-top: 2rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  & a {
    color: #6b7280;
    margin: 0 0.5rem;
    font-size: 1.5rem;
    text-decoration: none;
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: #6b7280;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <Logo>
          <LogoImage
            src="https://flowbite.com/images/logo.svg"
            alt="Flowbite Logo"
          />
          <span>Booking</span>
        </Logo>
        <FooterLinks>
          <LinksColumn>
            <strong>ABOUT</strong>
            <Link to="#">About Booking.com</Link>
            <Link to="#">Investor relations</Link>
            <Link to="#">Careers</Link>
          </LinksColumn>
          <LinksColumn>
            <strong>FOLLOW US</strong>
            <Link to="https://github.com">Github</Link>
            <Link to="#">Twitter</Link>
            <Link to="#">Facebook</Link>
            <Link to="#">Linkedin</Link>
            <Link to="#">Instagram</Link>
          </LinksColumn>
          <LinksColumn>
            <strong>LEGAL</strong>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/sitemap">Sitemap</Link>
          </LinksColumn>
        </FooterLinks>
      </FooterTop>

      <FooterBottom>
        <Copyright>© 2022 Booking™</Copyright>
        <SocialIcons>
          <Link to="https://facebook.com">
            <FaFacebook />
          </Link>
          <Link to="https://instagram.com">
            <FaInstagram />
          </Link>
          <Link to="https://twitter.com">
            <FaTwitter />
          </Link>
          <Link to="https://github.com">
            <FaGithub />
          </Link>
          <Link to="https://dribbble.com">
            <FaDribbble />
          </Link>
        </SocialIcons>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
