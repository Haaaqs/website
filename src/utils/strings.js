const escapeRegexChars = (str) => {
  const escapedChars = '[\\^$.|?*+(){}'.split('');
  return str
    .split('')
    .reduce((escapedStr, ch) => `${escapedStr}${escapedChars.includes(ch) ? `\\${ch}` : ch}`, '');
};

export const strip = (str, ch = ' ') => {
  const stripChar = escapeRegexChars(ch);
  const stripRegex = new RegExp(`^(${stripChar})+|(${stripChar})+$`, 'g');
  return str.replace(stripRegex, '');
};

export const joinAsString = (arr, delimiter = ',') => strip(arr.join(delimiter), delimiter).trim();
