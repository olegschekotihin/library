import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../../const';

export const PageContainer = styled.section`
  max-width: 100%;
  width: 90%;
  padding: 1.625em 0;
  margin: 0 auto;
  flex: 1 0 auto;
  overflow: auto;
`;

export const PageContainerSmall = styled.section`
  max-width: 20em;
  margin: 0 auto;
  text-align: center;
`;

export const PageTitle = styled.h1`
  text-align: center;
  font-size: 1.75em;
`;

export const FormStyled = styled.form`
  padding: 1.25em;
  border-radius: 0.625em;
`;

export const InnerLink = styled(Link)`
  color: ${COLORS.VIOLET};
  text-decoration: none;
  transition: 300ms;
  &:hover {
    color: ${COLORS.LIGHT_VIOLET};
    transition: 300ms;
  }
`;

export const FormFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  Input {
   margin-right: 0.625em; 
  }
`;

export const FormFlexRow = styled.div`
  display: flex;
`;

export const WrongNotice = styled.p`
  color: ${COLORS.RED};
`;
