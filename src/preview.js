import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Bar from "./components/bar";
import Box from "./components/box";
import Panel from "./components/panel";
import Section from "./components/section";
import Controls, { Control } from "./components/control";
import Button from "./components/form/button";

const theme = {
  foreground: "#5b7575",
  background: "#ffffff",
  border: "#ebebf0",
  caret: "#000000",
  lineHighlight: "#999999",
  findHighlight: "#00ff00",
  findHighlightForeground: "#0000ff",
  gutter: "#888888",
  gutterForeground: "#777777",
  selection: "#666666",
  selectionBorder: "#444444",
  selectionForeground: "#555555",
  inactiveSelection: "#333333",
  inactiveSelectionForeground: "#222222",
  shadow: "#111111"
};

ReactDOM.render(
  <App theme={theme}>
    <Bar header>
      <Controls>
        <Control close />
        <Control minimize />
        <Control maximize />
      </Controls>

      <p>Untitled</p>

      <section>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
      </section>
    </Bar>

    <Section vertical>
      <Panel width="200px" border="0 1px 0 0" />

      <Panel width="150px" border="0 1px 0 0" />

      <Section horizontal>
        <Box>
          <Bar header>
            <div>Buttons</div>
          </Bar>

          <Button small>Button</Button>
          <Button>Button</Button>
          <Button large>Button</Button>
        </Box>

        <Box>
          <Bar header>
            <div>Another Panel</div>
          </Bar>

          <div>Lorem ipsum</div>
        </Box>

        <Box>
          <Bar header>
            <div>Another Panel</div>
          </Bar>

          <div>Lorem ipsum</div>
        </Box>
      </Section>
    </Section>

    <Bar footer>
      <div>Message</div>

      <div />

      <div>
        <Button>Item A</Button>
        <Button>Item B</Button>
        <Button>Item C</Button>
      </div>
    </Bar>
  </App>,
  document.getElementById("app")
);
