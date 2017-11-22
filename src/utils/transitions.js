/*
  From: https://github.com/gatsbyjs/gatsby/blob/master/examples/using-page-transitions/src/utils/getTransitionStyle.js
*/

import { measurements } from '../data/values.css';

const transitionStyles = timeout => ({
  entering: {
    transform: `translateY(${measurements.height.header})`,
    opacity: 0.1,
  },
  entered: {
    transition: `transform ${timeout}ms ease-out, opacity ${timeout}ms ease-out`,
    opacity: 1,
    transform: 'translateY(0)',
  },
  exiting: {
    transition: `transform ${timeout}ms ease-out, opacity ${timeout}ms ease-in`,
    opacity: 0.1,
    transform: `translateY(calc(-1 * (${measurements.height.header} / 2)))`,
  },
});

const transitions = ({ timeout, status }) => transitionStyles(timeout)[status];

export default transitions;
