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
  margin-top: ${measurements.height.header};
  padding: ${measurements.padding.container};
  background: ${colors.background};
  ${shadows.box[16]};
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

const Content = ({ children, title }) => (
  <ContentContainer>
    {/* Include title as header if given */}
    {title !== '' && (
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
