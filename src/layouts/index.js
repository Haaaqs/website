import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import './index.styles';

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet
      title="Gatsby Default Starter"
    />
    <Header />
    <Content>
      {children()}
    </Content>
    <Footer />
  </Wrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
