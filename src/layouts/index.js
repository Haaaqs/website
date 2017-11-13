import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { isHomePath, pathToTitleCase, getNavPaths } from '../utils/paths';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import './index.styles';

const title = (page, site) => {
  const separator = (page === '') ? '' : ' | ';
  return `${page}${separator}${site}`;
};

const TemplateWrapper = ({ children, location, data }) => (
  <Wrapper>
    <Helmet
      title={title(
        pathToTitleCase(location.pathname),
        data.site.siteMetadata.title,
      )}
    />
    <Header
      routes={getNavPaths(data.allSitePage.edges)}
      transparent={isHomePath(location.pathname)}
    />
    <Content title={pathToTitleCase(location.pathname)}>
      {children()}
    </Content>
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
