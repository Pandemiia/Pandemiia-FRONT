import React from 'react';
import PropTypes from 'prop-types';
import _omit from 'lodash/omit';
import cn from 'classnames';
import Box from '../box';

import styles from './button.scss';

export const intents = ['primary', 'secondary', 'tertiary', 'transparent', 'danger'];
export const sizes = ['s', 'm', 'l', 'xl'];

export const actionTypes = ['navigational', 'danger', 'success', 'neutral'];

const Button = ({
  circle,
  className,
  contentClass,
  intent,
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

  const classes = cn(styles.button, styles[intent], styles[size], styles[actionType], className, {
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

  const iconBefore = iconLeft || iconTop;

  return (
    <Component className={classes} type={type} disabled={isDisabled} {..._omit(props, 'highlighted')}>
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
  circle: PropTypes.bool,
  intent: PropTypes.oneOf(intents),
  rounded: PropTypes.bool,
  premium: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
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
  intent: 'primary',
  rounded: false,
  size: 'm',
  component: 'button',
  actionType: 'navigational'
};

export default Button;
