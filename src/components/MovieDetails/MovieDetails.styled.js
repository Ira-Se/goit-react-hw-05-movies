import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: white;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
    1px 2px 4px 0px rgba(0, 255, 255, 0.7),
    2px 4px 8px 0px rgba(0, 255, 255, 0.7),
    2px 4px 16px 0px rgba(0, 255, 255, 0.7);
`;

export const Title = styled.div`
  font-size: 30px;
  color: rgba(0, 255, 255, 0.7);
`;

export const TextItem = styled.span`
  font-size: 20px;
  color: rgba(0, 255, 255, 0.7);
  margin-right: 10px;
`;
