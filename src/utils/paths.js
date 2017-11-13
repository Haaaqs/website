import { withPrefix } from 'gatsby-link';

const pathAsString = path => `${path}`;

export const isHomePath = path => pathAsString(path) === withPrefix('/');

export const pathToTitleCase = path =>
  pathAsString(path)
    // Remove all leading and trailing slashes from path
    .replace(/^\/+|\/+$/g, '')
    // Separate path by hyphen
    .split('-')
    // Convert each word in path to Title Case
    .map(s => `${s.substring(0, 1).toUpperCase()}${s.substring(1)}`)
    // Join all the separated words together with a space
    .join(' ');

export const getNavPaths = edges =>
  edges
    // Get the node path from each edge
    .map(edge => edge.node.path)
    // Filter out the root path and paths related to 404
    .filter(path => !(isHomePath(path) || path.includes('404')));
