import React from 'react';
import { arrayOf, bool, string } from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Logo from '../../components/Logo';

import { pathToTitleCase } from '../../utils/paths';

import { measurements, colors, opacities, shadows, transitions } from '../../data/values.css';

const LogoLink = styled(Link)`
  position: relative;
  margin: 0;
  height: 100%;
  padding-right: ${measurements.padding.container};
  border-right: ${measurements.unit} solid ${colors.primary};
  box-shadow: 0.25em 0 0.25em rgba(0, 0, 0, ${opacities.faint});
  ${transitions.set('color')};

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
    ${transitions.set('transform')};
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
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-x: auto;

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
    ${transitions.set('opacity', 'color')};

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
      ${transitions.set('transform')};
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

  & > ${LogoLink} {
    visibility: ${({ home }) => (home ? 'hidden' : '')};
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
  routes: arrayOf(string).isRequired,
};

const Header = ({ routes, home }) => (
  <HeaderContainer home={home}>
    <LogoLink to="/">
      <Logo />
    </LogoLink>
    <Navigation routes={routes} />
  </HeaderContainer>
);

Header.propTypes = {
  routes: arrayOf(string),
  home: bool,
};

Header.defaultProps = {
  routes: [],
  home: false,
};

export default Header;
