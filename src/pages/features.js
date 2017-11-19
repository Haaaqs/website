import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';
import Divider from '../components/Divider';

import { getIconSvg } from '../data/icons.svg';
import { measurements, colors, opacities, fonts } from '../data/values.styles';

const { features } = require('../data/config.json');

const FeaturesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FeatureContainer = Card.extend`
  flex: 1;
  margin: ${measurements.padding.container};

  svg {
    width: 4em;
    stroke: ${colors.primary};
    stroke-width: ${0.25 / 16}em;
  }
`;

const FeatureTitle = styled.h3`
  margin: 0;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  text-shadow: 0 ${measurements.unit} ${colors.primary};
  opacity: ${opacities.primary};
`;

const FeatureDesc = styled.p`
  margin: 0;
  font-size: ${fonts.sizes[14]};
  opacity: ${opacities.secondary};
`;

const FeaturesPage = () => (
  <FeaturesWrapper>
    {features.map(({ id, title, desc, icon }) => (
      <FeatureContainer key={id}>
        {getIconSvg(icon)}
        <Divider baseColor={colors.primary} />
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureDesc>{desc}</FeatureDesc>
      </FeatureContainer>
    ))}
  </FeaturesWrapper>
);

export default FeaturesPage;
