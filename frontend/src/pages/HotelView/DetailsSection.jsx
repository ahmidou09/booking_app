import React from "react";
import styled from "styled-components";

const DetailsSection = ({ description, amenities }) => {
  return (
    <DetailsContainer>
      <Description>{description}</Description>
      <Amenities>
        {amenities.map((amenity, index) => (
          <Amenity key={index}>{amenity}</Amenity>
        ))}
      </Amenities>
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-3);
  margin-bottom: 2rem;
`;

const Amenities = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Amenity = styled.span`
  background: var(--color-grey-2);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
`;

export default DetailsSection;
