import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../../const';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', serif;
  }
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const PageContainer = styled.section`
  max-width: 100%;
  width: 90%;
  margin: 0 auto;
  flex: 1 0 auto;
  overflow: auto;
`;

export const PageContainerSmall = styled.section`
  max-width: 320px;
  margin: 0 auto;
  text-align: center;
`;

export const PageTitle = styled.h1`
  text-align: center;
  font-size: 1.75em;
`;

export const FormStyled = styled.form`
  padding: 1.25em;
  border: 1px solid ${COLORS.GRAY};
  border-radius: 10px;
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
