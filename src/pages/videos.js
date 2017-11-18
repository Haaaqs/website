import React, { Component } from 'react';

import YouTubeVideo from '../components/YouTubeVideo';

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
    return videosInfo[0];
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

const VideoPage = () => (
  <YouTubeVideoContainer />
);

export default VideoPage;
