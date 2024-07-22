import React from "react";
import HeroSection from "./HeroSection";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <HeroSection />
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
`;

export default Header;
