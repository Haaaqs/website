import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout/layout';
import Card, { Title, Info } from '../components/Card';
import CardList from '../components/CardList';

import { measurements, opacities, fonts } from '../data/values.css';

import { pricing } from '../data/config.json';

const PricingWrapper = styled(CardList)`
  display: flex;
  flex-wrap: wrap;
`;

const PricingContainer = styled(Card)`
  display: inline-flex;
  flex-direction: column;
  flex: 1 0 auto;
  overflow: auto;
  margin: ${measurements.padding.container};
  max-width: calc(100vw - (${measurements.padding.container} * 4));
`;

const PricingTitle = styled(Title)`
  font-size: 1.55em;
`;

const PricingCost = styled(Info)`
  font-size: 1.65em;
  margin: 0.25em 0;
  opacity: ${opacities.primary};
`;

const PricingDuration = styled(Info)`
  font-size: 1.25em;
  margin-bottom: 0.75em;
`;

const PricingFeatureContainer = styled.div`
  margin-bottom: 1.5em;
`;

const PricingFeature = styled(Info)`
  font-size: 1.05em;
`;

const PurchaseButton = styled.a.attrs({
  role: 'button',
})`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${fonts.sizes[16]};
  margin: auto;
  margin-bottom: 0;
  // text-transform: none !important;
`;

export default ({ location }) => (
  <Layout location={location}>
    <PricingWrapper>
      {pricing.map(({ title, duration, cost, features }) => (
        <PricingContainer key={title}>
          <PricingTitle>{title}</PricingTitle>
          <PricingCost>{`$${cost}`}</PricingCost>
          <PricingDuration>{`/ ${duration} days`}</PricingDuration>
          <PricingFeatureContainer>
            {features.map((feature) => (
              <PricingFeature key={feature}>{feature}</PricingFeature>
            ))}
          </PricingFeatureContainer>
          <PurchaseButton href="https://dashboard.envyclient.com">Purchase</PurchaseButton>
        </PricingContainer>
      ))}
    </PricingWrapper>
  </Layout>
);
