import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { measurements, colors, shadows } from '../data/values.styles';

const VideoWrapper = styled.div`
  display: inline-block;
  width: ${measurements.width.player};
  max-width: calc(100vw - (${measurements.padding.container} * 2));
`;

const VideoContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  /* Maintain 16:9 aspect ratio */
  padding-top: ${(9 / 16) * 100}%;
  overflow: hidden;
  border-radius: ${measurements.border.card};
  background: ${colors.secondary};
  ${shadows.box[2]};

  &:hover {
    ${shadows.box[8]};
  }

  & > :first-child {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;

    p {
      margin: 0;
    }
  }
`;

const VideoThumbnail = styled.input.attrs({
  type: 'image',
})`
  transform: translateY(-${100 / 8}%);
`;

const VideoEmbed = styled.iframe.attrs({
  frameBorder: 0,
  allowFullScreen: true,
})`
  height: 100%;
`;

class YouTubeVideo extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    video: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    video: {
      title: '',
      thumbnail: '',
      content: '',
    },
  };

  static renderLoading = () => <div><p>Loading...</p></div>;

  static renderError = () => <div><p>Video could not be loaded</p></div>;

  state = { play: false };

  playVideo = () => this.setState({ play: true });

  renderThumbnail = () => {
    const { title, thumbnail } = this.props.video;
    return <VideoThumbnail src={thumbnail} alt={title} title={title} onClick={this.playVideo} />;
  };

  renderVideo = () => {
    const { title, content } = this.props.video;
    return <VideoEmbed title={title} src={`${content}?autoplay=1`} />;
  };

  renderContent = () => {
    const { loading, video } = this.props;
    if (loading) {
      return YouTubeVideo.renderLoading();
    } else if (video) {
      return this.state.play ? this.renderVideo() : this.renderThumbnail();
    }
    return YouTubeVideo.renderError();
  };

  render = () => (
    <VideoWrapper>
      <VideoContainer>{this.renderContent()}</VideoContainer>
    </VideoWrapper>
  );
}

export default YouTubeVideo;
