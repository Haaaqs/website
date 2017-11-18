import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { measurements } from '../data/values.styles';

const VideoEmbedContainer = styled.iframe`
  max-width: calc(100vw - (${measurements.padding.container} * 2));
  max-height: calc(100vh - (${measurements.padding.container} * 2));
`;

class YouTubeVideoContainer extends Component {
  static fetchVideoFeed = () => {
    // TODO: Using CORS proxy to bypass missing Access-Control-Allow-Origin header on feed
    const corsProxies = ['https://cors-anywhere.herokuapp.com/', 'https://cors.io/?'];
    const feedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCL2p91rc87TExMrzvxd2CWg';
    return fetch(`${corsProxies[0]}${feedUrl}`);
  };

  static flashToEmbed = (url) => {
    const embedUrl = 'https://www.youtube.com/embed/';
    const parser = document.createElement('a');
    parser.href = url;
    const videoId = parser.pathname.split('/').pop();
    return `${embedUrl}${videoId}`;
  };

  static getVideoInfoFromFeed = videoDom =>
    Array.from(videoDom.getElementsByTagName('entry'))
      .map(parent => Array.from(parent.children).find(child => child.tagName === 'media:group'))
      .map(parent =>
        Array.from(parent.children)
          // .filter(child => ['title', 'thumbnail', 'content'].includes(child.localName))
          .reduce((entry, media) => ({ ...entry, [media.localName]: media }), {}))
      .map(({ title, content, thumbnail }) => ({
        title: title.textContent,
        thumbnail: thumbnail.attributes.url.textContent,
        content: YouTubeVideoContainer.flashToEmbed(content.attributes.url.textContent),
      }));

  static parseVideoFeed = async (res) => {
    const videoData = await res.text();
    const parser = new DOMParser();
    const parsedVideoData = parser.parseFromString(videoData, 'application/xml');
    const videosDom = parsedVideoData.documentElement;
    const videosInfo = YouTubeVideoContainer.getVideoInfoFromFeed(videosDom);
    console.log(videosInfo);
    // TODO: Temporary video placeholder
    return {
      title: 'Cheating on Hypixel w/ Envy #1337',
      thumbnail: 'https://i1.ytimg.com/vi/TslbwDpTU_8/hqdefault.jpg',
      content: 'https://www.youtube.com/embed/TslbwDpTU_8',
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
    const { title, thumbnail, content } = video;
    return (
      <div>
        <img src={thumbnail} alt={title} />
        <VideoEmbedContainer
          title={title}
          width="560"
          height="315"
          src={content}
          frameBorder="0"
          allowFullScreen
        />
      </div>
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
    thumbnail: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

YouTubeVideo.defaultProps = {
  video: {
    title: '',
    thumbnail: '',
    content: '',
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
