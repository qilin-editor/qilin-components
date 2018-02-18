import styled from "styled-components";
import is from "styled-is";

const Panel = styled.section`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.foreground};

  height: ${props => props.height || "auto"};
  width: ${props => props.width || "auto"};

  ${is("espaced")`
    margin: 0.5rem 1rem;
  `};

  ${is("rounded")`
    border-radius: 3px;
  `};

  ${is("border")`
    border-width: ${props => props.border};
    border-style: solid;
    border-color: ${props => props.theme.border};
  `};
`;

export default Panel;
