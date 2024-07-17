import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection />
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
`;

export default Header;
