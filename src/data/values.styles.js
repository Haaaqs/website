import { css } from 'styled-components';

const config = require('./config.json');

const asBoxShadow = (...shadows) =>
  css`
    box-shadow: ${shadows.join(', ')};
  `;

const values = {
  measurements: {
    height: {
      header: '6em',
    },
    padding: {
      container: '1.5em',
    },
  },
  // TODO: Change temporary colors placeholders
  colors: {
    primary: config.colors.theme,
    secondary: '#f4faf6',
    background: config.colors.background,
  },
  opacities: {
    primary: 0.87,
    secondary: 0.54,
  },
  shadows: {
    text: {},
    /* Shadow values (in dp)
      [https://github.com/PolymerElements/paper-styles/blob/master/shadow.html]
    */
    box: {
      2: asBoxShadow(
        '0 2px 2px 0 rgba(0, 0, 0, 0.14)',
        '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        '0 3px 1px -2px rgba(0, 0, 0, 0.2)',
      ),
      3: asBoxShadow(
        '0 3px 4px 0 rgba(0, 0, 0, 0.14)',
        '0 1px 8px 0 rgba(0, 0, 0, 0.12)',
        '0 3px 3px -2px rgba(0, 0, 0, 0.4)',
      ),
      4: asBoxShadow(
        '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
        '0 1px 10px 0 rgba(0, 0, 0, 0.12)',
        '0 2px 4px -1px rgba(0, 0, 0, 0.4)',
      ),
      6: asBoxShadow(
        '0 6px 10px 0 rgba(0, 0, 0, 0.14)',
        '0 1px 18px 0 rgba(0, 0, 0, 0.12)',
        '0 3px 5px -1px rgba(0, 0, 0, 0.4)',
      ),
      8: asBoxShadow(
        '0 8px 10px 1px rgba(0, 0, 0, 0.14)',
        '0 3px 14px 2px rgba(0, 0, 0, 0.12)',
        '0 5px 5px -3px rgba(0, 0, 0, 0.4)',
      ),
      12: asBoxShadow(
        '0 12px 16px 1px rgba(0, 0, 0, 0.14)',
        '0 4px 22px 3px rgba(0, 0, 0, 0.12)',
        '0 6px 7px -4px rgba(0, 0, 0, 0.4)',
      ),
      16: asBoxShadow(
        '0 16px 24px 2px rgba(0, 0, 0, 0.14)',
        '0 6px 30px 5px rgba(0, 0, 0, 0.12)',
        '0 8px 10px -5px rgba(0, 0, 0, 0.4)',
      ),
      24: asBoxShadow(
        '0 24px 38px 3px rgba(0, 0, 0, 0.14)',
        '0 9px 46px 8px rgba(0, 0, 0, 0.12)',
        '0 11px 15px -7px rgba(0, 0, 0, 0.4)',
      ),
    },
  },
};

export default values;
