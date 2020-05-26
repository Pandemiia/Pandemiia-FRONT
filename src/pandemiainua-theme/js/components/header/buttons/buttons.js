import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Box, Button } from '@pinua/uikit';
import i18n from 'i18n';

import styles from './buttons.scss';

const HeaderButtons = ({ size, isLoggedIn, direction, onLogin, onRegister, className, onClose, ...props }) => {
  return (
    <Box className={cn(styles.buttons, className)} justify="end" direction={direction}>
      <Button
        component={Link}
        className={styles.button}
        size={size}
        color="secondary"
        to={isLoggedIn ? '/account' : '/login'}
        onClick={onClose}
      >
        {isLoggedIn ? i18n.t('header.account') : i18n.t('header.login')}
      </Button>
      <Button
        component={Link}
        className={styles.button}
        size={size}
        onClick={onRegister && onClose}
        to={isLoggedIn ? '/application' : '/register'}
      >
        {isLoggedIn ? i18n.t('header.application') : i18n.t('header.register')}
      </Button>
    </Box>
  );
};

HeaderButtons.propTypes = {
  size: PropTypes.oneOf(['xs', 's', 'm']),
  direction: PropTypes.oneOf(['column', 'row']),
  className: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  onLogin: PropTypes.func,
  onRegister: PropTypes.func,
  onClose: PropTypes.func
};

export default memo(HeaderButtons);
