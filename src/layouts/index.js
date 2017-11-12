import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import './index.styles';

const isHomePath = path => path === '/';

const getRoutes = edges =>
  edges
    // Get the node path from each edge
    .map(edge => edge.node.path)
    // Filter out root route and routes related to 404 from the node path
    .filter(path => !(isHomePath(path) || path.includes('404')));

const TemplateWrapper = ({ children, location, data }) => (
  <Wrapper>
    <Helmet title={data.site.siteMetadata.title} />
    <Header
      routes={getRoutes(data.allSitePage.edges)}
      transparent={isHomePath(location.pathname)}
    />
    <Content>{children()}</Content>
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
