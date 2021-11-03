import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../../../const';

const NavigationLinkStyled = styled(Link)`
  margin-right: 0.9375em;
  padding: 0.625em;
  color: ${COLORS.WHITE};
  font-size: 1.125em;
  font-width: 500;
  text-decoration: none;
`;

export default NavigationLinkStyled;
