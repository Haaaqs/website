import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components';

import { measurements } from '../data/values.css';

const classNames = 'lift-transition';
const timeoutFactor = 250;

const transitionStyle = css`
  transition-property: opacity, transform;
  transition-duration: ${({ timeout }) => `${(timeout / timeoutFactor) * 100}ms`};
  transition-timing-function: ease;
  transition-delay: ${({ index = 0 }) => `${index * (timeoutFactor / 2)}ms`};
`;

// FIXME: Allow transition to enter and exit when component mounted and unmounted
const LiftTransition = styled(CSSTransition).attrs({
  classNames,
  timeout: ({ timeout }) => timeout || timeoutFactor,
})`
  &.${classNames} {
    &-appear {
      transform: translateY(${measurements.height.header});
      opacity: 0;

      &&-active {
      transform: translateY(0);
      opacity: 1;
      ${transitionStyle};
    }

    &-enter {
      transform: translateY(${measurements.height.header});
      opacity: 0.1;

      &&-active {
      transform: translateY(0);
      opacity: 1;
      ${transitionStyle};
    }

    &-exit {
      transform: translateY(0);
      opacity: 1;

      &&-active {
      transform: translateY(${measurements.height.header});
      opacity: 0.1;
      ${transitionStyle};
    }
  }
`;

// FIXME: Not working well with videos
const CardList = ({ children, ...props }) => (
  <TransitionGroup appear {...props}>
    {Children.map(children, (child, i) => (
      <LiftTransition
        key={child.key || i}
        timeout={children.length * timeoutFactor}
        index={i}
      >
        {child}
      </LiftTransition>
    ))}
  </TransitionGroup>
);

CardList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default CardList;
