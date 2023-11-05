import { Suspense } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Loader from './Loader/Loader';

export const Container = styled.div`
  background-color: black;
  padding: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px;
  font-size: 24px;
  text-decoration: none;
  color: white;
  &.active {
    color: rgba(0, 255, 255, 0.7);
    box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
      1px 2px 4px 0px rgba(0, 255, 255, 0.7),
      2px 4px 8px 0px rgba(0, 255, 255, 0.7),
      2px 4px 16px 0px rgba(0, 255, 255, 0.7);
  }
`;

export const Navigate = styled.nav`
  display: flex;
  gap: 20px;
`;

export const TextInfo = styled.p`
  font-size: 30px;
  color: red;
`;

export const StyledLink = styled(Link)`
  margin-top: 40px;
  color: rgba(0, 255, 255, 0.7);
  font-size: 30px;
  text-decoration: none;
  box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
    1px 2px 4px 0px rgba(0, 255, 255, 0.7),
    2px 4px 8px 0px rgba(0, 255, 255, 0.7),
    2px 4px 16px 0px rgba(0, 255, 255, 0.7);
`;
export const Layout = () => {
  return (
    <Container>
      <header>
        <Navigate>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Navigate>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
