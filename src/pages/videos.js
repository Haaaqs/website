import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { measurements } from '../data/values.styles';

const VideoEmbedContainer = styled.iframe`
  max-width: calc(100vw - (${measurements.padding.container} * 2));
  max-height: calc(100vh - (${measurements.padding.container} * 2));
`;

class YouTubeVideoContainer extends Component {
  static fetchVideoFeed = () =>
    fetch('https://www.youtube.com/feeds/videos.xml?channel_id=UCL2p91rc87TExMrzvxd2CWg');

  static parseVideoFeed = async (res) => {
    const resString = await res.text();
    const parser = new DOMParser();
    const videoData = parser.parseFromString(resString, 'application/xml');
    // TODO: Transform into JS object
    console.log(videoData.documentElement.children);
    // TODO: Temporary video placeholder
    return {
      title: 'Cheating on Hypixel w/ Envy #1337',
      src: 'https://www.youtube.com/embed/TslbwDpTU_8',
    };
  };

  state = { loading: true };

  componentDidMount = () => {
    YouTubeVideoContainer.fetchVideoFeed()
      .then(YouTubeVideoContainer.parseVideoFeed)
      .then(
        video => this.setState({ loading: false, video }),
        error => this.setState({ loading: false, error }),
      );
  };

  render = () => <YouTubeVideo {...this.state} />;
}

const YouTubeVideo = ({ loading, video }) => {
  const renderLoading = () => <div>Loading...</div>;

  const renderError = () => <div>Video could not be loaded</div>;

  const renderVideo = () => {
    const { title, src } = video;
    return (
      <VideoEmbedContainer
        title={title}
        width="560"
        height="315"
        src={src}
        frameBorder="0"
        allowFullScreen
      />
    );
  };

  if (loading) {
    return renderLoading();
  } else if (video) {
    return renderVideo();
  }
  return renderError();
};

YouTubeVideo.propTypes = {
  loading: PropTypes.bool.isRequired,
  video: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }),
};

YouTubeVideo.defaultProps = {
  video: {
    title: '',
    src: '',
  },
};

const VideoPage = () => (
  <YouTubeVideoContainer />
  // <div>
  //   <VideoEmbed
  //     title="Cheating on Hypixel w/ Envy #1337"
  //     width="560"
  //     height="315"
  //     src="https://www.youtube.com/embed/TslbwDpTU_8"
  //     frameBorder="0"
  //     allowFullScreen
  //   />
  // </div>
);

export default VideoPage;
