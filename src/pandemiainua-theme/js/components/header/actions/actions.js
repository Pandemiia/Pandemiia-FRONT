import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Box, Button } from '@pinua/uikit';

import i18n from 'i18n';

import styles from './actions.scss';

const HeaderActions = ({ size, direction, onLogin, onRegister, className, ...props }) => {
  return (
    <Box className={cn(styles.buttons, className)} justify="end" direction={direction}>
      <Button className={styles.button} size={size} color="secondary" onClick={onLogin}>
        {i18n.t('header.login')}
      </Button>
      <Button className={styles.button} size={size} onClick={onRegister}>
        {i18n.t('header.register')}
      </Button>
    </Box>
  );
};

HeaderActions.propTypes = {
  size: PropTypes.oneOf(['xs', 's', 'm']),
  direction: PropTypes.oneOf(['column', 'row']),
  className: PropTypes.string,
  onLogin: PropTypes.func,
  onRegister: PropTypes.func
};

export default memo(HeaderActions);
