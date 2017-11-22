import React from 'react';
import styled from 'styled-components';

import Card, { Title, Info } from '../components/Card';
import Divider from '../components/Divider';

import { getIconSvg } from '../data/icons.svg';
import { measurements, colors } from '../data/values.css';

const { features } = require('../data/config.json');

const FeaturesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FeatureContainer = Card.extend`
  flex: 1;
  overflow: visible;
  margin: ${measurements.padding.container};

  svg {
    width: 4em;
    stroke: ${colors.primary};
    stroke-width: ${0.25 / 16}em;
  }
`;

const FeaturesPage = ({ transition }) => (
  <FeaturesWrapper style={transition && transition.style}>
    {features.map(({ id, title, desc, icon }) => (
      <FeatureContainer key={id}>
        {getIconSvg(icon)}
        <Divider baseColor={colors.primary} />
        <Title>{title}</Title>
        <Info>{desc}</Info>
      </FeatureContainer>
    ))}
  </FeaturesWrapper>
);

export default FeaturesPage;
