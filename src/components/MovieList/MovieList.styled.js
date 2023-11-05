import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  list-style: none;
`;

export const MovieItem = styled.li`
  width: 300px;
  height: 500px;
  object-fit: cover;
  box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
    1px 2px 4px 0px rgba(0, 255, 255, 0.7),
    2px 4px 8px 0px rgba(0, 255, 255, 0.7),
    2px 4px 16px 0px rgba(0, 255, 255, 0.7);
`;

export const MovieTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: bottom;
  flex-wrap: wrap;
  color: rgba(0, 255, 255, 0.7);
  font-size: 20px;
  text-decoration: none;
`;

export const Poster = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
