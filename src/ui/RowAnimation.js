// @flow
import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const regular = keyframes`
from {
    opacity: 0;
    transform: translateY(20px);
}

to {
    opacity: 1;
    transform: translateY(0px);
}
`;

const right = keyframes`
from {
    opacity: 0;
    transform: translateX(20px);
}

to {
    opacity: 1;
    transform: translateY(0px);
}
`;

const animations = {
  regular,
  right
};

const Row = styled.div`
  opacity: 0;
  animation: ${props => animations[props.animation]} 0.4s ease forwards;
  animation-delay: ${props => (props.index / 5) + props.delay}s;
`;

type Props = {
  index: ?number,
  children: React.Node,
  animation: 'regular' | 'right' | void,
  delay: ?number
};

const RowAnimation = (props: Props) => {
  const {
    animation = 'regular',
    delay = 0,
    index = 0,
    children
  } = props;
  return (
    <Row animation={animation} delay={delay} index={index}>
      {children}
    </Row>
  );
};

export default RowAnimation;
