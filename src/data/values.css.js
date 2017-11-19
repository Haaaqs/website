import { css } from 'styled-components';

import { joinAsString } from '../utils/strings';
import { getFontFamilies } from '../utils/fonts';

const config = require('./config.json');

const pxToEm = px => `${px / 16}em`;

const asBoxShadowStyle = (...shadows) =>
  css`
    box-shadow: ${joinAsString(shadows)};
  `;

const asFontFamilyStyle = (...fontStack) =>
  css`
    font-family: ${joinAsString(fontStack)};
  `;

const values = {
  media: {
    mobile: (...args) => css`
      @media (max-width: 576px) {
        ${css(...args)}
      }
    `,
  },
  measurements: {
    unit: pxToEm(1),
    width: {
      player: pxToEm(560),
    },
    height: {
      header: pxToEm(72),
      icon: pxToEm(24),
    },
    padding: {
      container: pxToEm(24),
    },
    border: {
      card: pxToEm(4),
      circle: '50%',
    },
  },
  colors: {
    primary: config.colors.theme,
    secondary: '#f4faf6',
    background: config.colors.background,
  },
  opacities: {
    primary: 0.87,
    secondary: 0.54,
    hint: 0.38,
    faint: 0.12,
  },
  fonts: {
    stack: asFontFamilyStyle(getFontFamilies(), 'sans-serif'),
    sizes: {
      16: pxToEm(16),
      14: pxToEm(14),
      12: pxToEm(12),
      18: pxToEm(18),
    },
  },
  shadows: {
    text: {},
    /* Shadow values (in dp)
      [https://github.com/PolymerElements/paper-styles/blob/master/shadow.html]
    */
    box: {
      2: asBoxShadowStyle(
        '0 2px 2px 0 rgba(0, 0, 0, 0.14)',
        '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        '0 3px 1px -2px rgba(0, 0, 0, 0.2)',
      ),
      3: asBoxShadowStyle(
        '0 3px 4px 0 rgba(0, 0, 0, 0.14)',
        '0 1px 8px 0 rgba(0, 0, 0, 0.12)',
        '0 3px 3px -2px rgba(0, 0, 0, 0.4)',
      ),
      4: asBoxShadowStyle(
        '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
        '0 1px 10px 0 rgba(0, 0, 0, 0.12)',
        '0 2px 4px -1px rgba(0, 0, 0, 0.4)',
      ),
      6: asBoxShadowStyle(
        '0 6px 10px 0 rgba(0, 0, 0, 0.14)',
        '0 1px 18px 0 rgba(0, 0, 0, 0.12)',
        '0 3px 5px -1px rgba(0, 0, 0, 0.4)',
      ),
      8: asBoxShadowStyle(
        '0 8px 10px 1px rgba(0, 0, 0, 0.14)',
        '0 3px 14px 2px rgba(0, 0, 0, 0.12)',
        '0 5px 5px -3px rgba(0, 0, 0, 0.4)',
      ),
      12: asBoxShadowStyle(
        '0 12px 16px 1px rgba(0, 0, 0, 0.14)',
        '0 4px 22px 3px rgba(0, 0, 0, 0.12)',
        '0 6px 7px -4px rgba(0, 0, 0, 0.4)',
      ),
      16: asBoxShadowStyle(
        '0 16px 24px 2px rgba(0, 0, 0, 0.14)',
        '0 6px 30px 5px rgba(0, 0, 0, 0.12)',
        '0 8px 10px -5px rgba(0, 0, 0, 0.4)',
      ),
      24: asBoxShadowStyle(
        '0 24px 38px 3px rgba(0, 0, 0, 0.14)',
        '0 9px 46px 8px rgba(0, 0, 0, 0.12)',
        '0 11px 15px -7px rgba(0, 0, 0, 0.4)',
      ),
    },
  },
};

export default values;
