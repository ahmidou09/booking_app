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
  width: 250px;
  margin: 0 10px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  border: 1px solid #ddd;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const Location = styled.p`
  font-size: 14px;
  color: grey;
  margin: 5px 0;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
`;

const RatingScore = styled.span`
  background-color: #0071c2;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: 8px;
`;

const HeartButton = styled.button`
  background: white;
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
