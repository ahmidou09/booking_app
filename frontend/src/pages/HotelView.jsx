import React from "react";
import { useParams } from "react-router-dom";
import { useGetHotelByIdQuery } from "../redux/slices/hotelApiSlice";
import HeaderSection from "./HotelView/HeaderSection";
import DetailsSection from "./HotelView/DetailsSection";
import AvailabilitySection from "./HotelView/AvailabilitySection";
import styled from "styled-components";
import SearchBar from "../components/Header/SearchBar";

const Container = styled.div`
  max-width: 1200px;
  margin: 8rem auto;
`;

const Hero = styled.div`
  position: relative;
  height: 5rem;
  background-color: var(--color-primary-3);
  margin-bottom: 8rem;
`;

const HotelView = () => {
  const { id } = useParams();
  const { data: hotel, isLoading } = useGetHotelByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Hero>
        <SearchBar />
      </Hero>
      <Container>
        <HeaderSection hotel={hotel} />
        <DetailsSection
          description={hotel.description}
          amenities={hotel.amenities}
        />
        <AvailabilitySection rooms={hotel.rooms} />
      </Container>
    </>
  );
};

export default HotelView;
