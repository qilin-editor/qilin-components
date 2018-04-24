/* @flow */

import styled from "styled-components";

const Checkbox = styled.input.attrs({
  type: "checkbox"
})`
  position: relative;
  display: inline-flex;
  vertical-align: middle;

  width: 17px;
  height: 17px;

  outline: none;
  cursor: pointer;

  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${props => props.theme.border};

  background-color: ${props => props.theme.background};
  color: ${props => props.theme.foreground};

  padding: 0;
  margin: 6px 20px 6px 12px;

  transition: background-color 0.16s cubic-bezier(0.5, 0.15, 0.2, 1),
    border-color 0.16s cubic-bezier(0.5, 0.15, 0.2, 1);

  &:checked {
    border-color: ${props => props.theme.caret};
    background-color: ${props => props.theme.caret};
  }

  &::before,
  &::after {
    position: absolute;
    top: 12px;
    left: 6px;

    height: 2px;

    border-width: 0;
    border-radius: 1px;
    background-color: ${props => props.theme.background};

    transform-origin: 0 0;
    transition: transform 0.1s cubic-bezier(0.5, 0.15, 0.2, 1),
      opacity 0.1s cubic-bezier(0.5, 0.15, 0.2, 1);

    content: "";
    opacity: 0;
  }

  &::before {
    transform: translate3d(0, 0, 0) rotate(225deg) scale(0);
    width: 6px;
  }

  &:checked::before {
    transform: translate3d(0, 0, 0) rotate(225deg) scale(1);
    opacity: 1;
  }

  &::after {
    transform: translate3d(0, 0, 0) rotate(-45deg) scale(0);
    width: 11px;
    margin: -1px;
  }

  &:checked::after {
    transform: translate3d(0, 0, 0) rotate(-45deg) scale(1);
    opacity: 1;
  }

  -webkit-app-region: no-drag;
  appearance: none;
`;

export default Checkbox;
