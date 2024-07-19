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
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #0071c2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

export default OfferCard;
