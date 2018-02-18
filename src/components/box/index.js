import styled from "styled-components";
import is from "styled-is";
import Panel from "../panel";

const Box = Panel.extend`
  margin: 0.5rem 1rem;

  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${props => props.theme.border};
`;

export default Box;
