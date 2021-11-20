import styled from 'styled-components';
import { COLORS } from '../../../const';

interface ButtonStyledValues {
  modify?: boolean
}

const ButtonStyled = styled.button<ButtonStyledValues>`
  background: ${(props) => (props.modify ? COLORS.WHITE : COLORS.VIOLET)};
  color: ${(props) => (props.modify ? COLORS.VIOLET : COLORS.WHITE)};
  min-width: ${(props) => (props.modify ? 'auto' : '7.5em')};
  padding: ${(props) => (props.modify ? '0.625em' : '0.9375em 1.875em')};
  margin-right: ${(props) => (props.modify ? '0.3125em' : '0')};
  border-radius: 0.625em;
  border: none;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

export default ButtonStyled;
