const config = require('./src/data/config');

module.exports = {
  // Must not have trailing slash
  pathPrefix: config.pathPrefix.replace(/\/+$/g, ''),
  siteMetadata: {
    title: config.metadata.title,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // TODO: Set Google Analytics tracking ID (in config)
        trackingId: config.googleAnalyticsId,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.metadata.title,
        short_name: config.metadata.label,
        description: config.metadata.desc,
        start_url: config.pathPrefix,
        display: 'minimal-ui',
        theme_color: config.colors.theme,
        background_color: config.colors.background,
        // TODO: Add favicons
        icons: [],
      },
    },
    // 'gatsby-plugin-offline',
  ],
};
