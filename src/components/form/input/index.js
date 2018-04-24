/* @flow */

import styled from "styled-components";
import is from "styled-is";

const Input = styled.input`
  &::placeholder {
    opacity: 0.75;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;

  outline: none;
  cursor: pointer;

  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${props => props.theme.border};

  background-color: ${props => props.theme.background};
  color: ${props => props.theme.foreground};

  line-height: 1.5;
  font-size: 0.85rem;
  font-weight: 400;

  padding: 0.5rem;
  margin: 0.5rem 0;

  &:focus {
    border-color: ${props => props.theme.caret};
    box-shadow: 0 0 0 1px ${props => props.theme.caret};
  }

  ${is("large")`
    font-size: 1rem;
    padding: 0.85rem;
  `};

  ${is("small")`
    font-size: .65rem;
    padding: 0.35rem;
  `};

  ${is("inline")`
    display: inline-flex;
    width: auto;
  `};

  -webkit-app-region: no-drag;
  appearance: textfield;
`;

export default Input;
