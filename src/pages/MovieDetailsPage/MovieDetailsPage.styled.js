import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const SectionTitle = styled.div`
  justify-content: center;
  font-size: 30px;
  color: rgba(0, 255, 255, 0.7);
  margin-bottom: 40px;
`;

export const AddInfo = styled.div`
  padding: 20px;
  box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
    1px 2px 4px 0px rgba(0, 255, 255, 0.7),
    2px 4px 8px 0px rgba(0, 255, 255, 0.7),
    2px 4px 16px 0px rgba(0, 255, 255, 0.7);
`;

export const StyledLink = styled(Link)`
  margin-top: 40px;
  color: rgba(0, 255, 255, 0.7);
`;
