import React from 'react';
import { Box, Text, Button } from '@pinua/uikit';
import styles from './404.scss';

const NotFound = () => {
  return (
    <Box className={styles.page} justify="center" align="center" direction="column">
      <Text component="h1" size="xxl" className={styles.title}>
        404
      </Text>
      <Text component="p" size="m" className={styles.subtext}>
        Ooops... it seems you are lost
      </Text>
      <Button className={styles.button}>
        <a href="/" className={styles.link}>
          Go back home
        </a>
      </Button>
    </Box>
  );
};

export default NotFound;
