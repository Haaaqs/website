import { injectGlobal } from 'styled-components';

import { colors, measurements } from '../data/values.styles';

const index = injectGlobal`
  ::selection {
    color: ${colors.primary};
    background-color: ${colors.secondary};
  }

  :target::before {
    content: '';
    display: block;
    visibility: hidden;
    height: ${measurements.height.header};
    margin-top: calc(-1 * ${measurements.height.header});
  }

  html {
    box-sizing: border-box;
    background: ${colors.primary};
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    scroll-behavior: smooth;
  }
`;

export default index;
