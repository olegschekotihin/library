import React from 'react';
import { Navigation } from '../shared/Navigation';
import HeaderStyled from './HeaderStyled';
import { HeaderContainer, PageContainer } from '../shared/StyledComponents';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

function Header() {
  return (
    <HeaderStyled>
      <PageContainer>
        <HeaderContainer>
          <Navigation />
          <LanguageSwitcher />
        </HeaderContainer>
      </PageContainer>
    </HeaderStyled>
  );
}

export default Header;
