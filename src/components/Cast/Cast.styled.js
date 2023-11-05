import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 40px;
  list-style: none;
`;

export const CastItem = styled.li`
  width: 150px;
  height: 350px;
  object-fit: cover;
  box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
    1px 2px 4px 0px rgba(0, 255, 255, 0.7),
    2px 4px 8px 0px rgba(0, 255, 255, 0.7),
    2px 4px 16px 0px rgba(0, 255, 255, 0.7);
`;

export const CastText = styled.p`
  display: flex;
  justify-content: center;
  align-items: bottom;
  flex-wrap: wrap;
  color: rgba(0, 255, 255, 0.7);
  font-size: 14px;
  text-decoration: none;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 220px;
  object-fit: cover;
`;

export const Message = styled.p`
  font-size: 24px;
`;
