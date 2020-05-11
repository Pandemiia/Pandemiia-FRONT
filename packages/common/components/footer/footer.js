import React, { memo } from 'react';
import cn from 'classnames';
import { Box } from '@pinua/uikit';

import styles from './footer.scss';

const Footer = ({ children, ...props }) => {
  return (
    <footer>
      <Box className={cn(styles.footer)} justify="center" align="center">
        {children}
      </Box>
    </footer>
  );
};

export default memo(Footer);
