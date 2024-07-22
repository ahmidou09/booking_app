import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLogoutMutation } from "../../redux/slices/usersApiSlice";
import { logout } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutUser] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      throw new Error(err);
    }
  };
  return (
    <Nav>
      <Container>
        <Logo>
          <Link to="/">Booking.com</Link>
        </Logo>

        {userInfo ? (
          <UserInfo>
            <NameOfUser>{userInfo.name}</NameOfUser>
            <Button onClick={logoutHandler}>Logout</Button>
          </UserInfo>
        ) : (
          <NavButtons>
            <Button>
              <Link to="/signup">Register</Link>
            </Button>
            <Button>
              <Link to="/login">Sign in</Link>
            </Button>
          </NavButtons>
        )}
      </Container>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: var(--color-primary-3);
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
`;

const Logo = styled.div`
  color: var(--color-white);
  font-size: 2.4rem;
  font-weight: bold;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const Button = styled.button`
  color: var(--color-primary-3);
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NameOfUser = styled.span`
  display: block;
  font-size: 1.4rem;
  color: var(--color-white);
`;

export default Navbar;
