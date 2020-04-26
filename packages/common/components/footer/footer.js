import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Box } from '@pinua/uikit';

import styles from './footer.scss';

const Footer = ({ title, children, ...props }) => {
  return (
    <footer>
      <Box className={cn(styles.footer)} justify="center" align="center">
        {children}
      </Box>
    </footer>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number
};

export default memo(Footer);
