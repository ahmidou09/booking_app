import React from "react";
import InterestedSection from "../components/InterestedSection/InterestedSection";
import styled from "styled-components";
import OffersSection from "../components/OffersSection/OffersSection";
import BrowseSection from "../components/BrowseSection/BrowseSection";
import TrendingDestinations from "../components/TrendingDestinations/TrendingDestinations";

const HomeContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 12rem 0;
`;

const Home = () => {
  return (
    <HomeContainer>
      <InterestedSection />
      <OffersSection />
      <BrowseSection />
      <TrendingDestinations />
    </HomeContainer>
  );
};

export default Home;
