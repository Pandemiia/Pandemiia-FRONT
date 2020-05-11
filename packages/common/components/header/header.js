import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@pinua/uikit';

import styles from './header.scss';

const Header = ({ left, right, children, className, showBurgerMenu, onBurgerMenuPress, ...props }) => {
  return (
    <header className={cn(styles.header, className)}>
      <Box className={styles.left} justify="start" align="center">
        {showBurgerMenu && (
          <Box className={styles.icon} onClick={onBurgerMenuPress} justify="center" align="center">
            <FontAwesomeIcon icon={faBars} />
          </Box>
        )}
        {left}
      </Box>
      <Box className={styles.middle}>{children}</Box>
      <Box className={styles.right} justify="end" align="center">
        {right}
      </Box>
    </header>
  );
};

Header.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  showBurgerMenu: PropTypes.bool,
  onBurgerMenuPress: PropTypes.func,
  className: PropTypes.string
};

export default memo(Header);
