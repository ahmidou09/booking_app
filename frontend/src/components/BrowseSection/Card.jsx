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
  padding: 1rem;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  border-radius: 0.8rem;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  margin-top: 1rem;
  color: var(--color-grey-3);
`;

export default Card;
