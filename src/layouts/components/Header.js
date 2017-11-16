import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { pathToTitleCase } from '../../utils/paths';

import { measurements, colors, shadows } from '../../data/values.styles';

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
    (props.home ? 'transparent' : colors.secondary)};
  color: ${props =>
    (props.home ? colors.secondary : colors.primary)};
  ${props =>
    (props.home ? 'box-shadow: none;' : shadows.box[4])};
`;

const LogoLink = styled(Link)`
  margin: 0;
  height: 100%;
  opacity: 1;
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
    padding: 0 ${measurements.padding.container};
    text-transform: uppercase;
    line-height: ${measurements.height.header};

    &.active {
      opacity: 1;
      font-weight: bold;
      background: ${colors.primary};
      color: ${colors.secondary};
    }
  }
`;

const Navigation = ({ routes }) => (
  <NavigationContainer>
    {routes.map(route => (
      <Link key={`${route}`} to={route} activeClassName="active">
        {pathToTitleCase(route)}
      </Link>
    ))}
  </NavigationContainer>
);

Navigation.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Header = ({ routes, home }) => (
  <HeaderContainer home={home}>
    {/* Hide logo on home page */}
    <LogoLink to="/" style={{ visibility: home ? 'hidden' : '' }}>
      {/* TODO: Change temporary placeholder text for logo graphic */}
      E
    </LogoLink>
    <Navigation routes={routes} />
  </HeaderContainer>
);

Header.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string),
  home: PropTypes.bool,
};

Header.defaultProps = {
  routes: [],
  home: false,
};

export default Header;
