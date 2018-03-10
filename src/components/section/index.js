/* @flow */

import styled from "styled-components";

const Container = styled.section`
  position: relative;

  display: flex;
  flex-grow: 1;
  flex-direction: ${props => (props.vertical ? "row" : "column")};

  overflow-y: auto;
  overflow-x: hidden;
`;

export default Container;
