import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { measurements, colors, shadows } from '../../data/values.styles';

const Container = styled.header`
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
  text-decoration: none;
  color: inherit;
  /* Temporary styles for text placeholder */
  font-family: serif;
  font-size: 5em;
  font-weight: bold;
  padding: 0 0.125em;
`;

const Header = ({ transparent }) => (
  <Container transparent={transparent}>
    <LogoLink to="/">
      {/* TODO: Change temporary placeholder text for logo graphic */}
      E
    </LogoLink>
  </Container>
);

Header.propTypes = {
  transparent: PropTypes.bool,
};

Header.defaultProps = {
  transparent: false,
};

export default Header;
