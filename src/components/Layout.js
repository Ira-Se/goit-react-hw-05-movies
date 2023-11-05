import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
