import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Logo>Booking.com</Logo>
        <NavButtons>
          <Button>Register</Button>
          <Button>Sign in</Button>
        </NavButtons>
      </Container>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #003580;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  color: #003580;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default Navbar;
