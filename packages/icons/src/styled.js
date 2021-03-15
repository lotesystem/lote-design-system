import styled from 'styled-components';
import css from '@styled-system/css';
import get from '@styled-system/theme-get';

import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose
} from 'styled-system';

export const systemProps = compose(
  layout,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox
);

const Box = styled.div`
  ${systemProps}
`;

export const StyledIconWrapper = styled(Box).attrs({
  as: 'span'
})`
  font-size: ${props => get(`sizes.${props.size}`, props.size)};
  ${props =>
    css({
      display: 'inline-block',
      lineHeight: 0,
      verticalAlign: 'top',
      color: props.color
    })}
`;
