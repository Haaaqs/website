import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { pathToTitleCase } from '../../utils/paths';

import { measurements, colors, shadows, opacities } from '../../data/values.styles';

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
  overflow: hidden;
  background: ${props => (props.home ? 'transparent' : colors.secondary)};
  color: ${props => (props.home ? colors.secondary : colors.primary)};
  ${props => (props.home ? 'box-shadow: none;' : shadows.box[4])};
`;

const LogoLink = styled(Link)`
  position: relative;
  margin: 0;
  height: 100%;
  padding-right: ${measurements.padding.container};
  border-right: ${measurements.unit} solid ${colors.primary};
  box-shadow: 0.25em 0 0.25em rgba(0, 0, 0, ${opacities.faint});

  /* TODO: This effect is a proof of concept, disabled for now */

  /* transition: color 0.2s ease;

  &::before {
    content: '';
    display: inline-block;
    background: ${colors.primary};
    width: calc(100% + ${measurements.padding.container});
    height: 100%;
    position: absolute;
    top: 0;
    left: -${measurements.padding.container};
    z-index: -1;
    transform: translateX(calc(-1 * (100% + ${measurements.padding.container})));
    transition: transform 0.2s ease;
    will-change: transform;
  }

  &:hover {
    color: ${colors.secondary};

    &::before {
      transform: translateX(0);
    }
  } */

  svg {
    height: 100%;
    padding: 0.5em 0;
  }
`;

const NavigationContainer = styled.nav`
  display: flex;
  /* Set to flex-start so mobile nav is displayed fully from the start */
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-x: auto;
  /* box-shadow: inset 1em 0 1em -1em black, inset -1em 0 1em -1em black; */

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 ${measurements.padding.container};
    text-transform: uppercase;
    white-space: nowrap;
    text-overflow: ellipsis;

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

const minecraftLogo = (
  <svg viewBox="0 0 24 24">
    {/* eslint-disable max-len */}
    <path d="M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M6,6V10H10V12H8V18H10V16H14V18H16V12H14V10H18V6H14V10H10V6H6Z" />
    {/* eslint-enable max-len */}
  </svg>
);

const Header = ({ routes, home }) => (
  <HeaderContainer home={home}>
    {/* Hide logo on home page */}
    <LogoLink to="/" style={{ visibility: home ? 'hidden' : '' }}>
      {/* TODO: Change temporary placeholder logo for logo graphic */}
      {minecraftLogo}
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
