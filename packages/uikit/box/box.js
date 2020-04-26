import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import _get from 'lodash/get';

import styles from './box.scss';

export const justifies = ['center', 'left', 'right', 'around', 'between', 'start', 'end'];
export const directions = ['row', 'column', 'row-reverse', 'column-reverse'];
export const aligns = ['center', 'start', 'end', 'baseline'];
export const columns = ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl'];
export const sizes = ['xs', 's', 'm', 'ms', 'l', 'xl', 'xxl'];
const sizesValue = {
  xs: 4,
  s: 8,
  m: 16,
  ms: 24,
  l: 32,
  xl: 64,
  xxl: 128
};

const Box = props => {
  const {
    component: Component,
    className,
    margin,
    top,
    bottom,
    left,
    right,
    justify,
    align,
    padding,
    direction,
    inject,
    flex,
    wrap,
    fullWidth,
    width,
    flexGrow,
    flexBasis,
    flexShrink,
    order,
    style: propStyles,
    children,
    danger,
    ...rest
  } = props;
  const classes = cn(styles.box, className, {
    [styles[`justify_${justify}`]]: !!justify,
    [styles[`align_${align}`]]: !!align,
    [styles.wrap]: !!wrap,
    [styles.fullWidth]: !!fullWidth,
    [styles[`width_${width}`]]: !!width
  });

  const inlineStyles = {
    marginTop: _get(sizesValue, top),
    marginBottom: _get(sizesValue, bottom),
    marginLeft: _get(sizesValue, left),
    marginRight: _get(sizesValue, right),
    flexDirection: direction,
    order,
    flex,
    ...propStyles
  };

  if (flexGrow !== undefined) {
    inlineStyles.flexGrow = flexGrow;
  }

  if (flexBasis !== undefined) {
    inlineStyles.flexBasis = flexBasis;
  }

  if (flexShrink !== undefined) {
    inlineStyles.flexShrink = flexShrink;
  }

  if (padding) {
    if (!padding.includes(' ')) {
      inlineStyles.padding = sizesValue[padding];
    } else {
      inlineStyles.padding = padding
        .split(' ')
        .reduce((acc, s) => (acc += s !== '0' ? `${sizesValue[s]}px ` : '0 '), '');
    }
  }

  if (margin) {
    if (!margin.includes(' ')) {
      inlineStyles.margin = sizesValue[margin];
    } else {
      inlineStyles.margin = margin.split(' ').reduce((acc, s) => (acc += s !== '0' ? `${sizesValue[s]}px ` : '0 '), '');
    }
  }

  if (inject && !Array.isArray(children)) {
    return React.cloneElement(children, {
      className: classes,
      style: inlineStyles
    });
  }

  if (danger) {
    return (
      <Component {...rest} dangerouslySetInnerHTML={{ __html: children }} className={classes} style={inlineStyles} />
    );
  }

  return (
    <Component className={classes} style={inlineStyles} {...rest}>
      {children}
    </Component>
  );
};

Box.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  top: PropTypes.oneOf(sizes),
  bottom: PropTypes.oneOf(sizes),
  left: PropTypes.oneOf(sizes),
  right: PropTypes.oneOf(sizes),
  width: PropTypes.oneOf(columns),
  justify: PropTypes.oneOf(justifies),
  align: PropTypes.oneOf(aligns),
  padding: PropTypes.string,
  margin: PropTypes.string,
  direction: PropTypes.oneOf(directions),
  flex: PropTypes.string,
  flexGrow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexShrink: PropTypes.number,
  fullWidth: PropTypes.bool,
  inject: PropTypes.bool,
  danger: PropTypes.bool,
  wrap: PropTypes.bool,
  order: PropTypes.number
};

Box.defaultProps = {
  component: 'div',
  fullWidth: false
};

export default Box;
