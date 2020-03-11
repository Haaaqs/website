import React, { Component } from 'react';

import Layout from '../components/layout/layout';

import CardList from '../components/CardList';
import YouTubeVideo from '../components/YouTubeVideo';

import fetchYouTubeChannelVideos from '../data/youtube-feed';

class YouTubeVideoContainer extends Component {
  state = { isLoading: true, videos: null, error: null };

  componentDidMount = () => {
    this.mounted = true;

    Promise.all(fetchYouTubeChannelVideos())
      .then((channels) => {
        const videos = channels.flat();
        this.setStateIfMounted({ isLoading: false, videos });
      })
      .catch((error) => {
        this.setStateIfMounted({ isLoading: false, error });
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
    const { isLoading, videos, error } = this.state;
    return (
      <CardList>
        {videos === null ? (
          <YouTubeVideo {...this.state} />
        ) : (
          videos.map(({ id, title, thumbnail, content }) => {
            const props = { isLoading, error, video: { title, thumbnail, content } };
            return <YouTubeVideo key={id} {...props} />;
          })
        )}
      </CardList>
    );
  };
}

const VideoPage = ({ children, location }) => (
  <Layout children={children} location={location}>
    <YouTubeVideoContainer />
  </Layout>
);

export default VideoPage;
