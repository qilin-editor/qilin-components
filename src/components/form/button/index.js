/* @flow */

import styled from "styled-components";
import is from "styled-is";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  cursor: pointer;

  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${props => props.theme.border};

  background-color: ${props => props.theme.background};
  color: ${props => props.theme.foreground};

  font-size: 0.85rem;
  font-weight: 500;

  padding: 0.25rem 0.75rem;
  margin: 0.5rem;

  ${is("large")`
    font-size: 1rem;
    padding: .25rem 1rem;
  `};

  ${is("small")`
    font-size: .65rem;
    padding: 0.25rem .65rem;
  `};

  ${is("inline")`
    display: inline-flex;
  `};

  appearance: none;
  -webkit-app-region: no-drag;
`;

export default Button;
