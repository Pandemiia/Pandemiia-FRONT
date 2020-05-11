import React from 'react';
import { Box, Button, Text } from '@pinua/uikit';
import i18n from 'i18n';

import styles from './NotFound.scss';

const NotFound = () => {
  return (
    <Box className={styles.page} justify="center" align="center" direction="column">
      <Text component="h1" size="xxl" className={styles.title}>
        {i18n.t('notfaund.error')}
      </Text>
      <Text component="p" size="m" className={styles.subtext}>
        {i18n.t('notfaund.sorry')}
      </Text>
      <Button className={styles.button}>
        <a href="/" className={styles.link}>
          {i18n.t('notfaund.gohome')}
        </a>
      </Button>
    </Box>
  );
};

export default NotFound;
