import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const SearchResults = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  console.log("Received Results:", searchResults);

  return (
    <ResultsContainer>
      {searchResults.length > 0 ? (
        searchResults.map((hotel) => (
          <HotelCard key={hotel._id}>
            <img src={hotel.images[0]} alt={hotel.name} />
            <div>
              <h2>{hotel.name}</h2>
              <p>{hotel.description}</p>
              <Location>
                <p>{hotel.location.address}</p>
                <p>
                  {hotel.location.city}, {hotel.location.state}
                </p>
                <p>
                  {hotel.location.country}, {hotel.location.zipCode}
                </p>
              </Location>
              <p>{hotel.rating}</p>
            </div>
          </HotelCard>
        ))
      ) : (
        <NoResults>No results found</NoResults>
      )}
    </ResultsContainer>
  );
};

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`;

const HotelCard = styled.div`
  border: 1px solid var(--color-grey-2);
  border-radius: 0.4rem;
  padding: 1.6rem;
  width: 30rem;

  img {
    max-width: 100%;
    border-radius: 0.4rem;
  }
`;

const Location = styled.div`
  font-size: 1.4rem;
  color: var(--color-grey-4);
`;

const NoResults = styled.div`
  font-size: 1.8rem;
  color: var(--color-grey-4);
  margin: 2rem;
`;

export default SearchResults;
