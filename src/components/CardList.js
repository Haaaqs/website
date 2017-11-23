import React, { Component } from 'react';
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
  transition-delay: ${({ delayFactor }) =>
    (delayFactor ? `${delayFactor * (timeoutFactor / 2)}ms` : 0)};
`;

const CardLiftTransition = styled(CSSTransition).attrs({
  classNames,
})`
  &.${classNames}-appear {
    transform: translateY(${measurements.height.header});
    opacity: 0.1;

    &.${classNames}-appear-active {
    transform: translateY(0);
    opacity: 1;
    ${transitionStyle};
  }
`;

// &.${classNames}-enter {
//   transform: translateY(${measurements.height.header});
//   opacity: 0.1;

//   &.${classNames}-enter-active {
//   transform: translateY(0);
//   opacity: 1;
//   ${transitionStyle};
// }

// &.${classNames}-exit {
//   transform: translateY(0);
//   opacity: 1;

//   &.${classNames}-exit-active {
//   transform: translateY(${measurements.height.header});
//   opacity: 0.1;
//   ${transitionStyle};
// }

// eslint-disable-next-line react/prefer-stateless-function
class CardList extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    // children: PropTypes.oneOfType(
    //   PropTypes.node,
    //   PropTypes.arrayOf(PropTypes.node),
    // ).isRequired,
  };

  // FIXME: Not working for image components (sponsors, videos)
  render = () => {
    const { children } = this.props;
    const timeout = children.length * timeoutFactor;
    return (
      <TransitionGroup appear in>
        {children.map((node, i) => (
          <CardLiftTransition timeout={timeout} delayFactor={i}>
            {node}
          </CardLiftTransition>
        ))}
      </TransitionGroup>
    );
  };
}

export default CardList;
