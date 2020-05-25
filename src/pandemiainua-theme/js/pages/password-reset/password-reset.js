import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@pinua/common/components';
import { ResetForm } from 'components/forms/reset';
import { Box, Text } from '@pinua/uikit';

import i18n from 'i18n';

import styles from './password-reset.scss';

const PasswordReset = ({ history, ...props }) => (
  <Layout className={styles.page}>
    <Box fullWidth justify="center" align="center" direction="column">
      <Box className={styles.title} justify="center" align="center" direction="column" bottom="l">
        <Text component="h3" size="xl" align="center">
          {i18n.t('passwordReset.title')}
        </Text>
        <Text top="m" size="s" color="info" align="center">
          {i18n.t('passwordReset.text')}
        </Text>
      </Box>
      <ResetForm />
    </Box>
  </Layout>
);

PasswordReset.propTypes = {
  history: PropTypes.object
};

export default PasswordReset;
