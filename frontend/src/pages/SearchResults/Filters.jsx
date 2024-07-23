import React from "react";
import styled from "styled-components";

const Filters = () => {
  return (
    <FiltersContainer>
      <Filter>
        <h3>Filter by Price</h3>
      </Filter>
      <Filter>
        <h3>Facilities</h3>
      </Filter>
      <Filter>
        <h3>Rooms</h3>
      </Filter>
      <Filter>
        <h3>Rating</h3>
      </Filter>
      <Filter>
        <h3>Property Type</h3>
      </Filter>
    </FiltersContainer>
  );
};

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  min-width: 30rem;
`;

const Filter = styled.div`
  border: 1px solid var(--color-grey-1);
  padding: 10px;
  border-radius: 10px;
`;

export default Filters;
