/* @flow */

import styled from "styled-components";

const Input = styled.input.attrs({
  type: "color"
})`
  &::-webkit-color-swatch,
  &::-webkit-color-swatch-wrapper {
    border-width: 0;
    border-radius: 50%;

    padding: 0;
    margin: 0;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  width: 30px;
  height: 30px;

  outline: none;
  cursor: pointer;

  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  border-color: ${props => props.theme.border};

  background-color: ${props => props.theme.background};
  color: ${props => props.theme.foreground};

  padding: 0;
  margin: 9px;

  -webkit-app-region: no-drag;
  appearance: none;
`;

export default Input;
