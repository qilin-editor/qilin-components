/* @flow */

import styled from "styled-components";
import Input from "../input";

const Textarea = styled(Input.withComponent("textarea"))`
  resize: vertical;
`;

export default Textarea;
