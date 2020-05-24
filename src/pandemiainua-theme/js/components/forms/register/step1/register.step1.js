import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, FormItem, Button, PasswordInput, Checkbox, Text } from '@pinua/uikit';

import i18n from 'i18n';

import styles from './register.step1.scss';

const RegisterStep1 = ({ handleSubmit, isSubmitting, ...props }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormItem required name="email" type="email" label={i18n.t('register.email')} />

      <FormItem name="password" component={PasswordInput} required label={i18n.t('register.password')} />
      <FormItem name="passwordConfirmation" component={PasswordInput} required label={i18n.t('register.confirm')} />

      <Box fullWidth justify="between" top="m">
        <FormItem
          name="remember"
          component={Checkbox}
          componentProps={{
            label: (
              <>
                <Text left="s" size="s">
                  {i18n.t('register.agreement')}
                </Text>
                <Text left="s" component={Link} to="/reset-password" size="s" color="dashed">
                  {i18n.t('register.policy')}
                </Text>
              </>
            )
          }}
        />
      </Box>

      <Box top="l" inject>
        <Button loading={isSubmitting} size="s" type="submit" fullWidth>
          {i18n.t('register.button')}
        </Button>
      </Box>

      <Box fullWidth justify="center" align="center" top="m" inject>
        <Text size="s" align="center" right="s">
          {i18n.t('register.alreadyHasAccount')}
        </Text>
        <Text component={Link} to="/login" size="s" color="dashed">
          {i18n.t('register.login')}
        </Text>
      </Box>
    </form>
  );
};

RegisterStep1.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool
};

export default RegisterStep1;
