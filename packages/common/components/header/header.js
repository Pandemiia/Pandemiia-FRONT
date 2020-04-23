import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@pinua/uikit';

import styles from './header.scss';

const Header = ({ title, onMenuClick, onCartClick, total, ...props }) => {
  return (
    <header className={styles.header}>
      <Box className={styles.left} justify="start" align="center">
        <Box className={styles.icon} justify="start" align="center" onClick={onMenuClick}></Box>
      </Box>
      <Box className={styles.middle}>
        <Text className={styles.title} size="m" align="center">
          {title}
        </Text>
      </Box>
      <Box className={styles.right} justify="end" align="center"></Box>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  onMenuClick: PropTypes.func,
  onCartClick: PropTypes.func,
  total: PropTypes.number
};

Header.defaultProps = {
  total: 0
};

export default memo(Header);
