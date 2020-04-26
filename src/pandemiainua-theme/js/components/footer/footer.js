import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@pinua/uikit';
import i18n from 'i18n';
import styles from './footer.scss';

const Footer = ({ title, children, ...props }) => {
  return (
    <footer>
      <Box className={styles.footer} justify="center" align="center">
        <Text>{i18n.t('footer.copyright')}</Text>
      </Box>
    </footer>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number
};

export default memo(Footer);
