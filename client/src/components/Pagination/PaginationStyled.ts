import styled from 'styled-components';
import { COLORS } from '../../const';

export const PaginateList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const PaginateLink = styled.a`
  display: block;
  color: ${COLORS.BLACK};
  padding: 0.3125em 0.625em;
  border: 0.0625em solid ${COLORS.GRAY};
  margin-right: 0.3125em;
  text-decoration: none;
`;
