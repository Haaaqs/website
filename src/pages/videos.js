import React, { Component } from 'react';

import YouTubeVideo from '../components/YouTubeVideo';

const { socialMedia, metadata: { label: videoFilter } } = require('../data/config.json');

const getPathnameSegment = (url) => {
  const parser = document.createElement('a');
  parser.href = url;
  const segments = parser.pathname.split('/');
  return segments.pop();
};

class YouTubeVideoContainer extends Component {
  // YouTube video feed helper functions

  static getYouTubeChannelUrl = () => socialMedia.find(social => social.id === 'youtube').link;

  static getYouTubeChannelId = () =>
    getPathnameSegment(YouTubeVideoContainer.getYouTubeChannelUrl());

  static getYouTubeFeedUrl = () => {
    const baseFeedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=';
    const channelId = YouTubeVideoContainer.getYouTubeChannelId();
    return `${baseFeedUrl}${channelId}`;
  };

  static fetchVideoFeed = () => {
    // TODO: Using CORS proxy to bypass missing Access-Control-Allow-Origin header on feed
    const corsProxies = ['https://cors-anywhere.herokuapp.com/', 'https://cors.io/?'];
    const feedUrl = YouTubeVideoContainer.getYouTubeFeedUrl();
    return fetch(`${corsProxies[0]}${feedUrl}`);
  };

  static getEmbedUrl = (url) => {
    const embedUrl = 'https://www.youtube.com/embed/';
    const videoId = getPathnameSegment(url);
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
        content: YouTubeVideoContainer.getEmbedUrl(content.attributes.url.textContent),
      }));

  static parseVideoFeed = async (res) => {
    const videoData = await res.text();
    const parsedVideoFeedData = (new DOMParser()).parseFromString(videoData, 'application/xml');
    const videoFeedDom = parsedVideoFeedData.documentElement;
    const videoFeedInfo = YouTubeVideoContainer.getVideoInfoFromFeed(videoFeedDom);
    return videoFeedInfo;
  };

  static filterVideos = async (res) => {
    const videoFeedInfo = await YouTubeVideoContainer.parseVideoFeed(res);
    const filteredVideoFeed = videoFeedInfo.filter(video => video.title.includes(videoFilter));
    return filteredVideoFeed;
  }

  // YouTube videos container rendering

  state = { loading: true, videos: null, error: null };

  componentDidMount = () => {
    YouTubeVideoContainer.fetchVideoFeed()
      .then(YouTubeVideoContainer.filterVideos)
      .then(
        videos => this.setState({ loading: false, videos }),
        error => this.setState({ loading: false, error }),
      );
  };

  render = () => {
    const { loading, videos, error } = this.state;
    return (
      <div>
        {videos !== null && videos.map((video) => {
          const videoProps = { loading, error, video };
          return <YouTubeVideo key={video.title} {...videoProps} />;
        })}
      </div>
    );
  };
}

const VideoPage = () => <YouTubeVideoContainer />;

export default VideoPage;
