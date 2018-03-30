/* @flow */

import React from "react";
import styled from "styled-components";
import { Controlled as CodeMirror } from "react-codemirror2";

// CodeMirror plugins
import "codemirror/mode/gfm/gfm";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/scroll/scrollpastend";
import "codemirror/addon/scroll/simplescrollbars";
import "codemirror/addon/selection/active-line";
import "codemirror/keymap/sublime";

type Props = {
  autoCursor?: boolean,
  autoScroll?: boolean,
  autoFocus?: boolean,

  value: string,
  options?: Object,
  className?: string,

  editorDidConfigure?: (editor: Object) => any,
  editorDidMount?: (editor: Object, next: Function) => any,
  editorWillMount?: () => any,
  editorWillUnmount?: () => any,
  onBeforeChange: (editor: Object, data: Object, value: string) => any,
  onChange: (editor: Object, data: Object, value: string) => any
};

const defaultOptions = {
  mode: "gfm",
  autofocus: true,
  lineNumbers: false,
  lineWrapping: true,
  styleActiveLine: true,
  scrollbarStyle: "overlay",
  scrollPastEnd: false,
  indentUnit: 4,
  autoCloseBrackets: true,
  keyMap: "sublime"
};

const RawEditor = (props: Props) => {
  const options = Object.assign(defaultOptions, props.options);

  return <CodeMirror {...props} options={options} />;
};

