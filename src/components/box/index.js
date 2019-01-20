/* @flow */

import styled from "styled-components";
import Panel from "../panel";

const Box = styled(Panel)`
  margin: 0.5rem 1rem;

  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${props => props.theme.border};
`;

export default Box;
