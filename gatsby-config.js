const config = require('./src/data/config');

const pathPrefix = config.pathPrefix.replace(/\/+$/g, '');

module.exports = {
  ...((pathPrefix !== '') && { pathPrefix }),
  siteMetadata: {
    title: config.metadata.title,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.colors.theme,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.metadata.title,
        short_name: config.metadata.label,
        description: config.metadata.desc,
        start_url: config.pathPrefix,
        display: 'standalone',
        theme_color: config.colors.theme,
        background_color: config.colors.background,
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    // 'gatsby-plugin-offline',
  ],
};
