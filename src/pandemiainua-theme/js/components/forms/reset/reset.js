import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Text, Box, FormItem, Button } from '@pinua/uikit';

import i18n from 'i18n';

import styles from './reset.scss';

const Reset = ({ handleSubmit, isSubmitting, ...props }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormItem required name="email" type="email" label={i18n.t('passwordReset.email')} />

      <Box top="l" inject>
        <Button loading={isSubmitting} size="s" type="submit" fullWidth>
          {i18n.t('passwordReset.button')}
        </Button>
      </Box>
      <Box fullWidth justify="center" align="center" top="m" inject>
        <Text size="s" align="center" right="s">
          {i18n.t('passwordReset.back')}
        </Text>
        <Text component={Link} to="/login" size="s" color="dashed">
          {i18n.t('passwordReset.login')}
        </Text>
      </Box>
    </form>
  );
};

Reset.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool
};

export default Reset;
