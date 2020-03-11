import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';

import Divider from '../../../components/Divider';

import { measurements, colors, opacities, fonts, shadows } from '../../../data/values.css';

const ContentContainer = styled.main`
  flex: 1 0 auto;
  text-align: center;
  margin: 0;
  padding: ${measurements.padding.container};
  padding-top: calc(${measurements.height.header} + ${measurements.padding.container});
  ${shadows.box[16]};
  background: ${({ transparent }) => (transparent ? 'transparent' : colors.background)};
`;

const TitleContainer = styled.div`
  margin-bottom: ${measurements.padding.container};
`;

const Title = styled.h1`
  margin: 0.5em;
  font-size: ${fonts.sizes[32]};
  font-weight: bold;
  text-transform: lowercase;
  white-space: nowrap;
  overflow-x: auto;
  color: ${colors.primary};
  opacity: ${opacities.primary};

  &::before,
  &::after {
    /* space - em dash - space */
    content: '\\0020\\2014\\0020';
  }
`;

const isHome = title => title === '';

const Content = ({ children, title }) => (
  <ContentContainer transparent={isHome(title)}>
    {!isHome(title) && (
      <TitleContainer>
        <Title>{title}</Title>
        <Divider baseColor={colors.primary} />
      </TitleContainer>
    )}
    {children}
  </ContentContainer>
);

Content.propTypes = {
  children: node.isRequired,
  title: string,
};

Content.defaultProps = {
  title: '',
};

export default Content;
