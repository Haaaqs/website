import { strip } from './strings';

const { pathPrefix } = require('../data/config.json');

const toTitleCase = s => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;

const pathAsString = path => `${path}`;

const stripPathPrefix = (path) => {
  const pathString = pathAsString(path);
  return pathString.startsWith(pathPrefix) ?
    pathString.slice(pathPrefix.length) :
    pathString;
};

export const isHomePath = path =>
  stripPathPrefix(path) === '/';

export const pathToTitleCase = path =>
  strip(stripPathPrefix(path), '/')
    .split('.')[0]
    .split('-')
    .map(toTitleCase)
    .join(' ');

export const getNavPaths = edges =>
  edges
    .map(edge => edge.node.path)
    .filter(path => !(isHomePath(path) || path.includes('404')));
