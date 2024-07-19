import React from "react";
import styled from "styled-components";
import OfferCard from "./OfferCard";

const OffersSection = () => {
  const offer = {
    title: "Seize the moment",
    description:
      "Save 15% or more when you book and stay before 1 October 2024",
    buttonText: "Find Getaway Deals",
    imageUrl: "hero.jpg",
  };

  return (
    <SectionContainer>
      <SectionTitle>Offers</SectionTitle>
      <SectionSubtitle>
        Promotions, deals and special offers for you
      </SectionSubtitle>
      <OfferCard offer={offer} />
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const SectionSubtitle = styled.p`
  font-size: 16px;
  color: grey;
  margin-bottom: 20px;
`;

export default OffersSection;
