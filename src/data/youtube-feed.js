const { social, metadata: { label: videoFilter } } = require('./config.json');

const baseUrl = {
  feed: 'https://www.youtube.com/feeds/videos.xml?channel_id=',
  embed: 'https://www.youtube.com/embed/',
};

const getPathnameId = (url) => {
  const parser = document.createElement('a');
  parser.href = url;
  const segments = parser.pathname.split('/');
  return segments.pop();
};

const getChannelUrl = () => social.find(({ id }) => id === 'youtube').link;

const getChannelId = () => getPathnameId(getChannelUrl());

const getFeedUrl = () => {
  const channelId = getChannelId();
  return `${baseUrl.feed}${channelId}`;
};

const fetchVideoFeed = () => {
  // TODO: Using CORS proxy to bypass missing Access-Control-Allow-Origin header on feed
  // 'http://cors-proxy.htmldriven.com/?url=' requires JSON parsing for the body
  const corsProxies = [
    'https://cors-anywhere.herokuapp.com/',
    'https://crossorigin.me/',
    'https://cors.io/?',
  ];
  const feedUrl = getFeedUrl();
  return fetch(`${corsProxies[0]}${feedUrl}`);
};

const parseVideoFeedDom = videoFeedDom =>
  Array.from(videoFeedDom.getElementsByTagName('entry'))
    .map(({ children }) => Array.from(children).find(({ tagName }) => tagName === 'media:group'))
    .map(({ children }) =>
      Array.from(children)
        // .filter(({ localName }) => ['title', 'thumbnail', 'content'].includes(localName))
        .reduce((entry, media) => ({ ...entry, [media.localName]: media }), {}))
    .map(({ title, content, thumbnail }) => {
      const videoId = getPathnameId(content.attributes.url.textContent);
      return {
        id: videoId,
        title: title.textContent,
        thumbnail: thumbnail.attributes.url.textContent,
        content: `${baseUrl.embed}${videoId}`,
      };
    });

const parseVideoFeed = feedResponse => feedResponse.text().then((videoFeedData) => {
  const parsedVideoFeedData = new DOMParser().parseFromString(videoFeedData, 'application/xml');
  const videoFeedDom = parsedVideoFeedData.documentElement;
  const videoFeedInfo = parseVideoFeedDom(videoFeedDom);
  return videoFeedInfo;
});

const filterVideos = feedResponse => parseVideoFeed(feedResponse).then((videoFeedInfo) => {
  const filteredVideoFeed = videoFeedInfo.filter(({ title }) => title.includes(videoFilter));
  return filteredVideoFeed;
});

const fetchVideos = () => fetchVideoFeed().then(videos => filterVideos(videos));

export default fetchVideos;
