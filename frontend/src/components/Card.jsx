import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

const Card = ({ property }) => {
  return (
    <CardContainer>
      <Image src={property.image} alt={property.title} />
      <Info>
        <Title>{property.title}</Title>
        <Location>{property.location}</Location>
        <Rating>
          <RatingScore>{property.rating}</RatingScore>
          <Reviews>{property.reviews}</Reviews>
        </Rating>
      </Info>
      <HeartIcon>
        <FaHeart />
      </HeartIcon>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  padding-bottom: 1rem;
  width: 250px;
  margin: 0 10px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  border: 1px solid #ddd;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const Location = styled.p`
  font-size: 14px;
  color: grey;
  margin: 5px 0;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
`;

const RatingScore = styled.span`
  background-color: #0071c2;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: 8px;
`;

const Reviews = styled.span`
  font-size: 14px;
  color: grey;
`;

const HeartIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ff385c;
  cursor: pointer;
`;

export default Card;
