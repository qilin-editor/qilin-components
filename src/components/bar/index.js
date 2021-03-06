/* @flow */

import styled from "styled-components";
import is from "styled-is";

const Bar = styled.header`
  display: grid;
  grid-template-areas: "a b c";
  grid-template-columns: 1fr auto 1fr;

  margin: 0;
  padding: 0 0.5rem;

  min-height: 2rem;
  width: 100%;

  border-width: 0;
  border-style: solid;
  border-color: ${props => props.theme.border};

  background-color: ${props => props.theme.background};
  color: ${props => props.theme.foreground};

  ${is("header")`
    border-bottom-width: 1px;
  `};

  ${is("footer")`
    border-top-width: 1px;
  `};

  -webkit-app-region: drag;

  & > * {
    display: flex;

    align-items: center;
    justify-self: center;

    &:last-child {
      justify-self: end;
      grid-column-end: c;
    }

    &:first-child {
      justify-self: start;
      grid-column-end: a;
    }
  }
`;

export default Bar;
