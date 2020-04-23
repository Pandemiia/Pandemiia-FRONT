import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Box } from '@pinua/uikit';

import styles from './sidebar.css';

const SideBar = ({ isOpen, position, className, children, ...props }) => {
  return (
    <Box
      className={cn(styles.sidebar, styles[position], className, {
        [styles.open]: isOpen
      })}
      direction="column"
    >
      {children}
    </Box>
  );
};

SideBar.propTypes = {
  position: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool
};

SideBar.defaultProps = {
  position: 'left',
  isOpen: false
};

export default memo(SideBar);
