import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  removeFromNextTrip,
  addToNextTrip,
} from "../../redux/slices/nextTripSlice";

const Card = ({ hotel }) => {
  const dispatch = useDispatch();
  const { nextTripItems } = useSelector((state) => state.nextTrip);

  const handleAddToNextTrip = (hotel) => {
    if (nextTripItems.find((x) => x._id === hotel._id)) {
      dispatch(removeFromNextTrip(hotel._id));
      toast.success("Removed from next trip");
    } else {
      dispatch(addToNextTrip(hotel));
      toast.success("Added to next trip");
    }
  };

  const isHotelInNextTrip = (hotelId) => {
    return nextTripItems.some((item) => item._id === hotelId);
  };
  return (
    <CardContainer>
      <Link to={`/hotels/${hotel._id}`}>
        <Image src={hotel?.images[0]} alt={hotel.name} />
        <Info>
          <Title>{hotel.name}</Title>
          <Location>
            {hotel.location.city}, {hotel.location.state}
          </Location>
          <Rating>
            <RatingScore>{hotel.rating}</RatingScore>
          </Rating>
        </Info>
      </Link>
      <HeartButton onClick={() => handleAddToNextTrip(hotel)}>
        {isHotelInNextTrip(hotel._id) ? (
          <FaHeart size={24} style={{ color: "var(--color-primary-1)" }} />
        ) : (
          <FaRegHeart size={24} />
        )}
      </HeartButton>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  padding-bottom: 1rem;
  width: 25rem;
  margin: 0 1rem;
  background-color: var(--color-white);
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  border: 1px solid var(--color-grey-2);
`;

const Image = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  margin: 0;
`;

const Location = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-4);
  margin: 0.5rem 0;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
`;

const RatingScore = styled.span`
  background-color: var(--color-primary-3);
  color: var(--color-white);
  padding: 0.2rem 0.6rem;
  border-radius: 0.4rem;
  margin-right: 0.8rem;
`;

const HeartButton = styled.button`
  background: var(--color-white);
  border-radius: 50%;
  padding: 0.5rem;
  border: none;
  color: var(--color-grey-3);
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  z-index: 999;

  &:hover {
    color: var(--color-primary-1);
  }
`;

export default Card;
