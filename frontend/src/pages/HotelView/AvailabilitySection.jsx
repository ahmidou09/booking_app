import React from "react";
import styled from "styled-components";

const AvailabilitySection = ({ rooms }) => {
  return (
    <AvailabilityContainer>
      <AvailabilityTitle>Availability</AvailabilityTitle>
      {rooms.map((room, index) => (
        <Room key={index}>
          <RoomInfo>
            <RoomType>{room.roomType}</RoomType>
            <RoomDetails>
              Beds: {room.numberOfBeds}
              <br />
              Amenities: {room.amenities.join(", ")}
            </RoomDetails>
          </RoomInfo>
          <RoomPricing>
            <Price>${room.pricePerNight} per night</Price>
            <ReserveButton disabled={!room.availability}>
              {room.availability ? "Reserve" : "Unavailable"}
            </ReserveButton>
          </RoomPricing>
        </Room>
      ))}
    </AvailabilityContainer>
  );
};

const AvailabilityContainer = styled.div`
  margin-bottom: 2rem;
`;

const AvailabilityTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const Room = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-grey-2);
  padding: 1rem 0;
`;

const RoomInfo = styled.div`
  flex: 3;
`;

const RoomType = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;

const RoomDetails = styled.p`
  font-size: 1.2rem;
  color: var(--color-grey-4);
`;

const RoomPricing = styled.div`
  flex: 1;
  text-align: right;
`;

const Price = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ReserveButton = styled.button`
  padding: 1rem 1.5rem;
  background-color: ${(props) =>
    props.disabled ? "var(--color-grey-5)" : "var(--color-primary-3)"};
  color: var(--color-white);
  border: none;
  border-radius: 0.5rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "var(--color-grey-5)" : "var(--color-primary-2)"};
  }
`;
export default AvailabilitySection;
