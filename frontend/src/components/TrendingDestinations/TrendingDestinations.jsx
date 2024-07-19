import React from "react";
import styled from "styled-components";
import DestinationCard from "./DestinationCard";
import marrakechImage from "/marrakech.jpg";
import casablancaImage from "/casablanca.jpg";
import tangierImage from "/tangier.jpg";
import parisImage from "/paris.jpg";
import agadirImage from "/agadir.jpg";

const TrendingDestinations = () => {
  const destinations = [
    { name: "Marrakech", flag: "🇲🇦", imageUrl: marrakechImage },
    { name: "Casablanca", flag: "🇲🇦", imageUrl: casablancaImage },
    { name: "Tangier", flag: "🇲🇦", imageUrl: tangierImage },
    { name: "Paris", flag: "🇫🇷", imageUrl: parisImage },
    { name: "Agadir", flag: "🇲🇦", imageUrl: agadirImage },
  ];

  return (
    <Section>
      <SectionTitle>Trending destinations</SectionTitle>
      <SectionSubtitle>
        Most popular choices for travellers from Morocco
      </SectionSubtitle>
      <CardGrid>
        {destinations.map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
        ))}
      </CardGrid>
    </Section>
  );
};

const Section = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const SectionSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #555;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 22rem);
  gap: 20px;

  & > :nth-child(1),
  & > :nth-child(2) {
    grid-column: span 3;
  }

  & > :nth-child(3),
  & > :nth-child(4),
  & > :nth-child(5) {
    grid-column: span 2;
  }
`;

export default TrendingDestinations;
