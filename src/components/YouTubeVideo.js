import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Card from '../components/Card';
import Icon from '../components/Icon';

import { getIconPath } from '../data/icons.svg';
import { measurements, colors, opacities, fonts, effects } from '../data/values.css';

const videoContentStyle = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
`;

const VideoWrapper = styled.div`
  display: inline-block;
  align-items: center;
  margin: ${measurements.padding.container};
  width: ${measurements.width.player};
  max-width: calc(100vw - (${measurements.padding.container} * 4));
`;

const VideoContainer = styled(Card)`
  position: relative;
  padding: 0;
  width: 100%;
  /* Maintain 16:9 aspect ratio for height */
  padding-top: ${(9 / 16) * 100}%;
`;

const InfoContainer = styled.div`
  ${videoContentStyle};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoText = styled.p`
  margin: 0.25em;
  font-size: 1em;
`;

const ErrorText = styled.p`
  margin: 0;
  font-size: ${fonts.sizes[12]};
  font-weight: bold;
`;

const VideoThumbnailContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const PlayIcon = Icon.extend`
  pointer-events: none;
  position: absolute;
  width: 25%;
  fill: ${colors.secondary};
  opacity: ${opacities.primary};
`;

const VideoThumbnail = styled.input.attrs({
  type: 'image',
})`
  ${videoContentStyle};
  top: auto;
  left: auto;
  filter: brightness(${opacities.secondary});

  &:hover {
    filter: brightness(${opacities.primary}) ${effects.blurScale.blur};
    transform: ${effects.blurScale.scale};
  }
`;

const VideoEmbed = styled.iframe.attrs({
  frameBorder: 0,
  allowFullScreen: true,
})`
  ${videoContentStyle};
  ${({ thumbnail }) => `background: url(${thumbnail}) center/cover no-repeat;`};
  height: 100%;
`;

class YouTubeVideo extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
    video: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    video: null,
    error: null,
  };

  static renderLoading = () => (
    <InfoContainer>
      <InfoText>Loading...</InfoText>
    </InfoContainer>
  );

  state = { play: false };

  playVideo = () => this.setState({ play: true });

  renderError = () => (
    <InfoContainer>
      <InfoText>Video could not be loaded</InfoText>
      ${this.props.error !== null && <ErrorText>{`${this.props.error}`}</ErrorText>}
    </InfoContainer>
  );

  renderThumbnail = () => {
    const { title, thumbnail } = this.props.video;
    return (
      <VideoThumbnailContainer>
        <VideoThumbnail
          hidden={this.state.play}
          src={thumbnail}
          alt={title}
          title={title}
          onClick={this.playVideo}
        />
        <PlayIcon>{getIconPath('play')}</PlayIcon>
      </VideoThumbnailContainer>
    );
  };

  renderVideo = () => {
    const { title, thumbnail, content } = this.props.video;
    const autoPlay = this.state.play ? 1 : 0;
    return (
      <VideoEmbed title={title} thumbnail={thumbnail} src={`${content}?autoplay=${autoPlay}`} />
    );
  };

  renderContent = () => {
    const { loading, video } = this.props;
    if (loading) {
      return YouTubeVideo.renderLoading();
    } else if (video !== null) {
      return <div>{this.state.play ? this.renderVideo() : this.renderThumbnail()}</div>;
    }
    return this.renderError();
  };

  render = () => (
    <VideoWrapper>
      <VideoContainer index={this.props.index}>{this.renderContent()}</VideoContainer>
    </VideoWrapper>
  );
}

export default YouTubeVideo;
