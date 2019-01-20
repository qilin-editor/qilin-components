/* @flow */

import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  cursor: pointer;
  user-select: none;

  margin: 0.5rem;
`;

const LabelDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(100% - 50px);

  justify-content: center;
`;

const LabelSup = styled.div`
  font-weight: 500;
  font-size: 1rem;

  margin: 5px 0;
`;

const LabelSub = styled.div`
  font-weight: normal;
  font-size: 0.85rem;

  margin: 0 0 2px;
  opacity: 0.85;
`;

export default Label;
export { LabelDescription, LabelSup, LabelSub };
