import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <SearchContainer>
      <Input placeholder="Where are you going?" />
      <Input placeholder="Check-in date" />
      <Input placeholder="Check-out date" />
      <Input placeholder="2 adults · 0 children · 1 room" />
      <SearchButton>Search</SearchButton>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  background-color: #ffb700;
  padding: 3px;
  border-radius: 4px;
  gap: 3px;
  border: 1px solid #ffb700;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Input = styled.input`
  flex: 1;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background-color: #0071c2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default SearchBar;
