import React from "react";
import Carousel from "./Carousel";
import styled from "styled-components";
import { useGetHotelsQuery } from "../../redux/slices/hotelApiSlice";
import Loading from "../../ui/Loading";

const InterestedSection = () => {
  const { data: hotels, isLoading, error } = useGetHotelsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }
  return (
    <Container>
      <Title>Still interested in these properties?</Title>
      <Carousel hotels={hotels} />
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 3rem;
`;

export default InterestedSection;
