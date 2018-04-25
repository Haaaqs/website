import { css, injectGlobal } from 'styled-components';

import { medias, measurements, colors, opacities, fonts, shadows, transitions } from '../data/values.css';

const selectionStyle = css`
  background: ${colors.primary};
  color: ${colors.secondary};
  text-shadow: none;
`;

const index = injectGlobal`
  ::-moz-selection {
    ${selectionStyle};
  }

  ::selection {
    ${selectionStyle};
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
    ${fonts.stack};
    height: 100%;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    opacity: ${opacities.primary};
    ${transitions.set('opacity', 'box-shadow')};

    &:hover {
      opacity: 1;
    }

    &[role='button'] {
      padding: 1em 1.5em;
      text-transform: lowercase;
      background: ${colors.primary};
      color: ${colors.secondary};
      border-radius: ${measurements.border.button};
      ${shadows.box[2]}

      &:hover {
        ${shadows.box[8]};
      }
    }
  }

  ${medias.mobile`
    body {
      font-size: 14px;
    }
  `}
`;

export default index;
