import React from "react";
import CarouselContainer from "../components/CarouselContainer";
import styled from "styled-components";

const HomeContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 12rem 0;
`;

const Home = () => {
  return (
    <HomeContainer>
      <CarouselContainer />
    </HomeContainer>
  );
};

export default Home;
