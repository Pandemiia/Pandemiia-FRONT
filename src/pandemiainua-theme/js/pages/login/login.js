import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@pinua/common/components';
import { Box } from '@pinua/uikit';
import styles from './login.scss';

const Login = ({ history, ...props }) => (
  <Layout className={styles.page}>
    <Box>Login Page</Box>
  </Layout>
);

Login.propTypes = {
  history: PropTypes.object
};

export default Login;
