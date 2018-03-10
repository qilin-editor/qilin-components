/* @flow */

import styled from "styled-components";

const Container = styled.section`
  position: relative;

  display: flex;
  flex-grow: 1;
  flex-direction: ${props => (props.vertical ? "row" : "column")};

  overflow-y: auto;
  overflow-x: hidden;

  /* react-split-pane */
  .Resizer {
    background-color: ${props => props.theme.border};
    background-clip: padding-box;
    z-index: 1;

    &.vertical {
      margin: 0 -5px;

      width: 11px;
      height: auto;

      border-width: 0 5px;
      border-style: solid;
      border-color: transparent;

      cursor: col-resize;
    }

    &.horizontal {
      margin: -5px 0;

      height: 11px;
      width: auto;

      border-width: 5px 0;
      border-style: solid;
      border-color: transparent;

      cursor: row-resize;
    }
  }

  /* react-split-pane */
  .Pane {
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

export default Container;
