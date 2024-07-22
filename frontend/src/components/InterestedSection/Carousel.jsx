import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Carousel = ({ hotels }) => {
  return (
    <CarouselContainer>
      <Slide
        slidesToScroll={1}
        slidesToShow={4}
        indicators={false}
        {...properties}
      >
        {hotels.map((item, index) => (
          <Card key={index} hotel={item} />
        ))}
      </Slide>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div``;

const buttonStyle = {
  with: "4rem",
  background: "transparent",
  border: "none",
  borderRadius: "50%",
  outline: "none",
  boxShadow: "1px 5px 8px 4px rgba(0, 0, 0, 0.1)",
  transition: "all 0.1s ease-in-out",
};

const svgStyle = {
  color: "grey",
  borderRadius: "50%",
  fontSize: "4rem",
  transition: "all 0.3s ease-in-out",
  padding: "0.5rem",
  backgroundColor: "white",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <MdOutlineArrowBackIos style={{ ...svgStyle }} />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <MdOutlineArrowForwardIos style={{ ...svgStyle }} />
    </button>
  ),
};

export default Carousel;
