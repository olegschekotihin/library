import styled from 'styled-components';
import { COLORS } from '../../../const';

export const SelectStyled = styled.select`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  max-height: 3.125em;
  margin-right: 0.625em;
  margin-bottom: 0.625em;
  padding: 0 0.625em 0 1em;
  background: transparent;
  border: 0.0625em solid ${COLORS.GRAY};
  border-radius: 0.3125em;
  font-size: 1em;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  
`;