/* stylelint-disable */
const Editor = styled(RawEditor)`
  &.react-codemirror2 {
    height: 100%;
  }

  .CodeMirror {
    height: 100%;
    width: 100%;

    font-feature-settings: "calt" 1;
    font-variant-ligatures: contextual;
    font-family: "Fira Code", Monaco, monospace;
    font-weight: 400;

    background: ${props => props.theme.background};
    color: ${props => props.theme.foreground};

    direction: ltr;
  }

  /* Vertical padding around content */
  .CodeMirror-lines {
    padding: 0.5rem 0;
  }

  /* Horizontal padding of content */
  .CodeMirror pre {
    padding: 0 0.5rem;
  }

  /* The little square between H and V scrollbars? */
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    background-color: red;
  }

  /* Gutters */
  .CodeMirror-gutters {
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: ${props => props.theme.border};

    background-color: ${props => props.theme.gutter};
    white-space: nowrap;
  }

  .CodeMirror-linenumbers {
  }

  .CodeMirror-linenumber {
    padding: 0 0.25rem 0 0.25rem;
    margin: 0;

    min-width: 1.5rem;
    text-align: right;

    color: ${props => props.theme.gutterForeground};
    white-space: nowrap;
  }

  .CodeMirror-guttermarker {
    color: ${props => props.theme.background};
  }

  .CodeMirror-guttermarker-subtle {
    color: ${props => props.theme.background};
  }

  /* Cursor */
  .CodeMirror-cursor {
    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: ${props => props.theme.caret};

    width: 0;
  }

  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: ${props => props.theme.caret};
  }

  /* Can style cursor different in overwrite (non-insert) mode */
  .CodeMirror-overwrite .CodeMirror-cursor {
  }

  .CodeMirror-ruler {
    position: absolute;
    top: 0;
    bottom: 0;

    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: ${props => props.theme.border};
  }

  .CodeMirror-selected {
    background-color: ${props => props.theme.selection};
  }

  .CodeMirror-focused .CodeMirror-selected {
    background-color: ${props => props.theme.selection};
    color: ${props => props.theme.selectionForeground};
  }

  .CodeMirror-line::selection,
  .CodeMirror-line > span::selection,
  .CodeMirror-line > span > span::selection {
    background-color: ${props => props.theme.inactiveSelection};
    color: ${props => props.theme.inactiveSelectionForeground};
  }

  .CodeMirror-crosshair {
    cursor: crosshair;
  }

  .CodeMirror-activeline-background {
    background-color: ${props => props.theme.lineHighlight};
  }

  .cm-searching {
    background-color: ${props => props.theme.findHighlight};
  }

  .cm-header,
  .cm-strong {
    font-weight: bold;
  }

  .cm-em {
    font-style: italic;
  }

  .cm-link {
    text-decoration: underline;
  }

  .cm-strikethrough {
    text-decoration: line-through;
  }

  .cm-s-default {
    .cm-keyword {
      color: ${props => props.theme.syntax.keyword};
    }

    .cm-meta,
    .cm-bracket,
    .cm-operator,
    .cm-qualifier,
    .cm-punctuation {
      color: ${props => props.theme.syntax.comment};
    }

    .cm-comment {
      color: ${props => props.theme.syntax.comment};
    }

    .cm-variable,
    .cm-variable-2,
    .cm-variable-3 {
      color: ${props => props.theme.syntax.variable};
    }

    .cm-property {
      color: ${props => props.theme.syntax.property};
    }

    .cm-tag {
      color: ${props => props.theme.syntax.tag};
    }

    .cm-number,
    .cm-string,
    .cm-string-2 {
      color: ${props => props.theme.syntax.value};
    }

    .cm-attribute {
      color: ${props => props.theme.syntax.attribute};
    }

    .cm-atom {
      color: ${props => props.theme.syntax.snipped};
    }

    .cm-def {
      color: ${props => props.theme.syntax.class};
    }

    .cm-type {
      color: ${props => props.theme.syntax.keyword};
    }

    .cm-builtin {
      color: ${props => props.theme.syntax.keyword};
    }

    .cm-hr {
      color: ${props => props.theme.syntax.comment};
    }

    .cm-link {
      color: ${props => props.theme.syntax.import};
    }

    .cm-error {
      color: #d44;
    }

    .cm-quote {
      color: ${props => props.theme.syntax.comment};
    }

    .cm-header {
      color: blue;
    }
  }

  .cm-negative {
    color: #d44;
  }
  .cm-positive {
    color: #292;
  }

  .cm-invalidchar {
    color: #d44;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }

  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }

  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }

  .CodeMirror-composing {
    border-bottom-width: 2px;
    border-bottom-style: solid;
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: -20px;

    overflow-x: hidden;
    overflow-y: hidden;
  }

  /**
   * The rest of this file contains styles related to the mechanics of the
   * editor. You probably shouldn't touch them.
   */

  .CodeMirror {
    position: relative;
    overflow: hidden;
  }

  .CodeMirror-scroll {
    position: relative;

    /* 30px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -30px;
    margin-right: -30px;
    padding-bottom: 30px;

    height: 100%;
    outline: none;

    /* Things will break if this is overridden */
    overflow: scroll !important;
  }

  .CodeMirror-sizer {
    position: relative;
    border-right: 30px solid transparent;
  }

  /*
    The fake, visible scrollbars. Used to force redraw during scrolling before
    actual scrolling happens, thus preventing shaking and flickering artifacts.
   */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    display: none;
    position: absolute;
    z-index: 6;
  }

  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;

    overflow-x: hidden;
    overflow-y: scroll;
  }

  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;

    overflow-y: hidden;
    overflow-x: scroll;
  }

  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }

  .CodeMirror-gutter-filler {
    left: 0;
    bottom: 0;
  }

  .CodeMirror-gutters {
    position: absolute;
    left: 0;
    top: 0;

    min-height: 100%;
    z-index: 3;
  }

  .CodeMirror-gutter {
    display: inline-block;
    vertical-align: top;

    margin-bottom: -30px;

    white-space: normal;
    height: 100%;
  }

  .CodeMirror-gutter-wrapper {
    position: absolute;

    background: none !important;
    border: none !important;

    z-index: 4;
  }

  .CodeMirror-gutter-background {
    position: absolute;
    top: 0;
    bottom: 0;

    z-index: 4;
  }

  .CodeMirror-gutter-elt {
    position: absolute;
    cursor: default;
    z-index: 4;
  }

  .CodeMirror-gutter-wrapper ::selection {
    background-color: transparent;
  }

  .CodeMirror-gutter-wrapper ::-moz-selection {
    background-color: transparent;
  }

  .CodeMirror-lines {
    cursor: text;

    /* Prevents collapsing before first draw */
    min-height: 1px;
  }

  /* Reset some styles that the rest of the page might have set */
  .CodeMirror pre {
    position: relative;
    overflow: visible;

    margin: 0;

    border-radius: 0;
    border-width: 0;

    background: transparent;

    font-feature-settings: "calt" 1;
    font-variant-ligatures: contextual;
    font-family: inherit;
    font-size: inherit;
    color: inherit;

    line-height: inherit;
    white-space: pre;
    word-wrap: normal;

    z-index: 2;
  }

  .CodeMirror-wrap pre {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    z-index: 2;
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    z-index: 3;
  }
  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: "";
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }
`;
/* stylelint-enable */

export default Editor;
export { RawEditor };
