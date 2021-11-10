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

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
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
`;

export const FormFlexRow = styled.div`
  display: flex;
  &>div:nth-child(2n) {
    margin-left: 0.625em;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.625em;
`;

export const WrongNotice = styled.p`
  color: ${COLORS.RED};
`;

export const LanguageSwitcherButton = styled.button`
    background: ${COLORS.WHITE};
    border: none;
    border-radius: 0.375em;
    font-size: 0.875em;
    padding: 0.625em;
    margin-right: 0.3125em;
    cursor: pointer;
    font-weight: bold;
    color: ${COLORS.VIOLET};
`;
