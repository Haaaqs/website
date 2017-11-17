import { strip } from './strings';

const { pathPrefix } = require('../data/config.json');

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
  // Remove all leading and trailing slashes from path
  strip(stripPathPrefix(path), '/')
    // Separate path by hyphen
    .split('-')
    // Convert each word in path to Title Case
    .map(s => `${s.charAt(0).toUpperCase()}${s.slice(1)}`)
    // Join all the separated words together with a space
    .join(' ');

export const getNavPaths = edges =>
  edges
    // Get the node path from each edge
    .map(edge => edge.node.path)
    // Filter out the root path and paths related to 404
    .filter(path => !(isHomePath(path) || path.includes('404')));
