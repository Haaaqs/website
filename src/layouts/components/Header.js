import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { measurements, colors, shadows } from '../../data/values.styles';

const routeToLabel = route =>
  `${route}`
    // Remove all leading and trailing slashes from path
    .replace(/^\/+|\/+$/g, '')
    // Separate path by hyphen
    .split('-')
    // Convert each word in path to Title Case
    .map(s => `${s.substring(0, 1).toUpperCase()}${s.substring(1)}`)
    // Join all the separated words together with a space
    .join(' ');

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0 ${measurements.padding.container};
  height: ${measurements.height.header};
  background: ${props =>
    (props.transparent ? 'transparent' : colors.secondary)};
  color: ${props =>
    (props.transparent ? colors.secondary : colors.primary)};
  ${props =>
    (props.transparent ? 'box-shadow: none;' : shadows.box[4])};
`;

const LogoLink = styled(Link)`
  margin: 0;
  height: 100%;
  /* Temporary styles for text placeholder */
  font-family: serif;
  font-size: 5em;
  font-weight: bold;
  padding: 0 0.125em;
`;

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  a {
    height: 100%;
    padding: 0 1em;
    text-transform: uppercase;
    line-height: ${measurements.height.header};

    &.active {
      opacity: 1;
      background: ${colors.primary};
      color: ${colors.secondary};
    }
  }
`;

const Navigation = ({ routes }) => (
  <NavigationContainer>
    {routes.map(route => (
      <Link key={`${route}`} to={route} activeClassName="active">
        {routeToLabel(route)}
      </Link>
    ))}
  </NavigationContainer>
);

Navigation.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Header = ({ routes, transparent }) => (
  <HeaderContainer transparent={transparent}>
    <LogoLink to="/">
      {/* TODO: Change temporary placeholder text for logo graphic */}
      E
    </LogoLink>
    <Navigation routes={routes} />
  </HeaderContainer>
);

Header.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string),
  transparent: PropTypes.bool,
};

Header.defaultProps = {
  routes: [],
  transparent: false,
};

export default Header;
