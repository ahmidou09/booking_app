import React, { useState } from "react";
import styled from "styled-components";
import { useSearchHotelsQuery } from "../../redux/slices/hotelApiSlice";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const { data: searchResults, refetch } = useSearchHotelsQuery(city);

  console.log(searchResults);

  const handleSearch = async () => {
    if (city) {
      await refetch();
      navigate("/search-results", { state: { searchResults } });
    }
  };

  return (
    <SearchContainer>
      <Input
        placeholder="Where are you going?"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <Input placeholder="Check-in date" />
      <Input placeholder="Check-out date" />
      <Input placeholder="2 adults · 0 children · 1 room" />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  background-color: var(--color-accent-4);
  padding: 0.3rem;
  border-radius: 0.4rem;
  gap: 0.3rem;
  border: 1px solid var(--color-accent-4);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Input = styled.input`
  flex: 1;
  padding: 1.5rem;
  border: 1px solid var(--color-grey-2);
  border-radius: 0.4rem;
  color: var(--color-black);

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background-color: var(--color-primary-3);
  color: var(--color-white);
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default SearchBar;
