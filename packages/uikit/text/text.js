import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import _get from 'lodash/get';

import styles from './text.scss';

export const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
const sizesValue = {
  xs: 4,
  s: 8,
  m: 16,
  ms: 24,
  l: 32,
  xl: 64,
  xxl: 128
};

export const colors = ['primary', 'secondary', 'info', 'navigational', 'success', 'danger', 'dashed'];
export const types = ['title', 'body', 'subtext'];

const Text = ({
  component: Component,
  top,
  left,
  right,
  bottom,
  color,
  size,
  className,
  align,
  transform,
  decoration,
  bold,
  typeface,
  overflow,
  inject,
  breakWord,
  danger,
  ...props
}) => {
  const classes = cn(className, styles[typeface], styles.general, {
    [styles[color]]: !!color,
    [styles[size]]: !!size,
    [styles[align]]: !!align,
    [styles.bold]: !!bold,
    [styles[breakWord]]: !!breakWord,
    [styles[transform]]: !!transform,
    [styles[decoration]]: !!decoration,
    [styles[overflow]]: !!overflow
  });

  const inlineStyles = {
    marginTop: _get(sizesValue, top),
    marginBottom: _get(sizesValue, bottom),
    marginLeft: _get(sizesValue, left),
    marginRight: _get(sizesValue, right)
  };

  if (inject) {
    return React.cloneElement(props.children, {
      className: classes
    });
  }

  if (danger) {
    const { children, ...rest } = props;
    return (
      <Component style={inlineStyles} {...rest} dangerouslySetInnerHTML={{ __html: children }} className={classes} />
    );
  }

  return <Component style={inlineStyles} {...props} className={classes} />;
};

Text.propTypes = {
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(sizes),
  top: PropTypes.oneOf(sizes),
  bottom: PropTypes.oneOf(sizes),
  left: PropTypes.oneOf(sizes),
  right: PropTypes.oneOf(sizes),
  transform: PropTypes.oneOf(['capitalize', 'lowercase', 'uppercase']),
  decoration: PropTypes.oneOf(['none', 'underline', 'overline', 'line-through']),
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  breakWord: PropTypes.oneOf(['break-all', 'break-word', 'keep-all', 'normal']),
  children: PropTypes.node,
  overflow: PropTypes.oneOf(['ellipsis', 'hidden']),
  inject: PropTypes.bool,
  className: PropTypes.string,
  bold: PropTypes.bool,
  typeface: PropTypes.oneOf(['base', 'condensed', 'condensed-black']),
  danger: PropTypes.bool
};

Text.defaultProps = {
  component: 'p',
  size: 'm',
  align: 'left',
  typeface: 'base'
};

export default memo(Text);
