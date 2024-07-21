import React from "react";
import { useParams } from "react-router-dom";
import { useGetHotelByIdQuery } from "../redux/slices/hotelApiSlice";
import HeaderSection from "./HotelView/HeaderSection";
import DetailsSection from "./HotelView/DetailsSection";
import AvailabilitySection from "./HotelView/AvailabilitySection";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HotelView = () => {
  const { id } = useParams();
  const { data: hotel, isLoading } = useGetHotelByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <HeaderSection hotel={hotel} />
      <DetailsSection
        description={hotel.description}
        amenities={hotel.amenities}
      />
      <AvailabilitySection rooms={hotel.rooms} />
    </Container>
  );
};

export default HotelView;
