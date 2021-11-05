import React from 'react';
import { Navigation } from '../Navigation';
import HeaderStyled from './HeaderStyled';
import { PageContainer } from '../GlobalStyle';

function Header() {
  return (
    <HeaderStyled>
      <PageContainer>
        <Navigation />
      </PageContainer>
    </HeaderStyled>
  );
}

export default Header;
