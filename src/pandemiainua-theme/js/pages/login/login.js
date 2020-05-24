import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@pinua/common/components';
import { Box, Text } from '@pinua/uikit';
import { LoginForm } from 'components/forms';
import i18n from 'i18n';

import styles from './login.scss';

const Login = ({ history, ...props }) => (
  <Layout className={styles.page}>
    <Box fullWidth justify="center" align="center" direction="column">
      <Box className={styles.title} justify="center" align="center" direction="column" bottom="l">
        <Text component="h3" size="xl">
          {i18n.t('login.title')}
        </Text>
        <Text top="m" size="s" color="info" align="center">
          {i18n.t('login.text')}
        </Text>
      </Box>
      <LoginForm />
    </Box>
  </Layout>
);

Login.propTypes = {
  history: PropTypes.object
};

export default Login;
