import styled from 'styled-components';
import { COLORS } from '../../../../const';

const TableThStyled = styled.th`
  padding: 0.625em;
  color: ${COLORS.BLACK_GRAY};
  border-bottom: 0.0625em solid ${COLORS.GRAY};
  text-align: left;
  vertical-align: bottom;
`;

export default TableThStyled;
