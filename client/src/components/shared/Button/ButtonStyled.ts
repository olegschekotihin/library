import styled from 'styled-components';
import { COLORS } from '../../../const';

const ButtonStyled = styled.button`
  min-width: 7.5em;
  padding: 0.9375em 1.875em;
  border-radius: 0.625em;
  border: none;
  font-size: 1em;
  font-weight: bold;
  background-color: ${COLORS.VIOLET};
  color: ${COLORS.WHITE};
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

export default ButtonStyled;
