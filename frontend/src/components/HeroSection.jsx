import React from "react";
import styled from "styled-components";
//import backgroundImage from "/hero.jpg";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <Hero>
      <Overlay />
      <Container>
        <Content>
          <Title>A piece of paradise just for you</Title>
          <Subtitle>Book entire houses, villas, cabins and more</Subtitle>
          <Button>Discover holiday rentals</Button>
          <SearchBar />
        </Content>
      </Container>
    </Hero>
  );
};

const Hero = styled.div`
  position: relative;
  height: 40vh;
  background-image: url("hero.jpg");
  background-size: cover;
  background-position: center;
  border: 1px solid red;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

const Content = styled.div`
  position: absolute;
  z-index: 1;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #0071c2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.8;
  }
`;

export default HeroSection;
