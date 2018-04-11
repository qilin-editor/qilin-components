import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Bar from "./components/bar";
import Box from "./components/box";
import Panel from "./components/panel";
import Editor from "./components/editor";
import Section from "./components/section";
import Controls, { Control } from "./components/control";
import Button from "./components/form/button";
import Color from "./components/form/color";
import Input from "./components/form/input";
import Textarea from "./components/form/textarea";
import { Flex, Unit } from "./components/grid";

const syntax = {
  import: "hsl(301, 63%, 40%)",
  snippet: "hsl(119, 34%, 47%)",
  comment: "hsl(230, 4%, 64%)",
  variable: "hsl(5, 74%, 59%)",
  constant: "hsl(41, 99%, 30%)",
  property: "hsl(230, 8%, 24%)",
  function: "hsl(221, 87%, 60%)",
  attribute: "hsl(41, 99%, 30%)",
  value: "hsl(230, 8%, 24%)",
  class: "hsl(41, 99%, 38%)",
  method: "hsl(221, 87%, 60%)",
  keyword: "hsl(301, 63%, 40%)",
  tag: "hsl(5, 74%, 59%)"
};

const theme = {
  foreground: "#5b7575",
  background: "#ffffff",
  border: "#ebebf0",
  caret: "#000000",
  lineHighlight: "#efefef",
  findHighlight: "#00ff00",
  findHighlightForeground: "#0000ff",
  gutter: "#ffffff",
  gutterForeground: "#5b7575",
  selection: "#e3e3e3",
  selectionForeground: "#555555",
  inactiveSelection: "#333333",
  inactiveSelectionForeground: "#222222",
  shadow: "#111111",
  syntax: syntax
};

class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: ""
    };

    this.onEditorChange = this.onEditorChange.bind(this);
  }

  onEditorChange(editor, data, value) {
    this.setState({ editor: value });
  }

  render() {
    return (
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
                <p>Buttons</p>
              </Bar>

              <Flex>
                <Unit width={1 / 2}>
                  <Button inline>Button</Button>
                  <Button inline>Button</Button>
                  <Button inline>Button</Button>
                </Unit>

                <Unit width={1 / 2}>Lorem ipsum dolor sit amet</Unit>
              </Flex>

              <Flex>
                <Unit width={1 / 2}>
                  <Button small>Button</Button>
                  <Button>Button</Button>
                  <Button large>Button</Button>
                </Unit>

                <Unit width={1 / 2}>Lorem ipsum dolor sit amet</Unit>
              </Flex>
            </Box>

            <Box>
              <Bar header>
                <p>Inputs</p>
              </Bar>

              <Flex>
                <Unit width={1 / 2}>
                  <Input type="text" placeholder="Text" />
                  <Input type="search" placeholder="Search" />
                  <Textarea placeholder="Text area" />
                </Unit>

                <Unit width={1 / 2}>Lorem ipsum dolor sit amet</Unit>
              </Flex>

              <Flex>
                <Unit width={1 / 2}>
                  <Color inline />
                  <Input inline type="text" placeholder="Text" />
                </Unit>

                <Unit width={1 / 2}>Lorem ipsum dolor sit amet</Unit>
              </Flex>
            </Box>

            <Box>
              <Bar header>
                <p>Grid system</p>
              </Bar>

              <Flex>
                <Unit width={1 / 2}>
                  <Box>1/2</Box>
                </Unit>

                <Unit width={1 / 2}>
                  <Box>1/2</Box>
                </Unit>
              </Flex>

              <Flex>
                <Unit width={1 / 3}>
                  <Box>1/3</Box>
                </Unit>

                <Unit width={2 / 3}>
                  <Box>2/3</Box>
                </Unit>
              </Flex>
            </Box>

            <Box>
              <Bar header>
                <p>Editor</p>
              </Bar>

              <Editor
                value={this.state.editor}
                options={{
                  lineNumbers: true
                }}
                onBeforeChange={this.onEditorChange}
              />
            </Box>
          </Section>
        </Section>

        <Bar footer>
          <div>Message</div>

          <div>
            <Button>Item A</Button>
            <Button>Item B</Button>
            <Button>Item C</Button>
          </div>
        </Bar>
      </App>
    );
  }
}

ReactDOM.render(<Preview />, document.getElementById("app"));
