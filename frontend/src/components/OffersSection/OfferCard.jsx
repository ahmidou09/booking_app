import React from "react";
import styled from "styled-components";

const OfferCard = ({ offer }) => {
  return (
    <CardContainer>
      <Image src={offer.imageUrl} alt={offer.title} />
      <TextOverlay>
        <Title>{offer.title}</Title>
        <Description>{offer.description}</Description>
        <Button>{offer.buttonText}</Button>
      </TextOverlay>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  color: var(--color-white);
`;

const Title = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: var(--color-primary-3);
  color: var(--color-white);
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 1.6rem;
`;

export default OfferCard;
