import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";

const StyledAppLayout = styled.div`
  width: 100%;

  main {
    padding: 4rem 0;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
