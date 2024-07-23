import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HotelCard = ({ hotel }) => {
  return (
    <Card>
      <ImageWrapper>
        <img src={hotel.images[0]} alt={hotel.name} />
      </ImageWrapper>
      <Details>
        <Header>
          <h2>{hotel.name}</h2>
          <Rating>
            Superb <span>{hotel.rating}</span>
          </Rating>
        </Header>
        <p>
          {hotel.location.address}, {hotel.location.city}
        </p>
        <p>
          {hotel.location.country}, {hotel.location.zipCode}
        </p>
        <p>{hotel.description}</p>
        <Pricing>
          <p>1 night, 1 adult</p>
          <Price>${hotel.rooms[0].pricePerNight}</Price>
        </Pricing>
        <SeeAvailability to={`/hotels/${hotel._id}`}>
          See availability
        </SeeAvailability>
      </Details>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid var(--color-grey-1);
  height: 25rem;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  width: 40%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Details = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Rating = styled.div`
  color: var(--color-primary-3);
  span {
    font-weight: bold;
  }
`;

const Pricing = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.p`
  font-size: 1.8rem;
  color: var(--color-error);
  font-weight: bold;
`;

const SeeAvailability = styled(Link)`
  background-color: var(--color-primary-3);
  color: var(--color-white);
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.5rem;
  margin-top: auto;
  align-self: flex-end;

  &:hover {
    background-color: var(--color-primary-2);
  }
`;

export default HotelCard;
