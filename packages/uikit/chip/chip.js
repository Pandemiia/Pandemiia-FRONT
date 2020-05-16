import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import _get from 'lodash/get';

import { Button } from '@pinua/uikit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './chip.scss';

export const sizes = ['s', 'm', 'l', 'xl', 'xxl'];

const sizesValue = {
  xs: 4,
  s: 8,
  m: 16,
  ms: 24,
  l: 32,
  xl: 64,
  xxl: 128
};

export const colors = ['primary', 'secondary'];

const Chip = ({
  component: Component,
  top,
  left,
  right,
  bottom,
  color,
  size,
  className,
  align,
  children,
  onClose,
  ...props
}) => {
  const classes = cn(className, styles.general, {
    [styles[color]]: !!color,
    [styles[size]]: !!size,
    [styles[align]]: !!align
  });

  const inlineStyles = {
    marginTop: _get(sizesValue, top),
    marginBottom: _get(sizesValue, bottom),
    marginLeft: _get(sizesValue, left),
    marginRight: _get(sizesValue, right)
  };

  return (
    <Component style={inlineStyles} {...props} className={classes}>
      {children}
      {onClose && (
        <Button
          className={styles.close}
          left="s"
          onClick={onClose}
          color="transparent"
          rounded
          iconRight={<FontAwesomeIcon icon={faTimes} />}
        />
      )}
    </Component>
  );
};

Chip.propTypes = {
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(sizes),
  top: PropTypes.oneOf(sizes),
  bottom: PropTypes.oneOf(sizes),
  left: PropTypes.oneOf(sizes),
  right: PropTypes.oneOf(sizes),
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  children: PropTypes.node,
  inject: PropTypes.bool,
  className: PropTypes.string,
  onClose: PropTypes.func
};

Chip.defaultProps = {
  component: 'p',
  size: 's',
  align: 'left',
  color: 'primary'
};

export default memo(Chip);
