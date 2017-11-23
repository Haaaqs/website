import React from 'react';
import styled from 'styled-components';

import CardList from '../components/CardList';
import Card, { Title, Info } from '../components/Card';
import Divider from '../components/Divider';

import { getIconSvg } from '../data/icons.svg';
import { measurements, colors } from '../data/values.css';

const { features } = require('../data/config.json');

// FIXME: Flex property not applied when extending CardList
const FeaturesWrapper = styled(CardList)`
  display: flex;
  flex-wrap: wrap;
`;

// FIXME: Set max-width (for small viewport)
const FeatureContainer = styled(Card)`
  flex: 1;
  overflow: visible;
  margin: ${measurements.padding.container};

  svg {
    width: 4em;
    stroke: ${colors.primary};
    stroke-width: ${0.25 / 16}em;
  }
`;

const FeaturesPage = () => (
  <FeaturesWrapper>
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
