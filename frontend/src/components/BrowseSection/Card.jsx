import React from "react";
import styled from "styled-components";

const Card = ({ property }) => {
  return (
    <CardContainer>
      <Image src={property.imageUrl} alt={property.title} />
      <Title>{property.title}</Title>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  color: #333;
`;

export default Card;
