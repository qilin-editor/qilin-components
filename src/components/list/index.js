/* @flow */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const List = styled.nav`
  position: relative;

  margin: 0;
  padding: 0;

  list-style: none;
`;

const ListItem = styled(({ component = <li />, ...props }) =>
  React.cloneElement(component, props)
)`
  position: relative;
  display: flex;

  align-items: center;
  vertical-align: middle;
  justify-content: flex-start;

  text-align: left;
  text-decoration: none;
  color: ${props => props.theme.foreground};

  padding: 0.75rem 1rem;
  margin: 0;

  width: 100%;
  min-height: 55px;

  transition: background-color 150ms ease;

  &[href]:hover {
    background-color: ${props => props.theme.border};
  }
`;

const ListSeparator = styled.hr`
  border-width: 0;

  height: 1px;
  width: 100%;

  background-color: ${props => props.theme.border};
`;

const ListTextContainer = styled.div`
  flex: 1 1 auto;

  padding: 0 1rem;
`;

const ListPrimary = styled.p`
  margin: 0;
  padding: 0;
`;

const ListSecondary = styled(ListPrimary)`
  opacity: 0.75;
  font-size: 0.85rem;
`;

function ListText(props: Object) {
  return (
    <ListTextContainer>
      {props.primary ? <ListPrimary>{props.primary}</ListPrimary> : null}
      {props.secondary ? (
        <ListSecondary>{props.secondary}</ListSecondary>
      ) : null}
    </ListTextContainer>
  );
}

ListText.propTypes = {
  primary: PropTypes.node,
  secondary: PropTypes.node
};

export default List;
export { ListItem, ListText, ListSeparator };
