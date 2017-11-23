import { CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components';

import { measurements } from '../data/values.css';

const classNames = 'lift-transition';
const timeout = 500;

const transitionStyle = css`
  transition-property: opacity, transform;
  transition-duration: ${timeout}ms;
  transition-timing-function: ease;
`;

const LiftTransition = styled(CSSTransition).attrs({
  classNames,
  timeout,
  appear: true,
  in: true,
})`
  &.${classNames}-appear {
    transform: translateY(${measurements.height.header});
    opacity: 0.1;
  }

  &.${classNames}-appear.${classNames}-appear-active {
    transform: translateY(0);
    opacity: 1;
    ${transitionStyle};
  }

  &.${classNames}-enter {
    transform: translateY(${measurements.height.header});
    opacity: 0.1;
  }

  &.${classNames}-enter.${classNames}-enter-active {
    transform: translateY(0);
    opacity: 1;
    ${transitionStyle};
  }

  &.${classNames}-exit {
    transform: translateY(0);
    opacity: 1;
  }

  &.${classNames}-exit.${classNames}-exit-active {
    transform: translateY(${measurements.height.header});
    opacity: 0.1;
    ${transitionStyle};
  }
`;

export default LiftTransition;
