import styled, { createGlobalStyle } from 'styled-components';

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
`;

export const PageTitle = styled.h3`
  text-align: center;
  font-size: 24px;
`;
