import { css, injectGlobal } from 'styled-components';

import { media, measurements, colors, opacities, font } from '../data/values.styles';

const selectionStyle = css`
  background: ${colors.primary};
  color: ${colors.secondary};
  text-shadow: none;
`;

const index = injectGlobal`
  ::-moz-selection {
    ${selectionStyle}
  }

  ::selection {
    ${selectionStyle}
  }

  /*
    Accounts for content under fixed header with site anchors
    (Might not work with the padding on Content, but we don't use anchors on this site anyways)
  */
  :target::before {
    content: '';
    display: block;
    visibility: hidden;
    height: ${measurements.height.header};
    margin-top: ${`-${measurements.height.header}`};
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
    ${font.stack};
    scroll-behavior: smooth;

    font-size: 1em;
    ${media.mobile`
      font-size: 0.75em;
    `};
  }

  a {
    text-decoration: none;
    color: inherit;
    /* For SVG anchors */
    fill: inherit;
    stroke: inherit;

    /* TODO: This is only a temporary change to distinguish between regular text and anchors */
    opacity: ${opacities.primary};
    &:hover {
      opacity: 1;
    }
  }

  svg {
    fill: currentColor;
    stroke: currentColor;
    stroke-width: 0;
  }
`;

export default index;
