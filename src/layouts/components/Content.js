import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  /* Account for fixed header height */
  padding-top: ${measurements.height.header};
  ${shadows.box[16]};
  background: ${props => (
    props.transparent ? 'transparent' : colors.background
  )};

  & > div {
    padding: ${measurements.padding.container};
  }
`;

const Title = styled.h2`
  margin: 1em 0;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.primary};
  opacity: ${opacities.secondary};

  hr {
    margin: 0;
    margin-top: 0.75em;
    border: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, ${opacities.primary}),
      rgba(0, 0, 0, 0)
    );
  }
`;

const isHome = title => title === '';

const Content = ({ children, title }) => (
  <ContentContainer transparent={isHome(title)}>
    {/* Include title as header if given */}
    {!isHome(title) && (
      <Title>
        &mdash; {title} &mdash;
        <hr />
      </Title>
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
