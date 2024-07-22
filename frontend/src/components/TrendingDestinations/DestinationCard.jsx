import React from "react";
import styled from "styled-components";

const DestinationCard = ({ destination }) => {
  return (
    <Card>
      <Image src={destination.imageUrl} alt={destination.name} />
      <Overlay>
        <DestinationName>{destination.name}</DestinationName>
        <Flag>{destination.flag}</Flag>
      </Overlay>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0.8rem;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: var(--color-white);
  text-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
`;

const DestinationName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Flag = styled.span`
  margin-top: 0.4rem;
  font-size: 1rem;
`;

export default DestinationCard;
