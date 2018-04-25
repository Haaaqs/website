import React, { Component } from 'react';

import CardList from '../components/CardList';
import YouTubeVideo from '../components/YouTubeVideo';

import fetchYouTubeVideos from '../data/youtube-feed';

class YouTubeVideoContainer extends Component {
  state = { loading: true, videos: null, error: null };

  componentDidMount = () => {
    this.mounted = true;

    fetchYouTubeVideos()
      .then((videos) => {
        this.setStateIfMounted({ loading: false, videos });
      })
      .catch((error) => {
        this.setStateIfMounted({ loading: false, error });
      });
  };

  componentWillUnmount = () => {
    this.mounted = false;
  };

  setStateIfMounted = (state) => {
    if (this.mounted) {
      this.setState(state);
    }
  };

  mounted = false;

  render = () => {
    const { loading, videos, error } = this.state;
    return (
      <CardList>
        {videos === null ? (
          <YouTubeVideo {...this.state} />
        ) : (
          videos.map(({ id, title, thumbnail, content }) => {
            const props = { loading, error, video: { title, thumbnail, content } };
            return <YouTubeVideo key={id} {...props} />;
          })
        )}
      </CardList>
    );
  };
}

const VideoPage = () => <YouTubeVideoContainer />;

export default VideoPage;
