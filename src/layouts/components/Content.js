import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Divider from '../../components/Divider';

import { hexToRgb } from '../../utils/colors';

import {
  measurements,
  colors,
  opacities,
  shadows,
} from '../../data/values.styles';

const ContentContainer = styled.main`
  flex: 1 0 auto;
  width: 100%;
  margin: 0;
  padding: ${measurements.padding.container};
  /* Account for fixed header height */
  padding-top: calc(
    ${measurements.height.header} + ${measurements.padding.container}
  );
  ${shadows.box[16]};
  background: ${props => (
    props.transparent ? 'transparent' : colors.background
  )};
`;

const TitleContainer = styled.div`
  h2 {
    margin: 0.5em 0;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    color: ${colors.primary};
    opacity: ${opacities.primary};
  }
`;

const isHome = title => title === '';

const Content = ({ children, title }) => (
  <ContentContainer transparent={isHome(title)}>
    {/* Include title as header if given */}
    {!isHome(title) && (
      <TitleContainer>
        <h2>&mdash; {title} &mdash;</h2>
        <Divider color={hexToRgb(colors.primary)} />
      </TitleContainer>
    )}
    {children}
  </ContentContainer>
);

Content.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

Content.defaultProps = {
  title: '',
};

export default Content;
