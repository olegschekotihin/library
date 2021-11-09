import styled from 'styled-components';
import { COLORS } from '../../../const';

export const InputStyled = styled.input`
  padding: 0.9375em 1.25em;
  margin-bottom: 0.625em;
  border: 0.0625em solid ${COLORS.GRAY};
  border-radius: 0.3125em;
  font-size: 1em;
`;

export const InputTypeSubmit = styled.input.attrs({ type: 'submit' })`
  min-width: 7.5em;
  padding: 0.9375em 1.875em;
  border-radius: 0.625em;
  border: none;
  font-size: 1em;
  font-weight: bold;
  background-color: ${COLORS.VIOLET};
  color: ${COLORS.WHITE};
  cursor: pointer;
`;
