import React from "react";
import Carousel from "./Carousel";
import styled from "styled-components";

const CarouselContainer = () => {
  const items = [
    {
      image: "https://picsum.photos/seed/picsum/200/300",
      title: "Hotel Soleil Imlil",
      location: "Imlil, Morocco",
      rating: 8.8,
      reviews: "Fabulous · 64 reviews",
    },
    {
      image: "https://picsum.photos/seed/picsum/200/300",
      title: "Riad Oussagou",
      location: "Imlil, Morocco",
      rating: 9.2,
      reviews: "Superb · 329 reviews",
    },
    {
      image: "https://picsum.photos/seed/picsum/200/300",
      title: "Dar Aymane",
      location: "Imlil, Morocco",
      rating: 9.4,
      reviews: "Superb · 202 reviews",
    },
    {
      image: "https://picsum.photos/seed/picsum/200/300",
      title: "Riad Atlas Toubkal",
      location: "Imlil, Morocco",
      rating: 9.1,
      reviews: "Superb · 312 reviews",
    },
    {
      image: "https://picsum.photos/seed/picsum/200/300",
      title: "Hotel Soleil Imlil",
      location: "Imlil, Morocco",
      rating: 8.8,
      reviews: "Fabulous · 64 reviews",
    },
    {
      image: "https://picsum.photos/seed/picsum/200/300",
      title: "Riad Oussagou",
      location: "Imlil, Morocco",
      rating: 9.2,
      reviews: "Superb · 329 reviews",
    },
    {
      image: "https://picsum.photos/seed/picsum/200/300",
      title: "Dar Aymane",
      location: "Imlil, Morocco",
      rating: 9.4,
      reviews: "Superb · 202 reviews",
    },
  ];

  return (
    <Container>
      <Title>Still interested in these properties?</Title>
      <Carousel items={items} />
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 3rem;
`;

export default CarouselContainer;
