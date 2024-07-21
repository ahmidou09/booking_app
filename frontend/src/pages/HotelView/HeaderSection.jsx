import React from "react";
import styled from "styled-components";

const HeaderSection = ({ hotel }) => {
  return (
    <HeaderContainer>
      <HeaderInfo>
        <Title>{hotel.name}</Title>
        <Address>
          {hotel.location.address}, {hotel.location.city},{" "}
          {hotel.location.state}, {hotel.location.country} -{" "}
          {hotel.location.zipCode}
        </Address>
      </HeaderInfo>
      <ImagesContainer>
        {hotel.images.map((image, index) => (
          <Image key={index} src={image} alt={`Hotel Image ${index + 1}`} />
        ))}
      </ImagesContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const HeaderInfo = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Address = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Image = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

export default HeaderSection;
