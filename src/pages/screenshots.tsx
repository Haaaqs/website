import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout/layout';
import Card, { Title } from '../components/Card';
import CardList from '../components/CardList';

import { measurements, colors, effects, transitions } from '../data/values.css';

import screenshotsImages from '../data/screenshots.jpg';
import { screenshots } from '../data/config.json';

const ScreenshotList = styled(CardList)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ScreenshotImage = styled.img`
  display: block;
  margin: 0;
  width: 100%;
  ${transitions.set('filter', 'transform')};
`;

const ScreenshotTitle = styled(Title)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  text-align: center;
  width: 100%;
  height: 25%;
  background: ${colors.secondary};
  border-top: solid ${measurements.unit} ${colors.primary};
  transform: translateY(100%);
  padding: 0 ${measurements.padding.container};
  ${transitions.set('transform')};
`;

const ScreenshotContainer = styled(Card)`
  display: inline-flex;
  flex: 1 0 auto;
  padding: 0;
  width: ${measurements.width.player};
  height: 100%;
  margin: ${measurements.padding.container};
  max-width: calc(100vw - (${measurements.padding.container} * 4));

  &:hover {
    & > ${ScreenshotImage} {
      filter: ${effects.blurScale.blur};
      transform: ${effects.blurScale.scale};
    }

    & > ${ScreenshotTitle} {
      transform: translateY(0);
    }
  }
`;

export default ({ location }) => (
  <Layout location={location}>
    <ScreenshotList>
      {screenshots.map(({ id, title }) => (
        <ScreenshotContainer key={id}>
          <ScreenshotImage src={screenshotsImages[id]} alt={title} />
          <ScreenshotTitle>{title}</ScreenshotTitle>
        </ScreenshotContainer>
      ))}
    </ScreenshotList>
  </Layout>
);
