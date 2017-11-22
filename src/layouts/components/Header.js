import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Logo from '../../components/Logo';

import { pathToTitleCase } from '../../utils/paths';

import { measurements, colors, shadows, opacities } from '../../data/values.css';

const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0 ${measurements.padding.container};
  height: ${measurements.height.header};
  overflow: hidden;
  z-index: 1;
  background: ${({ home }) => (home ? 'transparent' : colors.secondary)};
  color: ${({ home }) => (home ? colors.secondary : colors.primary)};
  ${({ home }) => (home ? 'box-shadow: none;' : shadows.box[4])};
`;

const LogoLink = styled(Link)`
  position: relative;
  margin: 0;
  height: 100%;
  padding-right: ${measurements.padding.container};
  border-right: ${measurements.unit} solid ${colors.primary};
  box-shadow: 0.25em 0 0.25em rgba(0, 0, 0, ${opacities.faint});

  &::before {
    content: '';
    position: absolute;
    left: -${measurements.padding.container};
    top: 0;
    display: block;
    width: calc(100% + ${measurements.padding.container});
    height: 100%;
    z-index: -1;
    background: ${colors.primary};
    transform-origin: left top;
    transform: scaleX(0);
  }

  &:hover {
    color: ${colors.secondary};

    &::before {
      transform: scaleX(1);
    }
  }

  svg {
    fill: currentColor;
    stroke-width: 0;
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
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 ${measurements.padding.container};
    text-transform: uppercase;
    white-space: nowrap;
    text-overflow: ellipsis;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: ${colors.primary};
      transform-origin: left bottom;
      transform: scaleY(0);
    }

    &:hover {
      &::before {
        transform: scaleY(0.05);
      }
    }

    &.active[aria-current] {
      opacity: 1;
      font-weight: bold;
      color: ${colors.secondary};

      &::before {
        transform: scaleY(1);
      }
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
      <Logo />
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
