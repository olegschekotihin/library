import React from 'react';
import { Navigation } from '../shared/Navigation';
import FooterStyled from './FooterStyled';
import { PageContainer } from '../shared/StyledComponents';

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
