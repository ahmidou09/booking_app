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
  margin-bottom: 20px;
`;

const AvailabilityTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const Room = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 0;
`;

const RoomInfo = styled.div`
  flex: 3;
`;

const RoomType = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 5px;
`;

const RoomDetails = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const RoomPricing = styled.div`
  flex: 1;
  text-align: right;
`;

const Price = styled.p`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const ReserveButton = styled.button`
  padding: 10px 15px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
  }
`;

export default AvailabilitySection;
