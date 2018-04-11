/* @flow */

import styled from "styled-components";
import is from "styled-is";

const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;

  cursor: pointer;
  user-select: none;

  margin: 0.5rem 0;
`;

const LabelTitle = styled.div`
  flex: 0 0 calc(100% - 50px);

  font-weight: bold;
  font-size: 1rem;
`;

const LabelDescription = styled.div`
  flex: 0 0 calc(100% - 50px);

  padding: 0;
  margin: 0 0 0 50px;

  font-weight: normal;
  font-size: 0.85rem;
`;

export default Label;
export { LabelTitle, LabelDescription };
