import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Text, Box, FormItem, Checkbox, Button, PasswordInput } from '@pinua/uikit';

import i18n from 'i18n';

import styles from './login.scss';

const Login = ({ handleSubmit, isSubmitting, ...props }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormItem required name="email" type="email" label={i18n.t('login.email')} />

      <FormItem name="password" component={PasswordInput} required label={i18n.t('login.password')} />

      <Box fullWidth justify="between" top="m">
        <FormItem
          name="remember"
          component={Checkbox}
          componentProps={{
            label: (
              <Text left="s" size="s">
                {i18n.t('login.remember')}
              </Text>
            )
          }}
        />
        <Text component={Link} to="/reset-password" size="s" color="dashed">
          {i18n.t('login.forgot')}
        </Text>
      </Box>
      <Box top="l" inject>
        <Button loading={isSubmitting} size="s" type="submit" fullWidth>
          {i18n.t('login.button')}
        </Button>
      </Box>
      <Box fullWidth justify="center" align="center" top="m" inject>
        <Text size="s" align="center" right="s">
          {i18n.t('login.noAccount')}
        </Text>
        <Text component={Link} to="/register" size="s" color="dashed">
          {i18n.t('login.register')}
        </Text>
      </Box>
    </form>
  );
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool
};

export default Login;
