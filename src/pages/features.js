import React from 'react';
import styled from 'styled-components';

import CardList from '../components/CardList';
import Card, { Title, Info } from '../components/Card';
import Divider from '../components/Divider';

import { getIconSvg } from '../data/icons.svg';
import { measurements, colors } from '../data/values.css';

const { features } = require('../data/config.json');

const FeaturesWrapper = styled(CardList)`
  display: flex;
  flex-wrap: wrap;
`;

// FIXME: When max-width of card is exceeded, text content overflows
const FeatureContainer = styled(Card)`
  flex: 1;
  overflow: visible;
  margin: ${measurements.padding.container};
  max-width: calc(100vw - (${measurements.padding.container} * 4));

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
