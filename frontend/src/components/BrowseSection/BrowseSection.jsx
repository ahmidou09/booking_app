import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";

const BrowseSection = () => {
  const properties = [
    { title: "Hotels", imageUrl: "hotels.jpg" },
    { title: "Apartments", imageUrl: "apartments.jpg" },
    { title: "Villas", imageUrl: "villas.jpg" },
    { title: "Resorts", imageUrl: "resorts.jpg" },
    { title: "Cabins", imageUrl: "cabins.jpg" },
    { title: "Cottages", imageUrl: "cottages.jpg" },
  ];

  return (
    <SectionContainer>
      <SectionTitle>Browse by property type</SectionTitle>
      <Carousel items={properties} />
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export default BrowseSection;
