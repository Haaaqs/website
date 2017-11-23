import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { getFontImport } from '../utils/fonts';
import { isHomePath, pathToTitleCase, getNavPaths } from '../utils/paths';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import './index.css';

const { colors: { theme: themeColor } } = require('../data/config.json');

const title = (page, site) => {
  const separator = page === '' ? '' : ' | ';
  return `${page}${separator}${site}`;
};

const TemplateWrapper = ({ children, location, data }) => (
  <Wrapper>
    <Helmet
      title={title(pathToTitleCase(location.pathname), data.site.siteMetadata.title)}
      link={[
        getFontImport(),
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: themeColor },
      ]}
    />
    {/* TODO: Routes navigation should be in the order of:
        Features
        Sponsors
        Credits
        Videos
        Download
    */}
    <Header routes={getNavPaths(data.allSitePage.edges)} home={isHomePath(location.pathname)} />
    <Content title={pathToTitleCase(location.pathname)}>{children()}</Content>
    <Footer />
  </Wrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.object,
  }).isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
    allSitePage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            path: PropTypes.string,
          }),
        }),
      ),
    }),
  }),
};

TemplateWrapper.defaultProps = {
  data: {
    site: {
      siteMetadata: {
        title: '',
      },
    },
    allSitePage: {
      edges: [
        {
          node: {
            path: '',
          },
        },
      ],
    },
  },
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query SiteLookup {
    site {
      siteMetadata {
        title
      }
    }
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;
