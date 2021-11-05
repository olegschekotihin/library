import styled from 'styled-components';
import { COLORS } from '../../../../../const';

export const InputFilter = styled.input`
  border: 1px solid ${COLORS.LIGHT_GRAY};
  border-radius: 5px;
  padding: 0.5em;
  margin: 0.3125em 0;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.875em;
  padding-bottom: 0.625em;
  font-size: 0.75em;
`;
