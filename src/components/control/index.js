import styled from "styled-components";
import is from "styled-is";

const Controls = styled.section`
  display: flex;

  margin: 0 0.5rem;
`;

const Control = styled.button`
  content: "";
  outline: none;

  margin: 0 0.5rem 0 0;

  width: 14px;
  height: 14px;
  transform: scale(0.9);

  border-width: 0;
  border-radius: 14px;
  background-color: red;

  -webkit-app-region: no-drag;

  ${is("close")`
    background-color: #d54343;
  `};

  ${is("minimize")`
    background-color: #fabc40;
  `};

  ${is("maximize")`
    background-color: #3ac748;
  `};
`;

export default Controls;
export { Control };
