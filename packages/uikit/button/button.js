import React from 'react';
import PropTypes from 'prop-types';
import _omit from 'lodash/omit';
import cn from 'classnames';
import Box from '@pinua/uikit/box';
import _get from 'lodash/get';

import styles from './button.scss';

export const colors = ['primary', 'secondary', 'tertiary', 'transparent', 'info', 'warn', 'danger'];
export const sizes = ['s', 'm', 'l', 'xl'];
const sizesValue = {
  s: 8,
  m: 16,
  ms: 24,
  l: 32,
  xl: 64,
  xxl: 128
};

export const actionTypes = ['navigational', 'danger', 'success', 'neutral'];

const Button = ({
  top,
  left,
  right,
  bottom,
  circle,
  className,
  contentClass,
  color,
  rounded,
  premium,
  size,
  component: Component,
  loading,
  children,
  iconLeft,
  iconTop,
  iconRight,
  fullWidth,
  width,
  actionType,
  disabled,
  noWrap,
  compact,
  iconOnly,
  ...props
}) => {
  const type = Component === 'button' ? 'button' : null;
  const isDisabled = loading || disabled;

  const classes = cn(styles.button, styles[color], styles[size], styles[actionType], className, {
    [styles.disabled]: isDisabled,
    [styles.circle]: circle,
    [styles.rounded]: rounded,
    [styles.premiumMod]: premium,
    [styles.vertical]: iconTop,
    [styles.fullWidth]: fullWidth,
    [styles[`width-${width}`]]: width,
    [styles.noWrap]: noWrap,
    [styles.compact]: compact,
    [styles.iconOnly]: iconOnly
  });

  const inlineStyles = {
    marginTop: _get(sizesValue, top),
    marginBottom: _get(sizesValue, bottom),
    marginLeft: _get(sizesValue, left),
    marginRight: _get(sizesValue, right)
  };

  const iconBefore = iconLeft || iconTop;

  return (
    <Component
      className={classes}
      style={inlineStyles}
      type={type}
      disabled={isDisabled}
      {..._omit(props, 'highlighted')}
    >
      {iconBefore && (
        <Box
          component="span"
          className={cn({
            [styles.iconLeft]: iconLeft,
            [styles.iconTop]: iconTop
          })}
        >
          {iconBefore}
        </Box>
      )}
      {children && (
        <Box component="span" className={cn(styles.content, contentClass)}>
          {children}
        </Box>
      )}
      {iconRight && !iconTop && (
        <Box component="span" className={styles.iconRight}>
          {iconRight}
        </Box>
      )}
    </Component>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  contentClass: PropTypes.string,
  top: PropTypes.oneOf(sizes),
  bottom: PropTypes.oneOf(sizes),
  left: PropTypes.oneOf(sizes),
  right: PropTypes.oneOf(sizes),
  circle: PropTypes.bool,
  color: PropTypes.oneOf(colors),
  rounded: PropTypes.bool,
  premium: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  loading: PropTypes.bool,
  iconLeft: PropTypes.element,
  iconTop: PropTypes.element,
  iconRight: PropTypes.element,
  fullWidth: PropTypes.bool,
  width: PropTypes.oneOf(sizes),
  actionType: PropTypes.oneOf(actionTypes),
  disabled: PropTypes.bool,
  noWrap: PropTypes.bool,
  compact: PropTypes.bool,
  iconOnly: PropTypes.bool
};

Button.defaultProps = {
  circle: false,
  color: 'primary',
  rounded: false,
  size: 'm',
  component: 'button',
  actionType: 'navigational'
};

export default Button;
