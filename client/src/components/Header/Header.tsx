import React from 'react';
import { Navigation } from '../shared/Navigation';
import HeaderStyled from './HeaderStyled';
import { PageContainer } from '../shared/StyledComponents';

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
