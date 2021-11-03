import React from 'react';
import { Navigation } from '../Navigation';
import FooterStyled from './FooterStyled';
import { PageContainer } from '../GlobalStyle';

function Footer() {
  return (
    <FooterStyled>
      <PageContainer>
        <Navigation />
      </PageContainer>
    </FooterStyled>
  );
}

export default Footer;
