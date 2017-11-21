import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Card from '../components/Card';
import Icon from '../components/Icon';

import { getIconPath } from '../data/icons.svg';
import { measurements, colors, opacities, fonts } from '../data/values.css';

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

const VideoContainer = Card.extend`
  position: relative;
  padding: 0;
  width: 100%;
  /* Maintain 16:9 aspect ratio for height */
  padding-top: ${(9 / 16) * 100}%;
`;

const InfoContainer = styled.div`
  ${videoContentStyle}
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

const PlayIcon = Icon.extend`
  pointer-events: none;
  position: absolute;
  /* TODO: Use flexbox on parent to center instead */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  fill: ${colors.secondary};
  opacity: ${opacities.primary};
`;

const VideoThumbnail = styled.input.attrs({
  type: 'image',
})`
  ${videoContentStyle}
  /* Center thumbnail vertically to crop black bars from 4:3 aspect ratio */
  top: 50%;
  transform: translateY(-50%);

  filter: brightness(${opacities.secondary});

  &:hover {
    filter: brightness(${opacities.primary});
  }
`;

const VideoEmbed = styled.iframe.attrs({
  frameBorder: 0,
  allowFullScreen: true,
})`
  ${videoContentStyle}
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
      ${this.props.error !== null &&
        <ErrorText>{`${this.props.error}`}</ErrorText>
      }
    </InfoContainer>
  );

  renderThumbnail = () => {
    const { title, thumbnail } = this.props.video;
    return (
      <div>
        <VideoThumbnail
          hidden={this.state.play}
          src={thumbnail}
          alt={title}
          title={title}
          onClick={this.playVideo}
        />
        <PlayIcon>
          {getIconPath('play')}
        </PlayIcon>
      </div>
    );
  };

  renderVideo = () => {
    const { title, content } = this.props.video;
    const autoPlay = this.state.play ? 1 : 0;
    return <VideoEmbed title={title} src={`${content}?autoplay=${autoPlay}`} />;
  };

  renderContent = () => {
    const { loading, video } = this.props;
    if (loading) {
      return YouTubeVideo.renderLoading();
    } else if (video) {
      return (
        <div>
          {/* TODO: Temporary loading placeholder for when video and thumbnail are loading */}
          {/* {YouTubeVideo.renderLoading()} */}
          {this.state.play ? this.renderVideo() : this.renderThumbnail()}
        </div>
      );
    }
    return this.renderError();
  };

  render = () => (
    <VideoWrapper>
      <VideoContainer>
        {this.renderContent()}
      </VideoContainer>
    </VideoWrapper>
  );
}

export default YouTubeVideo;
