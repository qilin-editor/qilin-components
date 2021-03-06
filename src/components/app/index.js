/* @flow */

import * as React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// Syntax information for styling editor highlights. This is based on `atom`
// light-syntax. Should be enough in most cases.
//
// @see https://github.com/atom/one-light-syntax/blob/master/styles/syntax-variables.less
type Syntax = {
  import: string,
  snippet: string,
  comment: string,
  variable: string,
  constant: string,
  property: string,
  function: string,
  attribute: string,
  value: string,
  class: string,
  method: string,
  keyword: string,
  tag: string
};

// Theme information for styling editor components. This is copied verbatim from
// `syntect` and that in turn is derived from TextMate's `.tmTheme` format. Many
// fields may not be used.
//
// @see https://github.com/trishume/syntect/blob/master/src/highlighting/theme.rs
type Theme = {
  // Text color for the view
  foreground: string,
  // Backgound color of the view
  background: string,
  // Border color of the view
  border: string,
  // Color of the caret
  caret: string,
  // Color of the line the caret is in
  lineHighlight: string,
  // Background color of regions matching the current search
  findHighlight: string,
  // Text color of regions matching the current search
  findHighlightForeground: string,
  // Background color of the gutter
  gutter: string,
  // The color of the line numbers in the gutter
  gutterForeground: string,
  // The background color of selections
  selection: string,
  // Text color of the selection regions
  selectionForeground: string,
  // Background color of inactive selections (inactive view)
  inactiveSelection: string,
  // Text color of inactive selections (inactive view)
  inactiveSelectionForeground: string,
  // The color of the shadow used when a text area can be horizontally scrolled
  shadow: string,
  // Syntax colors
  syntax: Syntax
};

type Props = {
  theme: Theme,
  children: React.Node
};

const QilinReset = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 14px;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;

    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

const Content = styled.main`
  position: absolute;

  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: ${props => props.theme.background};
  color: ${props => props.theme.foreground};
`;

const App = ({ theme, children }: Props) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <QilinReset />
      <Content>{children}</Content>
    </React.Fragment>
  </ThemeProvider>
);

export default App;
