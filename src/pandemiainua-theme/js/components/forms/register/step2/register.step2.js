import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, FormItem, Button, Text } from '@pinua/uikit';

import i18n from 'i18n';

import styles from './register.step2.scss';

const RegisterStep2 = ({ handleSubmit, isSubmitting, ...props }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormItem required name="lastName" type="text" label={i18n.t('register.lastName')} />
      <FormItem required name="name" type="text" label={i18n.t('register.name')} />
      <FormItem required name="phone" type="tel" label={i18n.t('register.phone')} />
      <FormItem required name="city" type="text" label={i18n.t('register.city')} />
      <FormItem required name="clinic" type="text" label={i18n.t('register.clinic')} />

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

RegisterStep2.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool
};

export default RegisterStep2;
