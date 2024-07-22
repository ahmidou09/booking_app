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
  gap: 16px;
`;

const HotelCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  width: 300px;

  img {
    max-width: 100%;
    border-radius: 4px;
  }
`;

const Location = styled.div`
  font-size: 14px;
  color: #555;
`;

const NoResults = styled.div`
  font-size: 18px;
  color: #666;
  margin: 20px;
`;

export default SearchResults;
