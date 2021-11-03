import styled from 'styled-components';
import { COLORS } from '../../../../const';

const ButtonStyled = styled.button`
  min-width: 120px;
  padding: 0.9375em 1.875em;
  border-radius: 10px;
  border: none;
  font-size: 1em;
  font-weight: bold;
  background-color: ${COLORS.VIOLET};
  color: ${COLORS.WHITE};
  cursor: pointer;
`;

export default ButtonStyled;
