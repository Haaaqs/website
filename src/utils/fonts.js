import { strip } from './strings';

const { fonts } = require('../data/config.json');

export const getFontFamilies = () =>
  fonts.reduce((families, { family }) => families.concat(`'${family}'`), []);

const getFontFamilyImport = ({ family, variants }) =>
  `${family.replace(' ', '+')}:${variants.join(',')}`;

const buildFontImport = () => {
  const rel = 'stylesheet';
  const baseHref = 'https://fonts.googleapis.com/css?family=';
  const familiesHref = strip(
    fonts.reduce((families, font) => `${families}|${getFontFamilyImport(font)}`, ''),
    '|',
  );
  const href = `${baseHref}${familiesHref}`;
  return {
    rel,
    href,
  };
};

export const getFontImport = () => (fonts.length === 0 ? null : buildFontImport());
