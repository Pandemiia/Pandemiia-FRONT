import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@pinua/uikit';

import styles from './footer.scss';

const Footer = ({ title, total, ...props }) => {
  return (
    <footer>
      <Box className={styles.footer} justify="center" align="center">
        <Text>© Pandemia, 2020-2021</Text>
      </Box>
    </footer>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number
};

Footer.defaultProps = {
  total: 0
};
export default memo(Footer);
