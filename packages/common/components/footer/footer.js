import React, { memo } from 'react';
import cn from 'classnames';
import { Box, Text } from '@pinua/uikit';
import i18n from 'i18n';
import styles from './footer.scss';

const Footer = ({ children, ...props }) => {
  return (
    <footer>
      <Box className={cn(styles.footer)} justify="center" align="center">
        <Text>{i18n.t('footer.copyright')}</Text>
        {children}
      </Box>
    </footer>
  );
};

export default memo(Footer);
