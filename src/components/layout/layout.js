import React from 'react';
import { shape, object, node, string } from 'prop-types';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';

import { deIndent } from '../../utils/strings';
import { getFontImport } from '../../utils/fonts';
import { isHomePath, pathToTitleCase, getEdgePaths } from '../../utils/paths';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import GlobalStyle from './layout.css';

const {
  metadata: { desc: siteDescription },
  analyticsId,
  pages,
  colors: { theme: themeColor },
} = require('../../data/config.json');

const googleAnalyticsScript = [
  {
    async: true,
    src: 'https://www.googletagmanager.com/gtag/js?id=UA-110415716-1',
  },
  {
    innerHTML: deIndent`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${analyticsId}');
    `,
  },
];

const googleAdSenseScript = [
  {
    async: true,
    src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  },
  {
    innerHTML: deIndent`
      (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-1721608899854972",
        enable_page_level_ads: true
      });
    `,
  },
];

const metaTitle = (page, site) => {
  const separator = page === '' ? '' : ' | ';
  return `${page}${separator}${site}`;
};

const getRouteLinks = (edges) => {
  const allPaths = getEdgePaths(edges);
  const paths = pages
    .map((page) => `/${page.toLowerCase()}/`)
    .filter((page) => allPaths.includes(page));
  return paths;
};

const TemplateWrapper = ({ children, location }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={(data) => (
      <Wrapper>
        <GlobalStyle />
        <Helmet
          title={metaTitle(pathToTitleCase(location.pathname), data.site.siteMetadata.title)}
          meta={[{ name: 'description', content: `${siteDescription}` }]}
          link={[
            getFontImport(),
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: withPrefix('/favicon-32x32.png'),
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: withPrefix('/favicon-16x16.png'),
            },
            {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: withPrefix('/apple-touch-icon.png'),
            },
            { rel: 'mask-icon', color: themeColor, href: withPrefix('/safari-pinned-tab.svg') },
          ]}
          script={[].concat(...[googleAnalyticsScript, googleAdSenseScript])}
        />
        <Header
          routes={getRouteLinks(data.allSitePage.edges)}
          home={isHomePath(location.pathname)}
        />
        <Content title={pathToTitleCase(location.pathname)}>{children}</Content>
        <Footer />
      </Wrapper>
    )}
  />
);

TemplateWrapper.propTypes = {
  children: node.isRequired,
  location: shape({
    hash: string,
    pathname: string,
    search: string,
    state: object,
  }).isRequired,
};

TemplateWrapper.defaultProps = {
};

export default TemplateWrapper;
