import React from 'react';
import PropTypes from 'prop-types';
import icons from './icons';

const Icon = props => {
  const { name, size, ...svgProps } = props;
  const computedSize = size || '1em';
  const Svg = icons[name];
  return (
    <Svg
      style={{ color: props.color, ...props.style }}
      height={computedSize}
      width={computedSize}
      {...svgProps}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string
};

Icon.defaultProps = {};

export default Icon;

export { Icon };
