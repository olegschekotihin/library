import styled from 'styled-components';
import { COLORS } from '../../../const';

export const TextareaStyled = styled.textarea`
  height: 10em;
  width: 100%;
  padding: 0.9375em 1.25em;
  font-size: 1em;
  border: 0.0625em solid ${COLORS.GRAY};
  border-radius: 0.625em;
  resize: none;
`;
