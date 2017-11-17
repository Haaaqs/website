import { strip } from './strings';

const { fonts } = require('../data/config.json');

export const getFontFamilies = () =>
  fonts.reduce((families, font) => families.concat(`'${font.family}'`), []);

const getFontFamilyImport = font => `${font.family.replace(' ', '+')}:${font.variants.join(',')}`;

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
