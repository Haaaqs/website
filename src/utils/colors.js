/* Taken and modified from:
   https://gist.github.com/Arahnoid/9923989 */

const rgbComponentToHex = (c) => {
  const hex = c.toString(16);
  return hex.padStart(2, '0');
};

export const rgbToHex = ({ r, g, b }) =>
  `#${rgbComponentToHex(r)}${rgbComponentToHex(g)}${rgbComponentToHex(b)}`;

const asFullHex = (hex) => {
  const shortHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  return hex.replace(shortHexRegex, (m, r, g, b) => `${r}${r}${g}${g}${b}${b}`);
};

export const hexToRgb = (hex, alpha = 1) => {
  const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const [, red, green, blue] = hexRegex.exec(asFullHex(hex));
  return {
    r: parseInt(red, 16),
    g: parseInt(green, 16),
    b: parseInt(blue, 16),
    a: alpha,
  };
};
