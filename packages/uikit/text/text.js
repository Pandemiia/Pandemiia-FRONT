import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './text.css';

const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
const types = ['primary', 'info', 'navigational', 'success', 'warning', 'danger'];

const Text = ({
  component: Component,
  intent,
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
  const classes = classNames(className, styles[typeface], styles.general, {
    [styles[intent]]: !!intent,
    [styles[size]]: !!size,
    [styles[align]]: !!align,
    [styles.bold]: !!bold,
    [styles[breakWord]]: !!breakWord,
    [styles[transform]]: !!transform,
    [styles[decoration]]: !!decoration,
    [styles[overflow]]: !!overflow
  });

  if (inject) {
    return React.cloneElement(props.children, {
      className: classes
    });
  }

  if (danger) {
    const { children, ...rest } = props;
    return <Component {...rest} dangerouslySetInnerHTML={{ __html: children }} className={classes} />;
  }

  return <Component {...props} className={classes} />;
};

Text.propTypes = {
  intent: PropTypes.oneOf(types),
  color: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  transform: PropTypes.oneOf(['capitalize', 'lowercase', 'uppercase']),
  decoration: PropTypes.oneOf(['none', 'underline', 'overline', 'line-through']),
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
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
