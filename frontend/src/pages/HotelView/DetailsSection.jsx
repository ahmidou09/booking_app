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
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 20px;
`;

const Amenities = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Amenity = styled.span`
  background: #e0e0e0;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.2rem;
`;

export default DetailsSection;
