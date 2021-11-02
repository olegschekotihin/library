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
  overflow: auto;
`;

export const PageContainerSmall = styled.section`
  max-width: 320px;
  margin: 0 auto;
  text-align: center;
`;

export const PageTitle = styled.h1`
  text-align: center;
  font-size: 28px;
`;

export const FormStyled = styled.form`
  padding: 20px;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
`;