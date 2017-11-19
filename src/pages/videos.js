import React, { Component } from 'react';

import YouTubeVideo from '../components/YouTubeVideo';

import fetchYouTubeVideos from '../data/youtube-feed';

class YouTubeVideoContainer extends Component {
  state = { loading: true, videos: null, error: null };

  componentDidMount = () => {
    fetchYouTubeVideos().then(
      videos => this.setState({ loading: false, videos }),
      error => this.setState({ loading: false, error }),
    );
  };

  render = () => {
    const { loading, videos, error } = this.state;
    return (
      <div>
        {videos !== null &&
          videos.map(({ id, title, thumbnail, content }) => {
            const videoProps = { loading, error, video: { title, thumbnail, content } };
            return <YouTubeVideo key={id} {...videoProps} />;
          })}
      </div>
    );
  };
}

const VideoPage = () => <YouTubeVideoContainer />;

export default VideoPage;
