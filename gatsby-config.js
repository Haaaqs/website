const config = require('./src/data/config');

// Must not have trailing slash
const pathPrefix = config.pathPrefix.replace(/\/+$/g, '');

module.exports = {
  // Include pathPrefix if it is not empty
  ...((pathPrefix !== '') && { pathPrefix }),
  siteMetadata: {
    title: config.metadata.title,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
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
