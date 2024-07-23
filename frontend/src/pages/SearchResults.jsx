import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import HotelCard from "./SearchResults/HotelCard";
import Filters from "./SearchResults/Filters";
import SearchBar from "../components/Header/SearchBar";

const SearchResults = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <>
      <Hero>
        <SearchBar />
      </Hero>
      <Container>
        <Filters />
        <ResultsContainer>
          {searchResults.length > 0 ? (
            searchResults.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))
          ) : (
            <NoResults>No results found</NoResults>
          )}
        </ResultsContainer>
      </Container>
    </>
  );
};

const Hero = styled.div`
  position: relative;
  height: 5rem;
  background-color: var(--color-primary-3);
  margin-bottom: 8rem;
`;

const Container = styled.div`
  display: flex;
  max-width: 120rem;
  margin: 4rem auto;
  gap: 4rem;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.6rem;
`;

const NoResults = styled.div`
  font-size: 1.8rem;
  color: var(--color-grey-4);
  margin: 2rem;
`;

export default SearchResults;
