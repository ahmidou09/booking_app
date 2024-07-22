import React, { useState } from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const HeaderSection = ({ hotel }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleImageContainerClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

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
      <CardGrid onClick={handleImageContainerClick}>
        {hotel.images.map((image, index) => (
          <Image key={index} src={image} alt={`Hotel Image ${index + 1}`} />
        ))}
      </CardGrid>

      {isPopupVisible && (
        <PopupOverlay onClick={handleClosePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleClosePopup}>&times;</CloseButton>
            <Slide indicators slidesToScroll={1} slidesToShow={3}>
              {hotel.images.map((image, index) => (
                <SlideImage
                  key={index}
                  src={image}
                  alt={`Hotel Image ${index + 1}`}
                />
              ))}
            </Slide>
          </PopupContent>
        </PopupOverlay>
      )}
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 25rem);
  gap: 10px;
  overflow: hidden;

  & > :nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  & > :nth-child(2) {
    grid-column: 3 / -1;
    grid-row: 1 / 3;
  }

  & > :nth-child(3) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  & > :nth-child(4) {
    grid-column: 1 / 1;
    grid-row: span 1;
  }

  & > :nth-child(5) {
    grid-column: 2 / 3;
    grid-row: span 1;
  }

  & > :nth-child(6) {
    grid-column: 3 / 4;
    grid-row: span 1;
  }

  & > :nth-child(7) {
    grid-column: 4 / 5;
    grid-row: span 1;
  }

  & > :nth-child(8) {
    grid-column: 5 / 6;
    grid-row: span 1;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 50rem;
  object-fit: cover;
  border-radius: 10px;
  padding: 5px;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  width: 95%;
  border-radius: 8px;
  position: relative;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default HeaderSection;
