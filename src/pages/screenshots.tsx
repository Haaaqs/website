import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout/layout';
import Card, { Title } from '../components/Card';
import CardList from '../components/CardList';

import { measurements, shadows, colors, opacities, effects, transitions } from '../data/values.css';

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
  text-align: center;
  margin: 0;
  padding: 0 ${measurements.padding.container};
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 25%;
  background: ${colors.secondary};
  border-top: solid ${measurements.unit} ${colors.primary};
  transform: translateY(100%);
  ${transitions.set('transform')};
`;

const ScreenshotContainer = styled(Card)`
  cursor: pointer;
  padding: 0;
  margin: ${measurements.padding.container};
  width: ${measurements.width.player};
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

const ScreenshotOverlay = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, ${opacities.secondary});

  & > ${ScreenshotImage} {
    object-fit: contain;
    max-width: 80%;
    max-height: 80%;
    // box-shadow doesn't work well with object-fit, and filter drop-shadows are limited
    // ${shadows.box[24]}
  }
`;

type ScreenshotProps = {
  imgId: string;
  title: string;
};

type ScreenshotState = {
  isFullscreen: boolean;
};

class Screenshot extends React.Component<ScreenshotProps, ScreenshotState> {
  state = { isFullscreen: false };

  handleClick = () => {
    this.setState((state) => ({
      isFullscreen: !state.isFullscreen,
    }));
  };

  render() {
    const { imgId, title } = this.props;

    return (
      <div>
        <ScreenshotContainer onClick={this.handleClick}>
          <ScreenshotImage src={screenshotsImages[imgId]} alt={title} />
          <ScreenshotTitle>{title}</ScreenshotTitle>
        </ScreenshotContainer>
        {this.state.isFullscreen && (
          <ScreenshotOverlay onClick={this.handleClick}>
            <ScreenshotImage src={screenshotsImages[imgId]} alt={title} />
          </ScreenshotOverlay>
        )}
      </div>
    );
  }
}

export default ({ location }) => (
  <Layout location={location}>
    <ScreenshotList>
      {screenshots.map(({ id, title }) => (
        <Screenshot key={id} imgId={id} title={title} />
      ))}
    </ScreenshotList>
  </Layout>
);
